import React, { useState } from 'react';
import Navbar from '../../../layouts/components/Navbar/Navbar';
import Sidebar2 from '../dashboard/admindashboard/components/sidebar/Sidebar';
import axios from 'axios';
import { API_URL } from '../../../constants/common';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
        gender: '',
        maritalStatus: '',
    });

    const [errors, setErrors] = useState({});

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
            const response = await axios.post(`${API_URL}/api/users`, formData);
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
                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="pt-3 pb-2">
                            <h2 className="h3">Add User</h2>
                        </div>
                        <div className="card">
                            <div className="card-body">
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
                                        <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
                                        <select name="maritalStatus" id="maritalStatus" className="form-select" value={formData.maritalStatus} onChange={handleChange}>
                                            <option value="">Select Marital Status</option>
                                            <option value="single">Single</option>                                             <option value="married">Married</option>
                                        </select>
                                        {errors.maritalStatus && <div className="text-danger">{errors.maritalStatus}</div>}
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add User</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddUser;


