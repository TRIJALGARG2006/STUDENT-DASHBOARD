import React, { useState } from 'react';

function StudentRow({ student, updateMarks, deleteStudent }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editMarks, setEditMarks] = useState(student.marks);

  const isPassed = student.marks >= 40;
  
  const handleUpdate = () => {
    if (isEditing) {
      if (editMarks < 0 || editMarks > 100) {
        alert("Marks must be between 0 and 100!");
        return;
      }
      updateMarks(student.id, editMarks);
    }
    setIsEditing(!isEditing);
  };

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        {isEditing ? (
          <input 
            type="number" 
            value={editMarks} 
            onChange={(e) => setEditMarks(e.target.value)}
            style={{ width: '60px', padding: '5px' }}
          />
        ) : (
          student.marks
        )}
      </td>
      <td>
        <span className={isPassed ? 'status-passed' : 'status-failed'}>
          {isPassed ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td className="action-buttons">
        <button onClick={handleUpdate} className="btn-update">
          {isEditing ? 'Save' : 'Update'}
        </button>
        <button onClick={() => deleteStudent(student.id)} className="btn-delete">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
