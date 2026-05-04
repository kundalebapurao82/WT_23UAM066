import './SummaryCards.css';

function SummaryCards({ students }) {

  const total = students.length;

  const avgAge =
    students.reduce((sum, s) => sum + s.age, 0) / students.length;

  return (
    <div className="cards">
      <div className="card">
        <h3>Total Students</h3>
        <p>{total}</p>
      </div>

      <div className="card">
        <h3>Average Age</h3>
        <p>{avgAge.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default SummaryCards;