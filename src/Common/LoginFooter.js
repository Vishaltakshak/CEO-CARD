import React from "react";
import { Link } from "react-router-dom";
import "../css/loginfooter.css";

const LoginFooter = () => {
  return (
    <>
      <div className="container-fluid login-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-12">
              <p>
                <strong>Ceo</strong>CARD
              </p>
              <sub>memberservices@Ceocard.com</sub>
              <br></br>
              <hr className="customsection-break section-break-center"></hr>
              <ul className="list-unstyled login-footer-ul">
                <li>
                  <Link
                  //  className="text-white" 
                  to="/Privacy">
                    PRIVACY
                  </Link>
                </li>
                <li>
                  <Link
                  //  className="text-white" 
                  to="/Partnership">
                    PARTNERSHIP INQUIRIES
                  </Link>
                </li>
                <li>
                  <Link 
                  // className="text-white" 
                  to="/ContactUs">
                    CONTACT US
                  </Link>
                </li>
                <li>
                  <Link 
                  // className="text-white" 
                  to="/Careers">
                    CAREERS
                  </Link>
                </li>
              </ul>

              <ul className="login-footer-social-link">
                <li>
                  <Link
                    // className="text-white"
                    to="https://www.facebook.com/CeoCard/"
                    target="_blank"
                  >
                    <div className="btn-circle bg-blue">
                      <span className="bi bi-facebook"></span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    // className="text-white"
                    to="https://twitter.com/Ceocard"
                    target="_blank"
                  >
                    <div className="btn-circle bg-blue">
                      <span className="bi bi-twitter"></span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    // className="text-white"
                    to="https://www.instagram.com/Ceocard/"
                    target="_blank"
                  >
                    <div className="btn-circle bg-blue">
                      <span className="bi bi-instagram"></span>
                    </div>
                  </Link>
                </li>
              </ul>
              <h5 className="copyright-text">
                Copyright © 2024 CeoCard. All Rights Reserved. 800.963.1988
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginFooter;
