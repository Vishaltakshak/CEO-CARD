import React from "react";
import { Link } from "react-router-dom";
import "../css/forgotpassword.css";

const ForgotPassword = () => {
  return (
    <>
      <div className="container-fluid forgotpw-container top-spacing">
        <div className="container forgotpw-container-child">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12 col-12">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
                <h1 className="forgot-text">FORGOT YOUR PASSWORD?</h1>
                <br></br>
                <h2 className="forgot-subtext">
                  Please enter the email address or Membership Number associated
                  with your CeoCard account to reset your password:
                </h2>
              </div>
              <hr class="border-blue"></hr>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 forgot-form">
                <form action="/#">
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
                      <input
                        autofocus="autofocus"
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email or Membership Number"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-signin form-control">
                      <Link to="/" target="_blank">
                        SEND INSTRUCTIONS
                      </Link>
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
                      <p className="form-group trouble-text">
                        Having trouble resetting your password? <br></br>
                        Contact us at{" "}
                        <Link
                          to="mailto:memberservices@Ceocard.com"
                          target="_blank"
                        >
                          memberservices@Ceocard.com
                        </Link>
                        <br></br>
                        or 212-343-9800
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
