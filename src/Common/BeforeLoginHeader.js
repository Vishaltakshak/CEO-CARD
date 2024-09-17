import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

const BeforLoginHeader = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light beforelogin-nav transparent-nav" style={{backgroundColor: props.HEADERBGCOLOR}} >
        <div className="container-fluid pe-0 ps-0">
          <div className="container pe-0 ps-0">
            <Link className="navbar-brand" to="/#">
              <img
                className="logo-size"
                src="././assets/img/ceo-logo-white.png"
                alt="Logo"
              ></img>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i class="bi bi-list" aria-hidden="true"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav beforelogin-navbar ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about_us"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/LoginPage">
                    <strong>sign in</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signupnew">
                    <strong>join</strong>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BeforLoginHeader;
