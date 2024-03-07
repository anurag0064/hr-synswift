// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../../../layouts/components/Navbar/Navbar';
// import Usersidebar from '../dashboard/userdashboard/components/usersidebar/usersidebar';
// import { API_URL } from '../../../constants/common';

// const Applyleave = () => {
//     const [leaveType, setLeaveType] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [reason, setReason] = useState('');
//     const [isHalfDay, setIsHalfDay] = useState(false);
//     const [isFullDay, setIsFullDay] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const leaveData = {
//             leaveType,
//             startDate,
//             endDate,
//             reason,
//             isHalfDay,
//             isFullDay
//         };

//         try {
//             const response = await axios.post(`${API_URL}/applyleave`, leaveData);

//             if (response.status !== 200) {
//                 console.error('Failed to submit leave application');
//             } else {
//                 console.log('Leave application submitted successfully');

//                 setLeaveType('');
//                 setStartDate('');
//                 setEndDate('');
//                 setReason('');
//                 setIsHalfDay(false);
//                 setIsFullDay(false);
//             }
//         } catch (error) {
//             console.error('Error submitting leave application:', error.message);
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='d-flex'>
//                 <Usersidebar />
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h1 className="card-title text-center mb-4">Apply Leave</h1>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="form-group mt-2">
//                                             <label htmlFor="leave-type">Leave Type</label>
//                                             <select
//                                                 value={leaveType}
//                                                 onChange={(e) => setLeaveType(e.target.value)}
//                                                 className="form-control"
//                                                 id="leave-type"
//                                                 required
//                                             >
//                                                 <option value="">Select Leave Type</option>
//                                                 <option value="Sick Leave">Sick Leave</option>
//                                                 <option value="Casual Leave">Casual Leave</option>
//                                                 <option value="Maternity Leave">Maternity Leave</option>
//                                                 <option value="Paternity Leave">Paternity Leave</option>
//                                             </select>
//                                         </div>

//                                         <div className="form-group mt-3">
//                                             <label htmlFor="datepickerstart">Start Date</label>
//                                             <input
//                                                 type="date"
//                                                 value={startDate}
//                                                 onChange={(e) => setStartDate(e.target.value)}
//                                                 className="form-control"
//                                                 id="datepickerstart"
//                                                 required
//                                             />
//                                         </div>

//                                         <div className="form-group mt-3">
//                                             <label htmlFor="datepickerend">End Date</label>
//                                             <input
//                                                 type="date"
//                                                 value={endDate}
//                                                 onChange={(e) => setEndDate(e.target.value)}
//                                                 className="form-control"
//                                                 id="datepickerend"
//                                                 required
//                                             />
//                                         </div>

//                                         <div className="form-group mt-3">
//                                             <label htmlFor="reason">Reason</label>
//                                             <textarea
//                                                 value={reason}
//                                                 onChange={(e) => setReason(e.target.value)}
//                                                 className="form-control"
//                                                 id="reason"
//                                                 required
//                                             />
//                                         </div>

//                                         <div className="form-group d-flex justify-content-between align-items-center">
//                                             <div className="custom-control custom-checkbox">
//                                                 <input
//                                                     className="custom-control-input"
//                                                     type="checkbox"
//                                                     checked={isHalfDay}
//                                                     onChange={(e) => setIsHalfDay(e.target.checked)}
//                                                     id="isHalfDay"
//                                                 />
//                                                 <label className="custom-control-label ms-2" htmlFor="isHalfDay">
//                                                     Is it a Half Day?
//                                                 </label>
//                                             </div>
//                                             <div className="custom-control custom-checkbox">
//                                                 <input
//                                                     className="custom-control-input"
//                                                     type="checkbox"
//                                                     checked={isFullDay}
//                                                     onChange={(e) => setIsFullDay(e.target.checked)}
//                                                     id="isFullDay"
//                                                 />
//                                                 <label className="custom-control-label ms-2" htmlFor="isFullDay">
//                                                     Is it a Full Day?
//                                                 </label>
//                                             </div>
//                                         </div>

//                                         <div className="form-group text-center">
//                                             <button type="submit" className="btn btn-primary">Apply Leave</button>
//                                             <a href="/" className="btn btn-outline-secondary ms-2">Cancel</a>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Applyleave;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';
// import Navbar from '../../../layouts/components/Navbar/Navbar';
// import Usersidebar from '../dashboard/userdashboard/components/usersidebar/usersidebar';
// import { API_URL } from '../../../constants/common';

// const Applyleave = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [leaveType, setLeaveType] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [reason, setReason] = useState('');
//     const [isHalfDay, setIsHalfDay] = useState(false);
//     const [isFullDay, setIsFullDay] = useState(false);

