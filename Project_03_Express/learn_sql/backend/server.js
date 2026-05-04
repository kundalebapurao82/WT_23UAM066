import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";
import pkg from "node-sql-parser";

const { Parser } = pkg;

dotenv.config();

const app = express();
const parser = new Parser();

app.use(cors());
app.use(express.json());

function validateSQL(sql) {
  try {
    parser.astify(sql);
    return null;
  } catch (err) {
    return "Invalid SQL syntax";
  }
}

app.post("/generate-sql", async (req, res) => {
  try {
    const { question, tableName, colInfo } = req.body;

    const systemMsg = `
You are a SQL expert.

Table name: ${tableName}

Columns:
${colInfo}

Rules:
1. Generate a valid SQL query.
2. Any SQL type is allowed (SELECT, INSERT, UPDATE, DELETE, etc).
3. Use standard SQL (PostgreSQL style).
4. Column names must match exactly.
5. Return ONLY the SQL query.
6. check that user asking question is relevant to table and columns, if not return an error message.
`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemMsg },
          { role: "user", content: question }
        ],
        temperature: 0.1
      })
    });

    const data = await response.json();

    let sql = data.choices[0].message.content.trim();
    sql = sql.replace(/```sql/gi, "").replace(/```/g, "").trim();

    const error = validateSQL(sql);

    if (error) {
      return res.status(400).json({ error });
    }

    res.json({ sql });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});