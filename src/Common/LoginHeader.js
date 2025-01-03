import React from "react";
import { Link } from "react-router-dom";
import "../css/loginheader.css";

const LoginHeader = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-lg   navbar-expand-md navbar-light bg-light before-login-header">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" target="_blank">
            <img
              className="logo-size-sett"
              src="././assets/img/ceo-logo-white2.png"
              alt="Logoceo"
              style={{
                width: "58px",
                height: "auto",
              }}
            ></img>
          </Link>
          <button
            className="navbar-toggler login-navbar-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="bi bi-list"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse before-login-header-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto text-center d-flex mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" >
                  Benefits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about_us" >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-header-bg btn-apply-now"
                  to="/signupnew"
                >
                  apply now
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-header-bg btn-log-in"
                  to="/LoginPage"
                >
                  log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoginHeader;
