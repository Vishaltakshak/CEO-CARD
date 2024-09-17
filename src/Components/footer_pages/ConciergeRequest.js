import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Common/LoginHeader";
import PagesBody from "./FooterPagesBody";
import LoginFooter from "../../Common/LoginFooter";
import '../../css/conciergerequest.css';

const ConciergeRequest = () => {
	return (
		<>
			<LoginHeader></LoginHeader>
			<PagesBody>
				<div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12  footerpages-container-child common-pages-body">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
						<h1 className="common-pages-text common-pages-text-request">Concierge Request Form</h1>
					</div>
					<hr class="border-blue"></hr>
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 common-pages-form">
						<form action="/#" className="conceirge-request-form"> 
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 category-inline-flex form-group">
									<label>Category :</label>
									<select class="form-control request-select category-select" aria-label=".form-select-lg">
										<option selected>Please Select...</option>
										<option value="Flight Quote">Flight Quote</option>
										<option value="Flower Order Request">Flower Order Request</option>
										<option value="Hotel Rate Quote / Booking">Hotel Rate Quote / Booking</option>
										<option value="Member Benefit Questions">Member Benefit Questions</option>
										<option value="Member Billing Questions">Member Billing Questions</option>
										<option value="Other Task">Other Task</option>
										<option value="Private Car Service Quote">Private Car Service Quote</option>
										<option value="Restaurant Reservation Request">Restaurant Reservation Request</option>
									</select>
									
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Hotel Name:</label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="hotel_name" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>location:</label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="location" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Check-in date:</label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="check_in_date" required/>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Check-out date:</label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="check_out_date" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>How many rooms: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="number_of_rooms" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>How many guests: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="number_of_guest" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Bed type for each room (1 king, 2 queens etc.): </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="bed_type_each_room" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Per night budget (enter “n/a” if no budget): </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="per_night_budget" required/>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Additional notes pertaining to this task: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="additional_notes"></textarea>
								</div>
							</div>
							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred car rental company: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="car_rental_company" required/>
								</div>
							</div>
							<div className="row date-and-time-group">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Pick up date and time: </label>
									<div className="dt-time-flex">
										<input disabled autofocus="autofocus" type="text" className="form-control request-input request-input-dt-tme"  placeholder="" name="car_rental_pick_up_date" required/>

										<select name="car_rental_pick_off_time_hour" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
										</select>

										<select name="car_rental_pick_up_time_minute" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="00">00</option>
											<option value="15">15</option>
											<option value="30">30</option>
											<option value="45">45</option>
										</select>
										<select name="car_rental_pick_up_time_ampm" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="AM">AM</option>
											<option value="PM">PM</option>
										</select>
									</div>
								</div>
							</div>


							<div className="row date-and-time-group">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Drop off date and time: </label>
									<div className="dt-time-flex">
										<input disabled autofocus="autofocus" type="text" className="form-control request-input request-input-dt-tme"  placeholder="" name="car_rental_drop_up_date" required/>

										<select name="car_rental_drop_off_time_hour" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
										</select>

										<select name="car_rental_drp_up_time_minute" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="00">00</option>
											<option value="15">15</option>
											<option value="30">30</option>
											<option value="45">45</option>
										</select>
										<select name="car_rental_rop_up_time_ampm" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="AM">AM</option>
											<option value="PM">PM</option>
										</select>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>What city / location: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="car_rental_city_location" required/>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Is it the same pickup and drop off location: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="car_rental_pick_up_drop_off_same_location" required/>
								</div>
							</div>


							

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred car class / size:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="car_rental_preferred_class_size" required/>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Any car seats needed:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="car_rental_child_seats" required/>
								</div>
							</div>
							

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Additional notes pertaining to this task: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="car_rental_additional_notes"></textarea>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred car service company:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="private_car_preferred_company" required/>
								</div>
							</div>

							<div className="row date-and-time-group">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Pick up date and time: </label>
									<div className="dt-time-flex">
										<input disabled autofocus="autofocus" type="text" className="form-control request-input request-input-dt-tme"  placeholder="" name="private_car_pick_up_date" required/>

										<select name="private_car_pick_up_time_hour" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
										</select>

										<select name="private_car_pick_up_time_minute" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="00">00</option>
											<option value="15">15</option>
											<option value="30">30</option>
											<option value="45">45</option>
										</select>
										<select name="private_car_pick_up_time_ampm" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="AM">AM</option>
											<option value="PM">PM</option>
										</select>
									</div>
								</div>
							</div>


							<div className="row date-and-time-group">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Drop off date and time: </label>
									<div className="dt-time-flex">
										<input disabled autofocus="autofocus" type="text" className="form-control request-input request-input-dt-tme"  placeholder="" name="private_car_pick_up_date" required/>

										<select name="private_car_drop_up_time_hour" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
											<option value="11">11</option>
											<option value="12">12</option>
										</select>

										<select name="private_car_drop_up_time_minute" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="00">00</option>
											<option value="15">15</option>
											<option value="30">30</option>
											<option value="45">45</option>
										</select>
										<select name="private_car_drop_up_time_ampm" className="form-control request-select request-select-dt-tme">
											<option value="" label=" "></option>
											<option value="AM">AM</option>
											<option value="PM">PM</option>
										</select>
									</div>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Pick up location:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="private_car_pick_up_location" required/>
								</div>
							</div>



							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Drop off location:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="private_car_drop_off_location" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Number of people and bags:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="private_car_number_people_and_bags" required/>
								</div>
							</div>




							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred vehicle type:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="private_car_preferred_vehicle_type" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Any car seats needed:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="private_car_child_seats" required/>
								</div>
							</div>


							

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Additional notes pertaining to this task: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="private_car_additional_notes"></textarea>
								</div>
							</div>

							<div style={{textAlign:"left"}}>
								<strong><i>Please note, our concierge team does not have additional access to reservations beyond what's publicly available. However we will do our best to secure a reservation at or close to the time that you are looking for, or provide alternative dining options in the area in the circumstance a booking cannot be secured as requested.</i></strong>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Restaurant name:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="restaurant_reservation_restaurant_name" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Location:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="restaurant_reservation_restaurant_location" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred date:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="restaurant_reservation_preferred_date" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span> Preferred time:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="restaurant_reservation_preferred_time" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Party size:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="restaurant_reservation_party_size" required/>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Allergy notes:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="restaurant_reservation_allergy_notes" required/>
								</div>
							</div>

							

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Additional notes pertaining to this task: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="restaurant_reservation_additional_notes"></textarea>
								</div>
							</div>




							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred airline:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flight_quote_preferred_airline" required/>
								</div>
							</div>

							<div className="row date-and-time-group">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred departure date and time: </label>
									<div className="dt-time-flex">
										<input disabled autofocus="autofocus" type="text" className="form-control request-input request-input-dt-tme"  placeholder="" name="flight_quote_departure_date" required/>

										<select name="flight_quote_departure_time_of_day_time" className="form-control request-select request-select-day-dt-tme">
											<option value="" label=" "></option><option value="Anytime">Anytime</option>
											<option value="Early morning">Early morning</option>
											<option value="Morning">Morning</option>
											<option value="Late morning">Late morning</option>
											<option value="Noon">Noon</option>
											<option value="Afternoon">Afternoon</option>
											<option value="Evening">Evening</option>
											<option value="Late evening">Late evening</option>
											<option value="Midnight">Midnight</option>
										</select>
										
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Departure airport:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flight_quote_departure_airport" required/>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Arrival airport:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flight_quote_arrival_airport" required/>
								</div>
							</div>



							<div className="row date-and-time-group">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred return date and time:
									</label>
									<div className="dt-time-flex">
										<input disabled autofocus="autofocus" type="text" className="form-control request-input request-input-dt-tme"  placeholder="" name="flight_quote_return_date" required/>

										<select name="flight_quote_departure_time_of_day_time" className="form-control request-select request-select-day-dt-tme">
											<option value="" label=" "></option><option value="Anytime">Anytime</option>
											<option value="Early morning">Early morning</option>
											<option value="Morning">Morning</option>
											<option value="Late morning">Late morning</option>
											<option value="Noon">Noon</option>
											<option value="Afternoon">Afternoon</option>
											<option value="Evening">Evening</option>
											<option value="Late evening">Late evening</option>
											<option value="Midnight">Midnight</option>
										</select>
										
									</div>
								</div>
							</div>



							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred cabin class:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flight_quote_preferred_cabin_class" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>How many people:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flight_quote_number_of_people" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Additional notes pertaining to this task: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="flight_quote_additional_notes"></textarea>
								</div>
							</div>



							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Recipient's first and last name:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flower_order_recipient_first_and_last_name" required/>
								</div>
							</div>

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Recipient phone number:  </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flower_order_recipient_phone" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Delivery date: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flower_order_delivery_date" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Delivery address: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flower_order_delivery_address" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Budget: </label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flower_order_budget" required/>
								</div>
							</div>



							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Preferred arrangement / flower type (enter “n/a” if you’d like us to choose):</label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flower_order_preferred_arrangement_flower_type" required/>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Card message:</label>
									<input disabled autofocus="autofocus" type="text" className="form-control request-input"  placeholder="" name="flower_order_card_message" required/>
								</div>
							</div>




							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label">Additional notes pertaining to this task: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="flower_order_additional_notes"></textarea>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span> Other Task: </label>
									<div style={{textAlign:"left"}}>
										<strong><i>Please explain in detail what you need assistance with</i></strong>
									</div>
									<textarea disabled className="form-control" rows="5" placeholder="" name="other_task_details"></textarea>
								</div>
							</div>


							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Member Benefit Questions: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="member_benefit_details"></textarea>
								</div>
							</div>

							

							<div className="row">
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 form-group">
									<label className="request-label"><span><i class="bi bi-asterisk" aria-hidden="true"></i></span>Member Billing Questions: </label>
									<textarea disabled className="form-control" rows="5" placeholder="" name="member_benefit_questions"></textarea>
								</div>
							</div>






							<div className="form-group">
								<button className="btn btn-black btn-submit-request" disabled>
									<Link to='/' target='_blank'>submit request</Link>
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

export default ConciergeRequest;
