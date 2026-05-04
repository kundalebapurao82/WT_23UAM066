import { useState } from 'react';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import './App.css';

function App() {

  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul', age: 20, course: 'CSE' },
    { id: 2, name: 'Priya', age: 21, course: 'IT' }
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="container">
      <h3>Student Management System</h3>

      <AddStudent onAdd={addStudent} />

      <StudentList students={students} />
    </div>
  );
}

export default App;