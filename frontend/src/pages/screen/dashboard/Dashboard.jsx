import React, { useState, useEffect } from 'react';
import Userdashboard from './userdashboard/Userdashboard';
import Admindashboard from './admindashboard/Admindashboard';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('user');
        if (userLoggedIn) {
            const userData = JSON.parse(userLoggedIn);
            setUserType(userData.user.type);
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <>
                <div className="dashboard-content ms-4">
                    {isLoggedIn ? (
                        <>
                            {userType === 'admin' ? (
                                <Admindashboard />
                            ) : (
                                <Userdashboard />
                            )}
                        </>
                    ) : (
                        <h1>Dashboard</h1>
                    )}
                </div>
        </>
    );
}

export default Dashboard;


