import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/loginbody.css";
import LoginApi from "../Api/LoginApi";
import { ToastContainer, toast } from "react-toastify";

const LoginBody = () => {
  const navigate = useNavigate();
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form state
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Login
  const handleLogin = async (event) => {
    event.preventDefault();
    const loginResponse = await LoginApi(formData);
    if (loginResponse) {
      toast.success("Login Successfully");
      navigate("/homeafterlogin");
    } else {
      toast.error("Email and Password should be match");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="top-spacing flex justify-content-center align-item-center" >
        <div className="container login-container flex justify-content-center">
          <div className="row d-flex justify-content-center">
            {/* <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12"> */}
              <div className="col-12 col-xl-12">
                <h1 className="welcome-text">welcome !</h1>
                <h2 className="welcome-subtext">
                  Sign in to access your Membership.
                </h2>
              </div>
              <div className="col-12 col-xl-12 login-form">
                <form onSubmit={handleLogin}>
                  <div className="row">
                    <div className="col-xl-12 col-12 form-group">
                      <input
                        autofocus="autofocus"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleFormInput}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-12 form-group">
                      <input
                        autocomplete="off"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleFormInput}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-6 text-left-align form-group">
                      <div>
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            checked
                          />{" "}
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-6 col-6  text-right-align form-group ">
                      <Link to="/ForgotPasswordPage">Forgot Password?</Link>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-signin form-control"
                      type="submit"
                    >
                      sign in
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-12 form-group">
                      <p className="form-group trouble-text">
                        Trouble logging into your account? <br></br>
                        Contact us at{" "}
                        <Link
                          to="mailto:memberservices@Ceocard"
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBody;
