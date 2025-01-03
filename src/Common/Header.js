import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  
  const [loginSession, setLoginSession] = useState(localStorage.getItem('isLoggedIn'))
  const [showModal, setShowModal] = useState(false);

  // Logout 
  const logout = () => { 
    localStorage.removeItem('isLoggedIn')
    setLoginSession(false)
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center"
        style={{ backgroundColor: "white" }}
      >
        <div className="container d-flex align-items-center tp-head">
          <a href="index.html" className="logo me-auto">
            <img src="assets/img/logo.png" alt="" />
          </a>
          <nav id="navbar" className="navbar order-last order-lg-0">
            { !loginSession ? 
            <ul>
              <li>
                <Link to="/about" className="nav-link scrollto">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link scrollto">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to={"/login"} className="nav-link scrollto">
                  Login
                </Link>
              </li>
              <Link href="#about" className="get-started-btn gt">
                Get The App
              </Link>
            </ul>
            :
            <button onClick={logout}>Logout</button> 
            }
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={toggleModal}
            ></i>
          </nav>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          onClick={toggleModal}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"></h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                {/* Modal content */}
                <ul>
                  <li className="li-tag">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <a href="#about">Get The App</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal backdrop */}
      {showModal && (
        <div className="modal-backdrop fade show" onClick={toggleModal}></div>
      )}
    </div>
  );
};

export default Header;
