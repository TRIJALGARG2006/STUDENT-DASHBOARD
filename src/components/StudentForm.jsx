import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !marks) {
      alert("Please enter both Name and Marks!");
      return;
    }
    
    if (marks < 0 || marks > 100) {
      alert("Marks must be between 0 and 100!");
      return;
    }

    addStudent(name, marks);
    setName('');
    setMarks('');
  };

  return (
    <div className="card">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input 
            type="text" 
            id="studentName" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Trijal Garg" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentMarks">Marks (0-100):</label>
          <input 
            type="number" 
            id="studentMarks" 
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="e.g. 85" 
          />
        </div>
        <button type="submit" className="btn">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
