const fileInput = document.getElementById("file-input");

let headers = [];
let tableData = [];
let tableName = "dataset";

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  tableName = file.name.replace(/\W+/g, "_");

  if (file.name.endsWith(".csv")) {
    parseCSV(file);
  } else {
    parseXLSX(file);
  }
});

function parseCSV(file) {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      headers = results.meta.fields;
      tableData = results.data;
      showPreview();
    }
  });
}

function parseXLSX(file) {
  const reader = new FileReader();

  reader.onload = (e) => {
    const wb = XLSX.read(e.target.result, { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    tableData = XLSX.utils.sheet_to_json(ws);

    headers = Object.keys(tableData[0]);
    showPreview();
  };

  reader.readAsArrayBuffer(file);
}

function showPreview() {
  const preview = tableData.slice(0, 10);

  let html = "<table><tr>";

  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr>";

  preview.forEach(row => {
    html += "<tr>";
    headers.forEach(h => html += `<td>${row[h]}</td>`);
    html += "</tr>";
  });

  html += "</table>";

  document.getElementById("preview").innerHTML = html;
}

function detectType(value) {
  if (!value) return "string";
  if (!isNaN(value)) return "number";
  if (!isNaN(Date.parse(value))) return "date";
  return "string";
}

function buildColInfo() {
  const sampleRows = tableData.slice(0, 10);
  let colInfo = "";

  headers.forEach(col => {
    let types = {};
    let samples = [];

    sampleRows.forEach(row => {
      const val = row[col];
      const type = detectType(val);

      types[type] = (types[type] || 0) + 1;

      if (val && !samples.includes(val)) {
        samples.push(val);
      }
    });

    const mainType = Object.keys(types).reduce((a, b) =>
      types[a] > types[b] ? a : b
    );

    colInfo += `- ${col} (${mainType}, eg: ${samples.slice(0,3).join(", ")})\n`;
  });

  return colInfo;
}

async function generateSQL() {
  const question = document.getElementById("question").value;

  const response = await fetch("http://localhost:3000/generate-sql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question,
      tableName,
      colInfo: buildColInfo()
    })
  });

  const data = await response.json();

  if (data.error) {
    alert(data.error);
    return;
  }

  document.getElementById("output").textContent = data.sql;
}