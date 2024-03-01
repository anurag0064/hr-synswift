import React, { useState } from "react";
import axios from 'axios';
import Image from "../../components/image/Image";
import { API_URL } from "../../../constants/common";

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!email) {
      setErrorMessage("Please enter your email!");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/forgotpassword`, {
        email
      });
        
      if (res.data.status) {
        setSuccessMessage(res.data.msg);
      } else {
        setErrorMessage(res.data.msg);
      }
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data.message);
      } else if (err.request) {
        setErrorMessage("No response received from the server");
      } else {
        setErrorMessage("An error occurred while setting up the request");
      }
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
                  <h3>Forgot Password</h3>
                  <p>Enter your email address to reset your password.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mt-2">
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="emailInput">Email address</label>
                  </div>
                  <button className="btn btn-dark mt-3 w-100" type="submit">
                    Reset Password
                  </button>
                  <p className="text-center mt-3">Remember your password? <a href="/">Login</a></p>
                </form>
              </div>
              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
              {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
