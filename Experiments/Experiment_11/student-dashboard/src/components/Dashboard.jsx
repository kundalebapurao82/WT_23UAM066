import { useState } from 'react';
import SummaryCards from './SummaryCards';
import StudentTable from './StudentTable';
import Filter from './Filter';
import AddStudent from './AddStudent';
import './Dashboard.css';

function Dashboard({ students, addStudent, deleteStudent }) {

  const [filter, setFilter] = useState('All');

  const filteredStudents =
    filter === 'All'
      ? students
      : students.filter(s => s.course === filter);

  return (
    <div className="container">
      <h1>Student Dashboard</h1>

      <SummaryCards students={students} />

      {/* ADD FORM */}
      <AddStudent onAdd={addStudent} />

      <Filter setFilter={setFilter} />

      {/* TABLE */}
      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default Dashboard;