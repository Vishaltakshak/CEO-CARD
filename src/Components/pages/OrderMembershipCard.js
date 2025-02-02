import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AfterLoginHeader from "../../Common/AfterLoginHeader";
import ScrollTotop from "../ScrollTotop";
import AfterLoginFooter from "../../Common/AfterLoginFooter";
import "../../css/pages/ordermembershipcard.css";
import AfterLoginLayout from "../layouts/AfterLoginLayout";

const OrderMembershipCard = () => {
  const member1 = useRef(null);
  return (
    <>
      <AfterLoginLayout>
      <div className="container-fluid order-container pe-0 ps-0">
        <div className="text-black bg-white order-container-banner">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="row order-container-banner-row">
              {/* For mobile */}
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 	order-container-right d-xl-none d-lg-none d-md-block d-sm-block d-block">
                <img
                  className="order-img"
                  src="https://d2q86wmri3hsp2.cloudfront.net/assets/order_membership_card/card_slanted_noname(974x741)-b6822dda3c605479dd0e20a6d28011fb53affd1c8f30f7dcd91cf9c734bddc4c.png"
                  alt=""
                />
              </div>
              {/* For mobile */}

              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12 order-container-left bg-white">
                <div>
                  <h1  className="text-black">Bring Your Benefits Everywhere You Go</h1>
                  <p className="text-black">
                    Order your custom- engraved stainless steel Ceo card
                    to receive it before the end of your complimentary
                    limited-access trial.
                  </p>
                </div>
                <div>
                  <Link to='/payment'>
                  <button className="btn btn-orderMembership ">
                    PURCHASE FOR $39
                  </button></Link>
                </div>
                <div>
                  {/* <button className="btn-orderMembership-anchor">Receive my card for free with All Access Elite Membership</button> */}

                  <Link
                    onClick={() => member1.current?.scrollIntoView()}
                    className="btn-orderMembership-anchor text-black"
                  >
                    Receive my card for free with All Access Elite Membership
                  </Link>
                </div>
              </div>
              {/* For desktop */}
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 order-container-right d-xl-block d-lg-block d-md-none d-sm-none d-none">
                <img
                  className="order-img"
                  src={`${process.env.PUBLIC_URL}/assets/img/CEOCARD.jpg`}
                  alt=""
                />
              </div>
              {/* For desktop */}
            </div>
          </div>
        </div>
        <div className="container-fluid complem-container">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row complem-container-row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 complem-container-left">
                <img
                  className="comple-img"
                  src={`${process.env.PUBLIC_URL}/assets/img/CEOCARD.jpg`}
                  alt=""
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 	complem-container-right">
                <h1 className="comple-heading text-black">
                  Receive Your Complimentary Card with All Access Elite
                </h1>
                <p className="comple-para text-black">
                  Upgrade now to get your custom-engraved black stainless steel
                  card, which is completely free with our highest tier of
                  Membership.
                </p>
                <Link to='/Payment'>
                <button className="btn comple-btn">UPGRADE TO ORDER</button></Link>
              </div>
            </div>
          </div>

          <div
            style={{ scrollMargin: "170px" }}
            ref={member1}
            className="container complem-form-container pe-0 ps-0"
          >
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 complem-form-container-column">
              <form action="">
                <div className="row complem-form-container-row row-equal-ht">
                  <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <label
                      className="form-label opacity-hidden mobile-hidden-label"
                      for="payment_card_credit_card_number"
                    >
                      Card Number
                    </label>
                    <input
                      className="form-control"
                      placeholder="Card Number"
                      required
                      type="text"
                      name="payment_card[credit_card_number]"
                    />
                  </div>
                  <div className="form-group col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                    <label className="form-label opacity-hidden">
                      Credit card{" "}
                    </label>
                    <input
                      className="form-control"
                      placeholder="CVC"
                      required
                      type="text"
                      name="payment_card[credit_card_verification_value]"
                    />
                  </div>
                  <div className="form-group col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                    <label className="form-label">Exp. Date</label>
                    <input
                      className="form-control"
                      placeholder="MM/YYYY"
                      required
                      type="text"
                      name="payment_card[expiration_date]"
                    />
                  </div>
                  <div className="form-group col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
                    <label className="form-label opacity-hidden">
                      Exp. Date Year
                    </label>
                    <input
                      className="form-control elite-upgrade-zip-input"
                      placeholder="Zip Code"
                      required
                      type="text"
                      name="payment_card[address_attributes][zip]"
                    />
                  </div>
                </div>

                <div className="row complem-form-container-row">
                  <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <label className="form-label">Shipping Address</label>
                    <input
                      className="form-control"
                      placeholder="Street Line 1"
                      required
                      type="text"
                    />
                  </div>
                  <div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <label className="form-label opacity-hidden mobile-hidden-label">
                      Credit card{" "}
                    </label>
                    <input
                      className="form-control"
                      placeholder="Street Line 2"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div class="row complem-form-container-row">
                  <div class="form-group col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <label
                      class="opacity-hidden mobile-hidden-label"
                      for="address_city"
                    >
                      City
                    </label>
                    <input
                      class="form-control"
                      placeholder="City/Town"
                      required="required"
                      type="text"
                      name="address[city]"
                    />
                  </div>

                  <div class="form-group col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <label
                      class="opacity-hidden mobile-hidden-label"
                      for="address_state"
                    >
                      State
                    </label>
                    <select class="form-control" required name="address[state]">
                      <option value="">State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>

                  <div class="form-group col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <label
                      class="opacity-hidden mobile-hidden-label"
                      for="address_zip"
                    >
                      Zip Code
                    </label>
                    <input
                      class="form-control"
                      placeholder="Zip Code"
                      required
                      type="text"
                      name="address[zip]"
                    />
                  </div>

                </div>

                <div className="row complem-form-container-row">
                  <div class="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <label class="form-label">Billing Address</label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label
                        class="form-check-label form-label"
                        for="flexCheckChecked"
                      >
                        Same as Shipping Address
                      </label>
                    </div>
                  </div>
                  <div class="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"></div>
                </div>
                <div className="row complem-form-container-row">
                  <div class="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"></div>
                  <div class="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <Link to='/Payment'>
                    <button class="btn confirm-button">CONFIRM</button></Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container-fluid benefit-container">
          <div className="col-xl-12 col-12 benefit-container-child">
            <h1 className="benefit-title">Explore the Benefits</h1>
            <div className="elite-upgrade-member-benefits-table text-black">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-3 col-3"></div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5 col-5">
                  <span className="benefit-table-trial-heading">
                    TRIAL MEMBERSHIP
                  </span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <span className="benefit-table-elite-heading">
                    ALL ACCESS ELITE
                  </span>
                </div>
              </div>

              <div className="row table-main-category">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  All CeoCard Benefits
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  Limited Selection
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <img
                    alt="Check"
                    className="check-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/circle-check-blue-12ba65570de86496ef97b1349104c240b36f45f252b7d03105a5e1d4ad98da57.svg"
                  />
                </div>
              </div>

              <div className="row table-main-category">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  The CeoCard Collection of Luxury Hotels
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  Limited Selection
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  Unlimited Access
                </div>
              </div>

              <div className="row table-main-category">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  The CeoCard Portfolio of Leading Airlines
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  Limited Selection
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  Unlimited Access
                </div>
              </div>

              <div className="row table-main-category">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  TLoyalty Status Upgrades with Top Travel Brands
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <img
                    alt="lock"
                    class="padlock-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/padlock-f47bdc83c35a68c665d9f3e9eaa912479756978f7fef0509798d22d91f0bc8e0.png"
                  />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  Unlimited Access
                </div>
              </div>

              <div className="row table-main-category">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  Complimentary Companion Standard Membership
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <img
                    alt="lock"
                    class="padlock-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/padlock-f47bdc83c35a68c665d9f3e9eaa912479756978f7fef0509798d22d91f0bc8e0.png"
                  />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  Included
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5 bullet-font-size">
                  <span className="elite-table-bullet"></span> Omni Select
                  Guest® Platinum
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <span className="elite-table-hyphen"></span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <img
                    alt="Check"
                    className="check-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/circle-check-blue-12ba65570de86496ef97b1349104c240b36f45f252b7d03105a5e1d4ad98da57.svg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5 bullet-font-size">
                  <span className="elite-table-bullet"></span> IHG® One Rewards
                  Gold Elite
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <span className="elite-table-hyphen"></span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <img
                    alt="Check"
                    className="check-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/circle-check-blue-12ba65570de86496ef97b1349104c240b36f45f252b7d03105a5e1d4ad98da57.svg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5 bullet-font-size">
                  <span className="elite-table-bullet"></span> Hilton Honors™
                  Gold
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <span className="elite-table-hyphen"></span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <img
                    alt="Check"
                    className="check-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/circle-check-blue-12ba65570de86496ef97b1349104c240b36f45f252b7d03105a5e1d4ad98da57.svg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5 bullet-font-size">
                  <span className="elite-table-bullet"></span> Avis President's
                  Club
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <span className="elite-table-hyphen"></span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <img
                    alt="Check"
                    className="check-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/circle-check-blue-12ba65570de86496ef97b1349104c240b36f45f252b7d03105a5e1d4ad98da57.svg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5 bullet-font-size">
                  <span className="elite-table-bullet"></span> Hertz President's
                  Circle
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <span className="elite-table-hyphen"></span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <img
                    alt="Check"
                    className="check-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/circle-check-blue-12ba65570de86496ef97b1349104c240b36f45f252b7d03105a5e1d4ad98da57.svg"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5 bullet-font-size">
                  <span className="elite-table-bullet"></span> Sixt Platinum
                  Card Membership
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <span className="elite-table-hyphen"></span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  <img
                    alt="Check"
                    className="check-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/circle-check-blue-12ba65570de86496ef97b1349104c240b36f45f252b7d03105a5e1d4ad98da57.svg"
                  />
                </div>
              </div>

              <div className="row table-main-category">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 col-5">
                  Dedicated Concierge Service
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                  <img
                    alt="lock"
                    class="padlock-image"
                    src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/padlock-f47bdc83c35a68c665d9f3e9eaa912479756978f7fef0509798d22d91f0bc8e0.png"
                  />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
                  Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTotop></ScrollTotop>
      </AfterLoginLayout>
    </>
  );
};

export default OrderMembershipCard;
