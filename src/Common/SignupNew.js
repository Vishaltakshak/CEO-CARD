import React, { useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import FooterNew from "./FooterNew.js";
import {
  registrationState,
  registrationReducer,
} from "../Reducers/registrationReducer";
import RegistrationApi from "../Api/RegistrationApi";
import "../css/signupnew.css";
// import "../css/style.css";
import LoginFooter from "./LoginFooter";
import "react-toastify/dist/ReactToastify.css";
// import { Outlet, Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutFooterbgColor = "#ffffff";
const SignupNew = () => {
  // Manage form state
  const navigate = useNavigate();

  const [formState, dispatch] = useReducer(
    registrationReducer,
    registrationState
  );

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  // Submit registration form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const isRegister = await RegistrationApi(formState);
    if (isRegister) toast.success("User Registered Successfully!");
    navigate("/LoginPage");
    if (!isRegister) toast.error("Something went wrong!");
  };

  return (
    <div style={{}}>
      <ToastContainer />
      <nav id="navbar_id" className=" navbar navbar-static-topd navb">
        <div className="container-fluid">
          <div className="navbar-header flex items-center">
            <a id="navbar-brand" className="navbar-brand-sign" href="/">
              <img
                className="logo-size"
                alt="CeoCard"
                id="navbar-logo-sign"
                src="assets/img/ceo-logo-black.png"
              />
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid signup-container bg-gray-alt">
        <div className="">
          <div className="col-xl-12  margin-y-300 row-equal-ht signup-tabs">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center bg-white border-gray-alt pe-0 ps-0 ">
              <div className="row signup-tabs-child  align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 pe-0 ps-0 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2">
                  <h4 className="tab-title-text title-text-center">
                    <strong>PERSONAL INFO</strong>
                  </h4>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pe-0 ps-0 icon-text-left order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1">
                  <span className="fa fa-check fa-fw step-circle  bg-blue">
                    <i class="bi bi-check"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center bg-white border-gray-alt pe-0 ps-0">
              <div className="row signup-tabs-child  align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 pe-0 ps-0 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2">
                  <h4 className="tab-title-text title-text-center">
                    <strong>PAYMENT INFO</strong>
                  </h4>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pe-0 ps-0 icon-text-left order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1">
                  <span className="fa fa-check fa-fw step-circle bg-gray">
                    <i class="bi bi-check"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center bg-white border-gray-alt pe-0 ps-0">
              <div className="row signup-tabs-child  align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 pe-0 ps-0 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2">
                  <h4 className="tab-title-text title-text-center">
                    <strong>CONFIRMATION</strong>
                  </h4>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 pe-0 ps-0 icon-text-left order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1">
                  <span className="fa fa-check fa-fw step-circle bg-gray">
                    <i class="bi bi-check"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* form start */}
          <div className="col-xl-12">
            <div className="col-12-width">
              <div className="signup-contaiiner-box">
                <form
                  className="new_membership_application"
                  onSubmit={handleSubmit}
                >
                  <input name="utf8" type="hidden" value="✓" />
                  <input type="hidden" value="" />

                  <input
                    id="unfinished_application_token"
                    type="hidden"
                    name=""
                  />
                  <input
                    type="hidden"
                    name=""
                    id="membership_application_promo_code_used"
                  />
                  <input
                    type="hidden"
                    name=""
                    id="membership_application_overlay_promo_code"
                  />

                  <div className="row">
                    <div className="col-md-12"></div>
                  </div>

                  <div className="row text-center">
                    <div className="col-md-12 pt-22px txt">
                      <h3 className="text-bold">
                        THE FC MEMBERSHIP APPLICATION TAKES JUST A FEW MINUTES
                      </h3>
                    </div>
                  </div>

                  <div className="row">
                    
                      
                      <h4 className="title-p">Personal Information</h4>
                  
                  </div>

                  <div className="row small-gutter">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          placeholder="First Name"
                          className="form-control input-lgsm"
                          type="text"
                          name="firstName"
                          maxLength="15"
                          value={formState.firstName}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          placeholder="Last Name"
                          className="form-control input-lgsm"
                          type="text"
                          name="lastName"
                          id="lastName"
                          maxLength="15"
                          value={formState.lastName}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label for="membership_application_email">
                        <h4 className="title-p">Email Address</h4>
                      </label>{" "}
                      <div className="form-group">
                        <input
                          placeholder="someone@example.com"
                          className="form-control input-lgsm"
                          type="text"
                          name="email"
                          id="email"
                          value={formState.email}
                          onChange={handleFormInput}
                          minLength="8"
                          maxLength="25"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label for="membership_application_phone">
                        <h4 className="title-p">Phone Number</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder="999-999-9999 (optional)"
                          className="form-control input-lgsm"
                          type="number"
                          name="mobile"
                          id="mobileNumber"
                          value={formState.mobile}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row small-gutter">
                    <div className="col-md-6">
                      <label for="membership_application_linked_in_link">
                        <h4 className="title-p">LinkedIn Profile</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder="(optional)"
                          className="form-control input-lgsm"
                          type="text"
                          name="linkedinProfile"
                          id="linkedinProfile"
                          value={formState.linkedinProfile}
                          onChange={handleFormInput}
                          required
                          maxLength="25"
                        />
                      </div>
                    </div>

                    {/* value={formState.dob}
									onChange={handleFormInput}
									required */}

                    {/* <div className="col-md-6">
								<label htmlFor="membership_application_birthdate">
									<h4>Date of Birth</h4>
								</label>
								<div className="form-group">
									<select
									className="form-control input-lgsm birthdate-selector"
									style={{ display: "inline-block" }}
									value={formState.month}
									// onChange={handleMonthChange}
									onChange={handleFormInput}
									required
									>
									<option value="">Month</option>
									{Array.from({ length: 12 }, (_, index) => (
										<option key={index + 1} value={index + 1}>
										{new Date(0, index).toLocaleString("en", {
											month: "long",
										})}
										</option>
									))}
									</select>
									<select
									className="form-control input-lgsm birthdate-selector"
									style={{
										display: "inline-block",
										marginLeft: "1px",
										marginRight: "1px",
									}}
									value={formState.day}
									// onChange={handleDayChange}
									onChange={handleFormInput}
									required
									>
									<option value="">Day</option>
									{Array.from({ length: 31 }, (_, index) => (
										<option key={index + 1} value={index + 1}>
										{index + 1}
										</option>
									))}
									</select>
									<select
									className="form-control input-lgsm birthdate-selector"
									style={{ display: "inline-block" }}
									value={formState.year}
									// onChange={handleYearChange}
									onChange={handleFormInput}
									required
									>
									<option value="">Year</option>
									{Array.from({ length: 101 }, (_, index) => (
										<option key={2024 - index} value={2024 - index}>
										{2024 - index}
										</option>
									))}
									</select>
								</div>
								</div> */}
                    <div className="col-md-6">
                      <label for="membership_application_linked_in_link">
                        <h4 className="title-p">Date of Birth</h4>
                      </label>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control input-lgsm"
                          id="birthdate"
                          name="dob"
                          title="DOB"
                          value={formState.dob}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      
                    </div>
                  </div>
                  <div className="row small-gutter">
                    <div className="col-md-6">
                      <label for="membership_application_company_name">
                        <h4 className="title-p">Company Name</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder=""
                          className="form-control input-lgsm"
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formState.companyName}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="membership_application_title_in_company">
                        <h4 className="title-p">Professional Title</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder=""
                          className="form-control input-lgsm"
                          type="text"
                          id="professionalTitle"
                          name="professionalTitle"
                          maxLength="15"
                          value={formState.professionalTitle}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row small-gutter">
                    <div className="col-md-6">
                      <label for="">
                        <h4 className="title-p">Password</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder=""
                          className="form-control input-lgsm"
                          type="text"
                          id="password"
                          name="password"
                          title="Password"
                          maxLength="15"
                          value={formState.password}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12 text-center">
                      <div className="form-group">
                        <input
                          type="submit"
                          name="commit"
                          value="SUBMIT"
                          className="btn btn-primary btn-large btn-wide-sgn input-lgsm"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* middle part */}
      {/* <div className="container-fluid text-center bg-gray-alt pd-top-60 mobile-pad-0 mobile-margin-top-20 mob-bord-gray-alt">
        <div className="row pad-y-456 bg-white mobile-pad-0 mobile-pad-top-20">
          <div className="col-xs-12 col-lg-4">
            <i className="endorsement-text">"A Community for Leaders."</i>
            <br />
            <img
              id="hero-public-quote-cnn"
              className="endorsements-image"
              style={{ width: "100px" }}
              alt="Forbes Logo"
              src="assets/img/signup/forbes-black.png"
            />
          </div>
          <div className="col-xs-12 col-lg-4 visible-md visible-lg">
            <i className="endorsement-text">
              "Soothes Stress with Elite Access."
            </i>
            <br />
            <img
              id="hero-public-quote-wsj"
              className="endorsements-image"
              style={{ width: "189px" }}
              alt="Wall Street Journal Logo"
              src="assets/img/signup/WSJ-black.png"
            />
          </div>
          <div
            className="col-xs-12 col-lg-4 visible-md visible-lg"
            id="hero-public-quote-div-business-insider"
          >
            <i className="endorsement-text">"Excellent VIP Benefits."</i>
            <br />
            <img
              id="hero-public-quote-business-insider"
              className="endorsements-image"
              alt="Business Insider Logo"
              src="assets/img/signup/business-insider-black.png"
            />
          </div>
        </div>
      </div> */}
      {/* footer */}
      <FooterNew FOOTERBGCOLOR={AboutFooterbgColor} />
      {/* <LoginFooter /> */}
    </div>
  );
};

export default SignupNew;
