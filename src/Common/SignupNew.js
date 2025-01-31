import React, { useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import FooterNew from "./FooterNew.js";
import {
  registrationState,
  registrationReducer,
} from "../Reducers/registrationReducer";
import RegistrationApi from "../Api/RegistrationApi";
import "../css/signupnew.css";

import LoginFooter from "./LoginFooter";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import AboutusHeader from "./AboutusHeader.js";

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
    console.log(formState);
    if (isRegister) toast.success("User Registered Successfully!");
    navigate("/LoginPage");
    if (!isRegister) toast.error("Something went wrong!");
  };

  return (
    <div style={{}}>
      <ToastContainer />
      {/* <AboutusHeader/> */}
      <nav id="navbar_id" className=" navbar navbar-static-topd navb">
        <div className="container-fluid " >
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
      <div className="container-fluid signup-container bg-signin bg-cover bg-top bg-no-repeat relative">
        <div className="">
          <div className="col-xl-12  margin-y-300 row-equal-ht signup-tabs">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center pe-0 ps-0 ">
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
                        THE CEO Card MEMBERSHIP APPLICATION TAKES JUST A FEW
                        MINUTES
                      </h3>
                    </div>
                  </div>

                  <div className="row">
                    <h4 className="text-[22px] text-center font-bold pt-[2rem] mb-[2rem]">
                      Personal Information
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="membership_application_email">
                          <h4 className="title-p">Name</h4>
                        </label>{" "}
                        <input
                          placeholder="Name"
                          className="form-control input-lgsm"
                          type="text"
                          name="Name"
                          maxLength="15"
                          value={formState.Name}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="membership_application_email">
                        <h4 className="title-p">Email Address</h4>
                      </label>{" "}
                      <div className="form-group">
                        <input
                          placeholder="someone@example.com"
                          className="form-control input-lgsm"
                          type="text"
                          name="Mail"
                          id="Mail"
                          value={formState.Mail}
                          onChange={handleFormInput}
                          minLength="8"
                          maxLength="25"
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-6">
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
                    </div> */}
                  </div>

                  {/* <div className="row">
                    <div className="col-md-12">
                      <label for="membership_application_email">
                        <h4 className="title-p">Email Address</h4>
                      </label>{" "}
                      <div className="form-group">
                        <input
                          placeholder="someone@example.com"
                          className="form-control input-lgsm"
                          type="text"
                          name="Mail"
                          id="Mail"
                          value={formState.Mail}
                          onChange={handleFormInput}
                          minLength="8"
                          maxLength="25"
                        />
                      </div>
                    </div>
                  </div> */}

                  <div className="row">
                    <div className="col-md-6">
                      <label for="membership_application_phone">
                        <h4 className="title-p">Phone Number</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder="999-999-9999 (optional)"
                          className="form-control input-lgsm"
                          type="MobileNumber"
                          name="MobileNumber"
                          id="MobileNumber"
                          value={formState.MobileNumber}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="membership_application_linked_in_link">
                        <h4 className="title-p">Date of Birth</h4>
                      </label>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control input-lgsm"
                          id="DOB"
                          name="DOB"
                          title="DOB"
                          value={formState.DOB}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12"></div>
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
                          id="CompanyName"
                          name="CompanyName"
                          value={formState.CompanyName}
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
                          id="ProfessionalTitle"
                          name="ProfessionalTitle"
                          maxLength="15"
                          value={formState.ProfessionalTitle}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row small-gutter">
                    <div className="col-md-6">
                      <label for="membership_application_company_name">
                        <h4 className="title-p">Currency</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder=""
                          className="form-control input-lgsm"
                          type="text"
                          id="Currency"
                          name="Currency"
                          value={formState.Currency}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="membership_application_title_in_company">
                        <h4 className="title-p">Language</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder=""
                          className="form-control input-lgsm"
                          type="text"
                          id="Language"
                          name="Language"
                          maxLength="15"
                          value={formState.Language}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-md-6">
                      <label for="">
                        <h4 className="title-p">Password</h4>
                      </label>
                      <div className="form-group">
                        <input
                          placeholder=""
                          className="form-control input-lgsm"
                          type="text"
                          id="Password"
                          name="Password"
                          title="Password"
                          maxLength="15"
                          value={formState.Password}
                          onChange={handleFormInput}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="">
                          <h4 className="title-p">Confirm Password</h4>
                        </label>
                        <input
                          placeholder=""
                          className="form-control input-lgsm"
                          type="text"
                          id="ConfirmPassword"
                          name="ConfirmPassword"
                          title="ConfirmPassword"
                          maxLength="15"
                          value={formState.ConfirmPassword}
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

      <FooterNew FOOTERBGCOLOR={AboutFooterbgColor} />
    </div>
  );
};

export default SignupNew;