import React from "react";
import "../css/home.css";

const BeforeLoginHeaderEnquiry = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light beforelogin-nav transparent-nav" style={{backgroundColor: props.HEADERBGCOLOR}} >
        <div className="container-fluid pe-0 ps-0">
          <div className="container pe-0 ps-0">
            <a className="navbar-brand" href="/#">
              <img
                className="logo-size"
                src="././assets/img/ceo-logo-black.png"
                alt="Logo"
                style={{filter:"invert(1)"}}
              ></img>
            </a>

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
                  <a className="nav-link" href="#enquiryFaq" style={{color:"#fff"}}>
                    <strong>Faq</strong>{" "}
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BeforeLoginHeaderEnquiry;
