import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../../layouts/components/Navbar/Navbar';
import Sidebar2 from '../dashboard/admindashboard/components/sidebar/Sidebar';

function UserList() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const addUser = () => {
        axios.post('/api/users', { name, address })
            .then(response => {
                console.log('User added successfully:', response.data);
            })
            .catch(error => {
                console.error('Error adding user:', error);
            });
    };

    return (
        <>
            <Navbar />
            <div className='d-flex'>
                <Sidebar2 />
                <div className="w-full flex items-center justify-between space-y-2 px-4 mb-2 h-[60px] border-b border-gray-200 w-100 mt-3"><h2 className="text-gray-700 text-[20px]">User List</h2>
                    <div className="d-flex flex-row align-items-center">
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Add new..." />
                        <div>
                            <a href='/adduser'><button type="button" className="btn btn-primary ms-3">Add</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserList;
