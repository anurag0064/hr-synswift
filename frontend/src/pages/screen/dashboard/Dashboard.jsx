import React, { useState, useEffect } from 'react';

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
                    <div>
                        <h1>Welcome to Dashboard</h1>
                        {userType === 'admin' ? (
                            <div>
                                
                                <h2>Admin Dashboard</h2>
                              
                            </div>
                        ) : (
                            <div>
                            
                                <h2>User Dashboard</h2>
                             
                            </div>
                        )}
                    </div>
                ) : (
                    <h1>Please log in to view the dashboard</h1>
                )}
            </div>
        </>
    );
}

export default Dashboard;



