import React from 'react';
import StudentRow from './StudentRow.jsx';

function StudentTable({ students, updateMarks, deleteStudent }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Result</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <StudentRow 
                key={student.id} 
                student={student} 
                updateMarks={updateMarks} 
                deleteStudent={deleteStudent} 
              />
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                No students yet. Add students to view their performance.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
