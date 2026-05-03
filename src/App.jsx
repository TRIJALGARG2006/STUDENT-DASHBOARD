import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Stats from './components/Stats.jsx';
import StudentForm from './components/StudentForm.jsx';
import StudentTable from './components/StudentTable.jsx';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Akshay', marks: 89 },
    { id: 2, name: 'Ayush', marks: 90 },
    { id: 3, name: 'Harsh', marks: 30 },
  ]);

  const addStudent = (name, marks) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      marks: Number(marks)
    };
    setStudents([...students, newStudent]);
  };

  const updateMarks = (id, newMarks) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, marks: Number(newMarks) } : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="left-panel">
          <Stats students={students} />
          <StudentForm addStudent={addStudent} />
        </div>
        <div className="right-panel">
          <StudentTable 
            students={students} 
            updateMarks={updateMarks} 
            deleteStudent={deleteStudent} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