//     const handleCloseModal = () => setShowModal(false);
//     const handleShowModal = () => setShowModal(true);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const leaveData = {
//             leaveType,
//             startDate,
//             endDate,
//             reason,
//             isHalfDay,
//             isFullDay
//         };

//         try {
//             const response = await axios.post(`${API_URL}/applyleave`, leaveData);

//             if (response.status !== 200) {
//                 console.error('Failed to submit leave application');
//             } else {
//                 console.log('Leave application submitted successfully');

//                 setLeaveType('');
//                 setStartDate('');
//                 setEndDate('');
//                 setReason('');
//                 setIsHalfDay(false);
//                 setIsFullDay(false);
//             }
//         } catch (error) {
//             console.error('Error submitting leave application:', error.message);
//         }

//         handleCloseModal();
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='d-flex'>
//                 <Usersidebar />
//                 <div className="container mt-5">
//                     <div className="row justify-content-center">
//                         <div className="col">
//                             <Button variant="success" onClick={handleShowModal}>+</Button>


//                             <Modal show={showModal} onHide={handleCloseModal}>
//                                 <Modal.Header closeButton>
//                                     <Modal.Title>Apply Leave</Modal.Title>
//                                 </Modal.Header>
//                                 <Modal.Body>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="form-group mt-2 ">
//                                             <label htmlFor="leave-type" className='mb-2'>Leave Type</label>
//                                             <select
//                                                 value={leaveType}
//                                                 onChange={(e) => setLeaveType(e.target.value)}
//                                                 className="form-control mb-2"
//                                                 id="leave-type"
//                                                 required
//                                             >
//                                                 <option value="">Select Leave Type</option>
//                                                 <option value="Sick Leave">Sick Leave</option>
//                                                 <option value="Casual Leave">Casual Leave</option>
//                                                 <option value="Maternity Leave">Maternity Leave</option>
//                                                 <option value="Paternity Leave">Paternity Leave</option>
//                                             </select>
//                                         </div>

//                                         <div className="form-group mt-3">
//                                             <label htmlFor="datepickerstart" className='mb-2'>Start Date</label>
//                                             <input
//                                                 type="date"
//                                                 value={startDate}
//                                                 onChange={(e) => setStartDate(e.target.value)}
//                                                 className="form-control"
//                                                 id="datepickerstart"
//                                                 required
//                                             />
//                                         </div>

//                                         <div className="form-group mt-3">
//                                             <label htmlFor="datepickerend" className='mb-2'>End Date</label>
//                                             <input
//                                                 type="date"
//                                                 value={endDate}
//                                                 onChange={(e) => setEndDate(e.target.value)}
//                                                 className="form-control"
//                                                 id="datepickerend"
//                                                 required
//                                             />
//                                         </div>

//                                         <div className="form-group mt-3">
//                                             <label htmlFor="reason" className='mb-2'>Reason</label>
//                                             <textarea
//                                                 value={reason}
//                                                 onChange={(e) => setReason(e.target.value)}
//                                                 className="form-control"
//                                                 id="reason"
//                                                 required
//                                             />
//                                         </div>

//                                         <div className="form-group d-flex justify-content-between align-items-center">
//                                             <div className="custom-control custom-checkbox">
//                                                 <input
//                                                     className="custom-control-input"
//                                                     type="checkbox"
//                                                     checked={isHalfDay}
//                                                     onChange={(e) => setIsHalfDay(e.target.checked)}
//                                                     id="isHalfDay"
//                                                 />
//                                                 <label className="custom-control-label ms-2" htmlFor="isHalfDay">
//                                                     Is it a Half Day?
//                                                 </label>
//                                             </div>
//                                             <div className="custom-control custom-checkbox">
//                                                 <input
//                                                     className="custom-control-input"
//                                                     type="checkbox"
//                                                     checked={isFullDay}
//                                                     onChange={(e) => setIsFullDay(e.target.checked)}
//                                                     id="isFullDay"
//                                                 />
//                                                 <label className="custom-control-label ms-2" htmlFor="isFullDay">
//                                                     Is it a Full Day?
//                                                 </label>
//                                             </div>
//                                         </div>



//                                         <div className="form-group text-center mt-4">
//                                             <button type="submit" className="btn btn-primary">Apply Leave</button>
//                                             <Button variant="secondary" onClick={handleCloseModal} className="ms-2">Cancel</Button>
//                                         </div>
//                                     </form>
//                                 </Modal.Body>
//                             </Modal>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Applyleave;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Table } from 'react-bootstrap';
import Navbar from '../../../layouts/components/Navbar/Navbar';
import Usersidebar from '../dashboard/userdashboard/components/usersidebar/usersidebar';
import { API_URL } from '../../../constants/common';

