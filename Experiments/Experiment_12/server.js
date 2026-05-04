const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/* ================= CREATE ================= */
app.post('/students', (req, res) => {
  const { name, age, course } = req.body;

  const sql = 'INSERT INTO students (name, age, course) VALUES (?, ?, ?)';

  db.query(sql, [name, age, course], (err, result) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      res.send('Student Added');
    }
  });
});

/* ================= READ ================= */
app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM students';

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      res.json(result);
    }
  });
});

/* ================= UPDATE ================= */
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, course } = req.body;

  const sql = 'UPDATE students SET name=?, age=?, course=? WHERE id=?';

  db.query(sql, [name, age, course, id], (err, result) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      res.send('Student Updated');
    }
  });
});

/* ================= DELETE ================= */
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM students WHERE id=?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      res.send('Student Deleted');
    }
  });
});

/* ================= SERVER ================= */
app.listen(3000, () => {
  console.log('Server running on port 3000');
});