import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BeforeLoginHeaderEnquiry from "../../Common/BeforeLoginHeaderEnquiry";
import EnquiryModal from "./EnquiryModal";
import FooterNew from "../../Common/FooterNew";
import "../../css/pages/enquiry.css";

const HeaderbgColor = "hsla(0, 0%, 100%, 0.53)";


const Enquiry = () => {

//use state for viewing refferal box
const [isViewreferral, setViewreferral] = useState("false");
const handleViewreferral = () => {
	setViewreferral(!isViewreferral);
};


  return (
    <>
      <BeforeLoginHeaderEnquiry HEADERBGCOLOR={HeaderbgColor}></BeforeLoginHeaderEnquiry>
        <div className="container-fluid enquiry-page-container pe-0 ps-0">
			<div className="enquiry-page-row flex-center flex">
				<div className="col-xl-12 col-12">
					<div className="inquire-form-container">
						<div className="text-center">
							<div className="inquire-title">Get Access</div>
							<h1 className="inquire-heading">
								<strong>Receive Inside Access to<br/>Over 500 Exclusive Benefits</strong>
								<br></br>
							</h1>
						</div>
						<form className="new_interested_submission" action="/">
							<div class="form-group">
								<label className="form-label">FULL NAME</label>
								<input className="form-control form-field" type="text" placeholder="Enter your Name"/>
							</div>
							<div class="form-group">
								<label className="form-label">EMAIL ADDRESS</label>
								<input className="form-control form-field" type="email" placeholder="Enter your Email Address" />
							</div>
							<div class="form-group">
								<label className="form-label">PROFESSIONAL TITLE</label>
								<input className="form-control form-field" type="email" placeholder="Enter your Title" />
							</div>
							<div class="form-group">
								<label className="form-label">COMPANY</label>
								<input className="form-control form-field" type="email" placeholder="Enter your Company" />
							</div>
							<div className={
								isViewreferral
									? "form-group d-none"
									: "form-group d-block"
                					} >
								<label className="form-label">REFERRAL CODE</label>
								<input className="form-control form-field" type="email" placeholder="Referral Code..." />
							</div>
							<div class="form-group">
								<button 
								onClick={handleViewreferral}
								className={
								isViewreferral
									? "btn btn-referal-link-a d-block"
									: "btn btn-referal-link-a d-none"
                					} 
									type="button">Referral Code</button>
							</div>
							<div class="form-group btn-center-mobile">
								<Link to="/MembershipFormSubmitted"  class="btn btn-membership-preview">PREVIEW MEMBERSHIP</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
        </div>
		<div id="enquiryFaq" className="container-fluid enquiry-faq-container pe-0 ps-0">
			<div className="container">
				<div className="row">
					<div class="col-xs-12">
						<h2 class="faq-heading">Frequently Asked Questions</h2>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-12 col-12 col-12">
						<div className="question-div">
							<h6>IF I JOIN TODAY, WHEN CAN I BEGIN USING MY MEMBERSHIP?</h6>
							<p className="faq-details">
							<span>Your Membership starts the day your application is approved, and you will have immediate access to redeem benefits at that point.</span>
							</p>
						</div>
						<div className="question-div">
							<h6>IIS FOUNDERSCARD A CREDIT CARD?</h6>
							<p className="faq-details">
							<span>FoundersCard is a Membership community, not a credit card. Your Membership provides you access to a portfolio of over 500 benefits that can be accessed through our website.</span>
							</p>
						</div>
					</div>


					<div className="col-xl-4 col-lg-4 col-md-12 col-12 col-12">
						<div className="question-div">
							<h6>HOW DOES REDEEMING BENEFITS WORK?</h6>
							<p className="faq-details">
							<span>Each benefit that we offer our Members has a dedicated landing page on the FoundersCard site, with simple instructions of how to take advantage of that particular offer. Benefits are not automatically applied to your account, so you need to redeem the benefit to take advantage of the offer.</span>
							</p>
						</div>
					</div>


					<div className="col-xl-4 col-lg-4 col-md-12 col-12 col-12">
						<div className="question-div">
							<h6>IS MEMBERSHIP AVAILABLE INTERNATIONALLY?</h6>
							<p className="faq-details">
							<span>FoundersCard Membership is available globally. There may be some restrictions with brands that will be listed on the individual benefit pages, but we do our best to select benefits that all Members can enjoy.</span>
							</p>
						</div>
						<div className="question-div">
							<h6>WHY CAN'T I SEE THE FULL LIST OF BENEFITS?</h6>
							<p className="faq-details">
							<span>Due to the exclusive benefits we have negotiated with our benefit partners, we can only show the detailed list of over 500 benefits to those that are invited to the community. Once you complete the inquiry form above, you will receive access to view the complete list of Member benefits.</span>
							</p>
						</div>

						
					</div>
					
				</div>
			</div>
		</div>

		<EnquiryModal></EnquiryModal>
		{/* modal show after some time delay */}
      <FooterNew></FooterNew>
    </>
  );
};

export default Enquiry;
