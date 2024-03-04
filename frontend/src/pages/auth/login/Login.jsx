import React, { useState } from "react";
import axios from 'axios';
import { useUser } from "../../../layouts/context/Usercontext";
import { Link } from "react-router-dom"; 
import Image from "../../components/image/Image";
import { API_URL } from "../../../constants/common";

const Login = () => {
    const { handleLogin } = useUser(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        
        if (!email.trim() || !password.trim()) {
            setErrorMessage('Please enter both email and password.');
            return;
        }
        
        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });

            const { token } = response.data;
            localStorage.setItem('token', token);
            
           
            handleLogin(response.data);
            
            window.location.href = '/admindashboard';
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid bg-image">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card rounded-pill-6">
                            <div className="card-body">
                                <Image url={"./assets/Images/logo.jpeg"}/>
                                <div className="text-center">
                                    <h3>Welcome back</h3>
                                    <p>Navigating the Professional World with Precision.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={loading}
                                        />
                                        <label htmlFor="emailInput">Email address</label>
                                    </div>
                                    <div className="form-floating mt-2">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordInput"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            disabled={loading}
                                        />
                                        <label htmlFor="passwordInput">Password</label>
                                    </div>
                                    <button className="btn btn-dark mt-3 w-100" type="submit" disabled={loading}>
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                    <p className="text-center mt-3">Don't have an account? <Link to="/forgotpassword">Forgot Password</Link></p>
                                    <p className="mt-2 text-body-secondary text-center">© 2022–2024</p>
                                </form>
                            </div>
                            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

