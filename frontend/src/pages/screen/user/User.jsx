import React, { useState, useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import Navbar from '../../../layouts/components/Navbar/Navbar';
import Sidebar2 from '../dashboard/admindashboard/components/sidebar/Sidebar';
import axios from 'axios';
import { API_URL } from '../../../constants/common';

const AddUser = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        gender: '',
        maritalStatus: '',
    });
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${API_URL}/users`);
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/adduser`, formData);
            if (response.status === 201) {
                console.log('User added successfully');
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    location: '',
                    gender: '',
                    maritalStatus: '',
                });
                setErrors({});
                handleClose();
                fetchUsers(); 
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Failed to add user:', error);
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar2 />
                    <div className="col">
                        <div className='d-flex mt-3'>
                            <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="New Employee List..." />
                            <Button variant="primary" onClick={handleShow} className='ms-2'>
                                Add User
                            </Button>
                        </div>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Location</th>
                                    <th>Gender</th>
                                    <th>Marital Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.location}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.maritalStatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                             <label htmlFor="name" className="form-label">Name</label>
                             <input type="text" name="name" id="name" className="form-control" value={formData.name} onChange={handleChange} />
                             {errors.name && <div className="text-danger">{errors.name}</div>}
                         </div>
                         <div className="mb-3">
                                          <label htmlFor="email" className="form-label">Email</label>
                                          <input type="email" name="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
                                          {errors.email && <div className="text-danger">{errors.email}</div>}
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                          <input type="tel" name="phoneNumber" id="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={handleChange} />
                                          {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="location" className="form-label">Location</label>
                                          <input type="text" name="location" id="location" className="form-control" value={formData.location} onChange={handleChange} />
                                          {errors.location && <div className="text-danger">{errors.location}</div>}
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="gender" className="form-label">Gender</label>
                                          <select name="gender" id="gender" className="form-select" value={formData.gender} onChange={handleChange}>
                                              <option value="">Select Gender</option>
                                              <option value="male">Male</option>
                                              <option value="female">Female</option>
                                              <option value="other">Other</option>
                                          </select>
                                          {errors.gender && <div className="text-danger">{errors.gender}</div>}
                                      </div>
                                      <div className="mb-3">
                                         <label htmlFor="maritalStatus" className="form-label">Marital Status</label>                                          <select name="maritalStatus" id="maritalStatus" className="form-select" value={formData.maritalStatus} onChange={handleChange}>
                                              <option value="">Select Marital Status</option>
                                              <option value="single">Single</option>                                             <option value="married">Married</option>
                                          </select>
                                          {errors.maritalStatus && <div className="text-danger">{errors.maritalStatus}</div>}
                                      </div> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Add User</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddUser;

