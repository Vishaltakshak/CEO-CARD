import React from "react";
import { Link } from "react-router-dom";
import AfterLoginLayout from "../layouts/AfterLoginLayout";
import "../../css/pages/reactivate.css";
const Reactivate = () => {
	return (
		
		<>
			<AfterLoginLayout>
			<div className="container-fluid reactivate-banner-container">
				<div className="row reactivate-row ">
					<div className="reactivate-row-column">
						<div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 reactivate-text-box">
							<h1><strong>
								Preferred Reactivation
								<br></br>
								Rate for Raghavendra: Only $395
							</strong>
							</h1>
							<p className="">
							Instantly regain access to the benefits and
							<br></br>
							privileges of your FoundersCard Membership now.
							</p>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 reactivate-form-box">
							<div className="reactivation-form-heading">
								ENTER CREDIT CARD NUMBER
							</div>
							<form className="reactivate-form-custom">
								<div class="mb-3">
									<input type="text" className="form-control reactivation-form-input" placeholder="Card Number" name="payment_card[credit_card_number]"/>
								</div>
								<div class="reactivation-date-fields mb-3">
									<select name="payment_card[month]" className="form-control reactivation-form-input">
										<option value="">Month</option>
										<option value="1">January</option>
										<option value="2">February</option>
										<option value="3">March</option>
										<option value="4">April</option>
										<option value="5">May</option>
										<option value="6">June</option>
										<option value="7">July</option>
										<option value="8">August</option>
										<option value="9">September</option>
										<option value="10">October</option>
										<option value="11">November</option>
										<option value="12">December</option>
									</select>

									<select id="payment_card_year" name="payment_card[year]" className="form-control reactivation-form-input">
										<option value="">Year</option>
										<option value="2024">2024</option>
										<option value="2025">2025</option>
										<option value="2026">2026</option>
										<option value="2027">2027</option>
										<option value="2028">2028</option>
										<option value="2029">2029</option>
										<option value="2030">2030</option>
										<option value="2031">2031</option>
										<option value="2032">2032</option>
										<option value="2033">2033</option>
										<option value="2034">2034</option>
									</select>

									<input type="text" className="form-control reactivation-form-input" placeholder="Security Code"  name="payment_card[credit_card_verification_value]" />

								</div>
								<br></br>
								<div>
									<button type="submit" class="btn reactivation-submit">REJOIN FOR $395</button>
								</div>
								<label className="reactivation-note">
									By clicking "Rejoin for $395" you agree that the credit card provided will be charged a non-refundable $395. You also agree to the <Link style={{textDecoration:"underline"}} target="_blank" to="/TermsOfServices">Terms of Service</Link>, and that your Membership will automatically renew for $395 every 12 months, unless canceled.
								</label>
								
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid reactivate-brand-container">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div className="title-box-width">
						<h3 className="reactive-membership-title">
							<strong>
							Reactivate your Membership and gain access to 500+ Exclusive Member Benefits, including:
							</strong>
						</h3>
					</div>
				</div>
				<div className="row row-equal-height">
					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-1.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-2.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-3.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-4.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-5.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-6.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-7.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-8.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-9.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-10.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-11.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-12.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-13.png"/>
						</div>
					</div>
					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-14.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-15.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-16.png"/>
						</div>
					</div>

					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
						<div className="brand-mb">
							<img alt="Brand" class="reactivate-brand-logo" src="../assets/img/ReactivateLogo/logo-17.png"/>
						</div>
					</div>



				</div>
			</div>
			</AfterLoginLayout>
		</>
	);
};

export default Reactivate;
