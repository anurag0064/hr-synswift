import React, { useState } from 'react';
import Navbar from '../../../layouts/components/Navbar/Navbar';
import Usersidebar from '../dashboard/userdashboard/components/usersidebar/usersidebar';

const LeaveTypesTable = () => {
  const [leaveTypes, setLeaveTypes] = useState([
    { id: 1, name: 'Annual Leave', description: 'Paid time off for vacation purposes' },
    { id: 2, name: 'Sick Leave', description: 'Paid time off for illness or medical appointments' },
    { id: 3, name: 'Maternity Leave', description: 'Paid time off for new mothers' },
    { id: 4, name: 'Paternity Leave', description: 'Paid time off for new mothers' },
    { id: 5, name: 'Casual Leave', description: 'Paid time off granted to employees for personal reasons or circumstances' },
  ]);

  const handleEdit = (id) => {
   
    console.log("Editing leave type with id:", id);
  };

  return (
    <>
      <Navbar/>
      <div className='d-flex'>
        <Usersidebar/>
        <div className='w-100 ms-3 mt-4'>
          <h2 className="mb-4">Leave Types Category</h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {leaveTypes.map((leaveType) => (
                <tr key={leaveType.id}>
                  <td>{leaveType.id}</td>
                  <td>{leaveType.name}</td>
                  <td>{leaveType.description}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(leaveType.id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaveTypesTable;
