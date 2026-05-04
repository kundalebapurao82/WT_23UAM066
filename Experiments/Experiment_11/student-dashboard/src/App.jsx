import { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {

  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul', age: 20, course: 'CSE' },
    { id: 2, name: 'Priya', age: 21, course: 'IT' }
  ]);

  // ADD
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // DELETE
  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <Dashboard
      students={students}
      addStudent={addStudent}
      deleteStudent={deleteStudent}
    />
  );
}

export default App;