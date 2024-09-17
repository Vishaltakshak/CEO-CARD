import React from "react";
import { Link } from "react-router-dom";
import ScrollTotop from "./ScrollTotop";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import '../css/redemptionassistance.css';

const RedemptionAssistance = () => {
	return (
		<AfterLoginLayout>
		<div className="container-fluid need-help-container">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 mx-auto">
						<h1 class="help-topic-heading" >
							Benefit Inquiry: British Airways
						</h1>
						<Link className="help-topic-anchor" to="/SubMenu">Back to <span>British Airways</span></Link>
						<br></br>
						<br></br>
						<strong>Troubleshooting Tips</strong>
						<p>Please note this benefit only applies for roundtrip fares originating in the US or Canada going to UK. If you are traveling to a different destination then the rates will not load correctly. If you still need help, please let us know your full itinerary details so we can investigate: Dates, Cities, Fare Class, and Flight Number or Flight Departure Time.</p>
						<p>
							If the Troubleshooting Tips didn't solve your issue, please explain what trouble you're having and our Member Services Team will reply within one business day.
						</p>
						
						<form className="need-help-textbox" action="/"  method="post">
							<label>Specific Dates of Travel</label>
							<div className="form-group">
								<label style={{fontWeight:"400"}}>From</label>
								<input type="date" className="form-control" name="start_date" required="required"></input>
							</div>
							<div className="form-group">
								<label style={{fontWeight:"400"}}>To</label>
								<input type="date" className="form-control" name="end_date" required="required"></input>
							</div>
							<div className="form-group">
								<label>Preferred Room Type Requested</label>
								<input type="text" className="form-control" name="room_type" required="required"></input>
							</div>
							<div className="form-group">
								<label>Please describe the issue you are experiencing.</label>
								<textarea className="form-control" name="message" required="required"></textarea>
							</div>
							<div className="form-group">
								<label style={{fontWeight:"400"}}>Please explain what trouble you're having, and our Member Services Team will reply within one business day.</label>
								<textarea className="form-control" name="message" required="required"></textarea>
							</div>
							<div className="form-group">
								<button className="btn btn-submit-help">Submit</button>
							</div>
						</form>

						
					</div>
				</div>
			</div>
		</div>

		<ScrollTotop></ScrollTotop>
		</AfterLoginLayout>
	);
};

export default RedemptionAssistance;
