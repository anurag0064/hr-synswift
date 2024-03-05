import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../layouts/components/Navbar/Navbar';
import Usersidebar from '../dashboard/userdashboard/components/usersidebar/usersidebar';
import { API_URL } from '../../../constants/common';

const LeaveList = () => {
    const [leaveList, setLeaveList] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchLeaveList(); // Fetch leave list data when component mounts
    }, []); // Empty dependency array ensures it only runs once on mount

    const fetchLeaveList = async () => {
        try {
            const response = await axios.get(`${API_URL}/leavelist`);
            setLeaveList(response.data);
        } catch (error) {
            console.error('Error fetching leave list:', error);
            setError('Error fetching leave list. Please try again later.');
        }
    };

    return (
        <>
            <Navbar />
            <div className='d-flex'>
                <Usersidebar />
                <div id="content" className="pmd-content inner-page admin ms-3 w-100">
                    <h1 id="leave" style={{ marginBottom: '20px' }}>Leave</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb pmd-breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Leave</li>
                        </ol>
                    </nav>
                    <section className="component-section mt-4" id="employee">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <table className="table pmd-table table-hover pmd-table-card">
                            <thead className="thead-light">
                                <tr>
                                    <th>Employee</th>
                                    <th>Leave Type</th>
                                    <th>Half Day</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Reason</th>
                                    <th>No of Leave</th>
                                    <th>Paid / Unpaid</th>
                                    <th>Status</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {leaveList.map((leave, index) => (
                                    <tr key={index}>
                                        <td data-title="Employee">{leave.employee}</td>
                                        <td data-title="Leave Type">{leave.leaveType}</td>
                                        <td data-title="Half Day">{leave.isHalfDay ? 'Yes' : 'No'}</td>
                                        <td data-title="Start Date">{leave.startDate}</td>
                                        <td data-title="End Date">{leave.endDate}</td>
                                        <td data-title="Reason">{leave.reason}</td>
                                        <td data-title="No of Leave">{leave.noOfLeave}</td>
                                        <td data-title="Paid / Unpaid">{leave.isPaid ? 'Paid' : 'Unpaid'}</td>
                                        <td data-title="Status">{leave.status}</td>
                                        <td data-title>
                                            <button type="button" title="Accept" className="pmd-btn-fab btn-xs btn-outline-secondary btn mr-2 pmd-ripple-effect">
                                                <i className="material-icons">done</i>
                                            </button>
                                            <button type="button" title="Reject" className="pmd-btn-fab btn-xs btn-outline-danger btn pmd-ripple-effect" data-toggle="modal" data-target="#reject-modal">
                                                <i className="material-icons">close</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </>
    );
};

export default LeaveList;
