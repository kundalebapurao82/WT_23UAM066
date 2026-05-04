import { useState } from 'react';
// import './AddStudent.css';

function AddStudent({ onAdd }) {

  const [student, setStudent] = useState({
    id: '',
    name: '',
    age: '',
    course: ''
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    if (!student.id || !student.name || !student.age || !student.course) {
      alert("Fill all fields");
      return;
    }

    onAdd({
      id: Number(student.id),
      name: student.name,
      age: Number(student.age),
      course: student.course
    });

    setStudent({ id: '', name: '', age: '', course: '' });
  };

  return (
    <div className="form-box">
      <h2>Add Student</h2>

      <input name="id" value={student.id} onChange={handleChange} placeholder="ID" />
      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={student.age} onChange={handleChange} placeholder="Age" />
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course" />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddStudent;