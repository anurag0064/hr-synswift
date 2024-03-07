import React, { useContext } from 'react';
import { userContext } from '../../context/Usercontext';
import axios from 'axios';

const Navbar = () => {
  // const { user, userLogout } = useContext(userContext);

  // const handleLogout = async () => {
  //   try {
  //     await axios.post("http://127.0.0.1:3000/logout");
  //     userLogout();
  //     window.location.href = '/';
  //   } catch (error) {
  //     console.error("Logout failed: ", error);
  //   }
  // };

  return (
    <>
      <div className="container-fluid pb-3 mt-1 bg-light sticky-top align-item-center position-sticky">
        <div className="row">
          <div className="col-14 d-flex">
            <div className="col-3 mt-2 d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="fw-bold mt-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <div className="heading">
                <h1 className="header">Synswift</h1>
              </div>
            </div>

            <div className="col-6 mt-2 d-flex">
              <input type="text" className="rounded-start-pill ps-3 border-1 w-100" placeholder="Search"></input>
              <button className="btn btn-outline-dark rounded-end-pill" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" className="bi bi-mic-fill ms-3" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
              </svg>
            </div>

            <div className="col-3 d-flex mb justify-content-end">
            
                <div className="dropdown me-3 ">
                  <button className="btn dropdown-toggle btn btn-outline-primary mt-3 rounded-pill me-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" >Log Out</button></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