const Applyleave = () => {
    const [showModal, setShowModal] = useState(false);
    const [leaveType, setLeaveType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [isHalfDay, setIsHalfDay] = useState(false);
    const [isFullDay, setIsFullDay] = useState(false);
    const [leaveApplications, setLeaveApplications] = useState([]);

    useEffect(() => {
        fetchLeaveApplications();
    }, []);

    const fetchLeaveApplications = async () => {
        try {
            const response = await axios.get(`${API_URL}/leaveApplications`);
            setLeaveApplications(response.data);
        } catch (error) {
            console.error('Failed to fetch leave applications:', error);
        }
    };

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const leaveData = {
            leaveType,
            startDate,
            endDate,
            reason,
            isHalfDay,
            isFullDay
        };

        try {
            const response = await axios.post(`${API_URL}/applyleave`, leaveData);

            if (response.status !== 200) {
                console.error('Failed to submit leave application');
            } else {
                console.log('Leave application submitted successfully');

                setLeaveType('');
                setStartDate('');
                setEndDate('');
                setReason('');
                setIsHalfDay(false);
                setIsFullDay(false);

                fetchLeaveApplications();
            }
        } catch (error) {
            console.error('Error submitting leave application:', error.message);
        }

        handleCloseModal();
    };

    return (
        <>
            <Navbar />
            <div className='d-flex'>
                <Usersidebar />
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className='button d-flex justify-content-end'>
                            <Button variant="success" onClick={handleShowModal}>+</Button>
                            </div>
                            <Modal show={showModal} onHide={handleCloseModal}>  
                         <Modal.Header closeButton>
                                <Modal.Title>Apply Leave</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mt-2 ">
                                            <label htmlFor="leave-type" className='mb-2'>Leave Type</label>
                                            <select
                                                value={leaveType}
                                                onChange={(e) => setLeaveType(e.target.value)}
                                                className="form-control mb-2"
                                                id="leave-type"
                                                required
                                            >
                                                <option value="">Select Leave Type</option>
                                                <option value="Sick Leave">Sick Leave</option>
                                                <option value="Casual Leave">Casual Leave</option>
                                                <option value="Maternity Leave">Maternity Leave</option>
                                                <option value="Paternity Leave">Paternity Leave</option>
                                            </select>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label htmlFor="datepickerstart" className='mb-2'>Start Date</label>
                                            <input
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                className="form-control"
                                                id="datepickerstart"
                                                required
                                            />
                                        </div>

                                        <div className="form-group mt-3">
                                            <label htmlFor="datepickerend" className='mb-2'>End Date</label>
                                            <input
                                                type="date"
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                                className="form-control"
                                                id="datepickerend"
                                                required
                                            />
                                        </div>

                                        <div className="form-group mt-3">
                                            <label htmlFor="reason" className='mb-2'>Reason</label>
                                            <textarea
                                                value={reason}
                                                onChange={(e) => setReason(e.target.value)}
                                                className="form-control"
                                                id="reason"
                                                required
                                            />
                                        </div>

                                        <div className="form-group d-flex justify-content-between align-items-center">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    type="checkbox"
                                                    checked={isHalfDay}
                                                    onChange={(e) => setIsHalfDay(e.target.checked)}
                                                    id="isHalfDay"
                                                />
                                                <label className="custom-control-label ms-2" htmlFor="isHalfDay">
                                                    Is it a Half Day?
                                                </label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    type="checkbox"
                                                    checked={isFullDay}
                                                    onChange={(e) => setIsFullDay(e.target.checked)}
                                                    id="isFullDay"
                                                />
                                                <label className="custom-control-label ms-2" htmlFor="isFullDay">
                                                    Is it a Full Day?
                                                </label>
                                            </div>
                                        </div>



                                        <div className="form-group text-center mt-4">
                                            <button type="submit" className="btn btn-primary">Apply Leave</button>
                                            <Button variant="secondary" onClick={handleCloseModal} className="ms-2">Cancel</Button>
                                        </div>
                                    </form>
                                </Modal.Body>
                            </Modal>

                            <Table striped bordered hover className="mt-3">
                                <thead>
                                    <tr>
                                        <th>Leave Type</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Reason</th>
                                        <th>Is Half Day</th>
                                        <th>Is Full Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaveApplications.map((application, index) => (
                                        <tr key={index}>
                                            <td>{application.leaveType}</td>
                                            <td>{application.startDate}</td>
                                            <td>{application.endDate}</td>
                                            <td>{application.reason}</td>
                                            <td>{application.isHalfDay ? 'Yes' : 'No'}</td>
                                            <td>{application.isFullDay ? 'Yes' : 'No'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Applyleave;
