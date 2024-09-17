import React from "react";
import { Link } from "react-router-dom";
import AfterLoginHeader from "../../Common/AfterLoginHeader";
import ScrollTotop from "../ScrollTotop";
import AfterLoginFooter from "../../Common/AfterLoginFooter";
import HeaderPagesBody from "./HeaderPagesBody";
import '../../css/pages/teammembership.css';
import AfterLoginLayout from "../layouts/AfterLoginLayout";

//const Memberbgimage = require('../assets/img/HeaderPages/team-membership.png');
const Memberbgimage = 'https://d2q86wmri3hsp2.cloudfront.net/assets/employee_background-66c390a75cf324b31373adb1a0818f93f0806977b3c817171cd0b94055bd6f44.png';


const TeamMembership = () => {
	return (
		<>
		<AfterLoginLayout>
		<HeaderPagesBody BGImage={Memberbgimage}>
			<div className="col-xxl-10 col-xl-10 cl-lg-10 col-md-10 col-xm-12 col-12 boxed-page-content">
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-12">
						<h1 className="headerpage-title">
							Purchase Team Membership
						</h1>
						<br></br>
						<p className="headerpage-title-p">
							Add Team Members to your Membership for $495 annually. Upon approval, they will receive full access to membership, along with their own login credentials and stainless steel Membership card.
          				</p>
						<p className="headerpage-title-p">
							Please provide the following information for your Team Member:
						</p>
					</div>
					<div className="col-xl-12 col-lg-12 col-12 employee-filed">
						<form action="/#" className="employee-filed-form">
							<div className="col-xl-12 col-12 pe-0 ps-0">
								<div className="row">
									<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
										<input autofocus="autofocus" type="text" className="form-control"  placeholder="Full Name" name="name" required/>
									</div>

									<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
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
								<Link className="btn-add-another-member" to="/"><span className="btn-circle">+</span>ADD ANOTHER TEAM MEMBER</Link>
							</div>

							<div className="col-xl-12 col-12 pe-0 ps-0 checkbox-spacing">
								<div className="row">
									<div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 pe-0 ">
										<input className="form-check-input " type="checkbox" name="remember" />
									</div>
									<div className="col-xl-11 col-lg-11 col-md-11 col-sm-10 col-10 ps-0">
										<label className="col-xl-11 checkbox-text">
										I understand that each Team Member must be a co-founder or top executive at my company and all applications are subject to review and approval.
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

export default TeamMembership;
