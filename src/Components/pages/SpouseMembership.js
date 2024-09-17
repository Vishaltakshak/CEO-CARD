import React from "react";
//import { Link } from "react-router-dom";
import AfterLoginHeader from "../../Common/AfterLoginHeader";
import ScrollTotop from "../ScrollTotop";
import AfterLoginFooter from "../../Common/AfterLoginFooter";
import HeaderPagesBody from "./HeaderPagesBody";
import '../../css/pages/teammembership.css';
import AfterLoginLayout from "../layouts/AfterLoginLayout";

//const Memberbgimage = require('../assets/img/HeaderPages/spouse-membership.png');
const Memberbgimage = 'https://d2q86wmri3hsp2.cloudfront.net/assets/sig-other-75fd2a90fe257e2906e7dbc4d05abfd2c53c6b5264ca61dad014236891761edd.png';



const SpouseMembership = () => {
	return (
		<>
		<AfterLoginLayout>
		<HeaderPagesBody BGImage={Memberbgimage}>
			<div className="col-xxl-10 col-xl-10 cl-lg-10 col-md-10 col-xm-12 col-12 boxed-page-content">
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-12">
						<h1 className="headerpage-title">
							Purchase spouse Membership
						</h1>
						<br></br>
						<p className="headerpage-title-p">
						Add your Spouse or Significant Other to your Membership for a one-time fee of $495! Upon approval, they will receive full access to Standard Membership, along with their own login credentials and stainless steel Membership card.
          				</p>
						<p className="headerpage-title-p">
						Please provide the following for your Spouse or Significant Other:
						</p>
					</div>
					<div className="col-xl-12 col-lg-12 col-12 employee-filed">
						<form action="/#" className="employee-filed-form">
							<div className="col-xl-12 col-12 pe-0 ps-0">
								<div className="row">
									<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
										<input autofocus="autofocus" type="text" className="form-control"  placeholder="First name" name="name" required/>
									</div>

									<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
										<input autofocus="autofocus" type="text" className="form-control"  placeholder="Last name" name="name" required/>
									</div>
								</div>
								<div className="row form-mtop">
									<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
										<input autofocus="autofocus" type="text" className="form-control"  placeholder="Email address" name="name" required/>
									</div>
								</div>
								<div className="row form-mtop">
									<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
										<input autofocus="autofocus" type="text" className="form-control"  placeholder="Company name" name="name" required/>
									</div>

									<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
										<input autofocus="autofocus" type="text" className="form-control"  placeholder="Professional title" name="name" required/>
									</div>
								</div>
							</div>

							<div className="col-xl-12 col-12 pe-0 ps-0 btn-add-another-member-div">
									<h3 className="relationshiptext">Relationship status</h3>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="inlineRadioOptions" value="option1"/>
										<label className="form-check-label radio-text" for="inlineRadio1">Married</label>
									</div>
									<div class="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="inlineRadioOptions"value="option1"/>
										<label className="form-check-label radio-text" for="inlineRadio2">Engaged or in a relationship</label>
									</div>
							</div>

							<div className="col-xl-12 col-12 pe-0 ps-0 checkbox-spacing">
								<div className="row">
									<div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 pe-0 ">
										<input className="form-check-input " type="checkbox" name="remember" />
									</div>
									<div className="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 ps-0">
										<label className="col-xl-11 checkbox-text">
										By checking this box, I confirm that I accept the Terms of Service and Membership Agreement. All applications are subject to review and approval. If this application is approved, I understand I will be charged a one-time, non-refundable fee of $495.
										</label>
									</div>
								</div>
							</div>

							<div className="col-xl-12 col-12 pe-0 ps-0 checkbox-spacing text-center">
								<button className="btn btn-purchase">PURCHASE FOR $<span>495</span></button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</HeaderPagesBody>
		<ScrollTotop></ScrollTotop>
        </AfterLoginLayout>
		</>
		
	);
};

export default SpouseMembership;
