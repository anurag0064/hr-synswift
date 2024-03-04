import React from 'react';
import Navbar from '../../../layouts/components/Navbar/Navbar';
import Sidebar2 from '../dashboard/admindashboard/components/sidebar/Sidebar';
import AddUser from './AddUserForm';

const Addemployee = () => {
    const handleUserAdded = (userData) => {
        console.log('New user added:', userData);
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
                        <AddUser onUserAdded={handleUserAdded} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addemployee;
