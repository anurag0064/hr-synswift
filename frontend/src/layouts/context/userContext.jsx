
import React, { createContext, useState } from 'react';

const userContext = createContext();


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


  const userLogin = ({ user, token }) => {
    setUser({ user, token });
  };

  const adminLogin = ({ admin, token }) => {
    setUser({ admin, token });
  };


  const handleLogin = async (resData) => {
    setLoading(true);
    try {
      const { user, admin, token, msg, status } = resData;

      if (status) {
        if (user === 'user') {
          userLogin({ user, token });
          localStorage.setItem('user', JSON.stringify({ user, token }));
        } else if (user === 'admin') {
          adminLogin({ admin, token });
          localStorage.setItem('admin', JSON.stringify({ admin, token }));
        }
        setSuccess(true);
      } else {
        setError(msg);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }

    setLoading(false);
  };


  const userLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };


  const contextValue = {
    user,
    loading,
    error,
    success,
    handleLogin,
    userLogout
  };

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  );
};


const useUser = () => {
  const context = React.useContext(userContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser, userContext }; 
