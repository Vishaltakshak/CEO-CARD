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
        <div className="container-fluid order-container-banner">
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

              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12 order-container-left">
                <div>
                  <h1>Bring Your Benefits Everywhere You Go</h1>
                  <p>
                    Order your custom- engraved stainless steel Membership card
                    to receive it before the end of your complimentary
                    limited-access trial.
                  </p>
                </div>
                <div>
                  <button className="btn btn-orderMembership">
                    PURCHASE FOR $39
                  </button>
                </div>
                <div>
                  {/* <button className="btn-orderMembership-anchor">Receive my card for free with All Access Elite Membership</button> */}

                  <Link
                    onClick={() => member1.current?.scrollIntoView()}
                    className="btn-orderMembership-anchor"
                  >
                    Receive my card for free with All Access Elite Membership
                  </Link>
                </div>
              </div>
              {/* For desktop */}
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12 order-container-right d-xl-block d-lg-block d-md-none d-sm-none d-none">
                <img
                  className="order-img"
                  src="https://d2q86wmri3hsp2.cloudfront.net/assets/order_membership_card/card_slanted_noname(974x741)-b6822dda3c605479dd0e20a6d28011fb53affd1c8f30f7dcd91cf9c734bddc4c.png"
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
                  src="././assets/img/HeaderPages/comple-img.png"
                  alt=""
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12 	complem-container-right">
                <h1 className="comple-heading">
                  Receive Your Complimentary Card with All Access Elite
                </h1>
                <p className="comple-para">
                  Upgrade now to get your custom-engraved black stainless steel
                  card, which is completely free with our highest tier of
                  Membership.
                </p>
                <button className="btn comple-btn">UPGRADE TO ORDER</button>
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

                  <div class="form-group col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <label
                      class="opacity-hidden mobile-hidden-label"
                      for="address_country"
                    >
                      Country
                    </label>
                    <select
                      class="form-control"
                      required="required"
                      name="address[country]"
                    >
                      <option value=""></option>
                      <option disabled="disabled" value="country">
                        Country
                      </option>
                      <option value="AF">Afghanistan</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling Islands)</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Cote D'Ivoire (Ivory Coast)</option>
                      <option value="HR">Croatia (Hrvatska)</option>
                      <option value="CU">Cuba</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="TP">East Timor</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="FX">France, Metropolitan</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard and McDonald Islands</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">Korea (North)</option>
                      <option value="KR">Korea (South)</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macau</option>
                      <option value="MK">Macedonia</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="AN">Netherlands Antilles</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="VC">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SK">Slovak Republic</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        S. Georgia and S. Sandwich Isls.
                      </option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SH">St. Helena</option>
                      <option value="PM">St. Pierre and Miquelon</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen Islands</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syria</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option selected="selected" value="US">
                        United States
                      </option>
                      <option value="UM">US Minor Outlying Islands</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican City State (Holy See)</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands (British)</option>
                      <option value="VI">Virgin Islands (US)</option>
                      <option value="WF">Wallis and Futuna Islands</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="YU">Yugoslavia</option>
                      <option value="ZR">Zaire</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                      <option value="OT">Other</option>
                    </select>
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
                    <button class="btn confirm-button">CONFIRM</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container-fluid benefit-container">
          <div className="col-xl-12 col-12 benefit-container-child">
            <h1 className="benefit-title">Explore the Benefits</h1>
            <div className="elite-upgrade-member-benefits-table">
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
