import React from 'react';

function Stats({ students }) {
  const totalStudents = students.length;
  const passedStudents = students.filter(student => student.marks >= 40).length;
  
  const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
  const averageMarks = totalStudents === 0 ? 0 : (totalMarks / totalStudents).toFixed(1);

  return (
    <div className="card">
      <h2>Class Stats</h2>
      <div className="stat-item">
        <span>Total Students:</span>
        <span className="stat-value">{totalStudents}</span>
      </div>
      <div className="stat-item">
        <span>Passed:</span>
        <span className="stat-value" style={{color: 'var(--pass-color)'}}>{passedStudents}</span>
      </div>
      <div className="stat-item">
        <span>Failed:</span>
        <span className="stat-value" style={{color: 'var(--fail-color)'}}>{totalStudents - passedStudents}</span>
      </div>
      <div className="stat-item">
        <span>Avg Marks:</span>
        <span className="stat-value">{averageMarks}</span>
      </div>
    </div>
  );
}

export default Stats;
