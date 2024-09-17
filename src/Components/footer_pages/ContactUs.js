import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Common/LoginHeader";
import PagesBody from "./FooterPagesBody";
import LoginFooter from "../../Common/LoginFooter";


const ContactUs = () => {
	return (
		<>
			<LoginHeader></LoginHeader>
			<PagesBody>
				<div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12  footerpages-container-child common-pages-body">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
						<h1 className="common-pages-text">CONTACT US</h1>
						<br></br>
						<h2 className="common-pages-subtext">Please complete the form below and our Member Services Team will reply to your inquiry. Most requests are responded to within one business day. Or, call us at 800.963.1988. Our Member Services Team is typically available 24/7, with the exception of some major federal holidays.
						</h2>
					</div>
					<hr class="border-blue"></hr>
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 common-pages-form">
						<form action="/#"> 
							<div className="row">
								<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 form-group">
									<input autofocus="autofocus" type="text" className="form-control"  placeholder="Full Name" name="name" required/>
								</div>
								<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 form-group">
									<input autofocus="autofocus" type="text" className="form-control"  placeholder="Email" name="email" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label>Category :</label>
									<select class="form-control" aria-label=".form-select-lg">
										<option selected>Please Select...</option>
										<option value="1">Question about benefit(s)</option>
										<option value="2">Question about Membership</option>
										<option value="3">Help with your account</option>
										<option value="4">Make a suggestion</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<textarea class="form-control" rows="5" placeholder="What's on your mind?"></textarea>
								</div>
							</div>
							
							<div className="form-group">
								<button className="btn btn-black">
									<Link to='/' target='_blank'>submit</Link>
								</button>
							</div>
						</form>
					</div>
				</div>
			</PagesBody>
			<LoginFooter></LoginFooter>
		</>
		
	);
};

export default ContactUs;
