import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/submenubanner.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const SubmenuBanner = ({ service }) => {
  // const favouriteTooltip = props => (
  // 	<Tooltip {...props}>Save this Benefit to Your Favorites</Tooltip>
  //   );

  //use state for viewing long details
  const [isViewdetails, setViewdetails] = useState("false");
  const handleViewdetails = () => {
    setViewdetails(!isViewdetails);
  };

  //use state for favourite icon changed
  const [isFavouriteicon, setFavouriteicon] = useState("false");
  const handleFavouriteicon = () => {
    setFavouriteicon(!isFavouriteicon);
  };

  return (
    <>
      <div className="container-fluid submenu-banner">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pe-0 ps-0 submenu-banner-child">
          <div className="visible-large-size">
            <img alt="Full width Banner" src={service.banner}></img>
          </div>
          <div className="visible-small-size">
            <img alt="Full width Banner" src={service.banner}></img>
          </div>
          <div className="submenu-banner-child-overlay">
            <div className="external-information">
              {service.contactPhone}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Link to={service.websiteURL} target="_blank">
                Visit Website &nbsp;
                <img
                  alt="Website Visit"
                  style={{ height: "10px", width: "auto" }}
                  src="././assets/img/Submenu/visit-website-icon.svg"
                ></img>
              </Link>
            </div>
          </div>
          <div className="submenu-banner-desc">
            <div className="submenu-banner-desc-child">
				{/* className={
                //isViewdetails
                  ? "submenu-banner-desc-child"
                  : "submenu-banner-desc-child submenu-banner-long-box"
              } */}
              <div
                onClick={handleViewdetails}
                className={
                  isViewdetails
                    ? "submenu-banner-view-more d-block"
                    : "submenu-banner-view-more d-none"
                }
              >
                <Link onClick={handleViewdetails}>View More</Link>
              </div>
              <div className="submenu-banner-long-box-top">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 submenu-banner-long-box-inner">
                  {/* heart icon */}

                  {/* <OverlayTrigger placement="left" overlay={favouriteTooltip}>
									<span onClick={handleFavouriteicon} className="favorite-icon " >
										<i className={isFavouriteicon ? "bi bi-suit-heart d-block" : "bi bi-suit-heart-fill"}></i>
									</span>
								</OverlayTrigger> */}

                  <OverlayTrigger
                    placement="left"
                    overlay={(props) => (
                      <Tooltip {...props}>
                        Save this Benefit to Your Favorites
                      </Tooltip>
                    )}
                  >
                    <span
                      onClick={handleFavouriteicon}
                      className="favorite-icon "
                    >
                      <i
                        className={
                          isFavouriteicon
                            ? "bi bi-suit-heart d-block"
                            : "bi bi-suit-heart-fill"
                        }
                      ></i>
                    </span>
                  </OverlayTrigger>
                  {/* heart icon */}

                  {/* lock icon */}
                  <OverlayTrigger
                    placement="left"
                    overlay={(props) => (
                      <Tooltip {...props}>
                        Upgrade to Elite to access this benefit
                      </Tooltip>
                    )}
                  >
                    <span className="favorite-icon d-none">
                      <i className="bi bi-lock-fill"></i>
                    </span>
                  </OverlayTrigger>
                  {/* lock icon */}

                  <div className="text-center">
                    <h1 className="long-box-inner-title">
                      {service.serviceProviderName}
                    </h1>
                    <h5 className="long-box-inner-subtitle">
                      {service.cardTitle}
                    </h5>
                  </div>

                  <div className="offers-desc ">
                    {/* offer table */}
                    <table className="offer-table d-none">
                      <thead>
                        <tr>
                          <th>
                            Room Category&nbsp;
                            <OverlayTrigger
                              placement="top"
                              overlay={(props) => (
                                <Tooltip {...props}>
                                  Room types with FC negotiated rates. There may
                                  be additional room types offered by the hotel
                                  that are not listed here.
                                </Tooltip>
                              )}
                            >
                              <i class="bi bi-info-circle-fill"></i>
                            </OverlayTrigger>
                          </th>

                          <th>
                            CeoCard Rate&nbsp;
                            <OverlayTrigger
                              placement="top"
                              overlay={(props) => (
                                <Tooltip {...props}>
                                  FC rates are based on specific room types
                                  available over requested dates.
                                </Tooltip>
                              )}
                            >
                              <i class="bi bi-info-circle-fill"></i>
                            </OverlayTrigger>
                          </th>

                          <th>
                            AVG. PUBLIC RATE&nbsp;
                            <OverlayTrigger
                              placement="top"
                              overlay={(props) => (
                                <Tooltip {...props}>
                                  An example of the hotel's publicly available
                                  Best Available Rate with flexible
                                  cancellation.
                                </Tooltip>
                              )}
                            >
                              <i class="bi bi-info-circle-fill"></i>
                            </OverlayTrigger>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Harbour View King &nbsp;</td>
                          <td>$335-$585&nbsp;</td>
                          <td>
                            <del>$575-$1,025</del>&nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>super King &nbsp;</td>
                          <td>$335-$585&nbsp;</td>
                          <td>
                            <del>$575-$1,025</del>&nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>Ocean View King &nbsp;</td>
                          <td>$335-$585&nbsp;</td>
                          <td>
                            <del>$575-$1,025</del>&nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* offer table */}

                    <div className="offers-desc-inner ">
                      <p className="offers-desc-inner-p d-none">
                        <strong>
                          Update as of May 30, 2024: We have renewed the
                          contract with Etihad and are waiting for the updated
                          booking link. We hope to have this updated shortly
                        </strong>
                      </p>
                      <ul className="offers-desc-inner-ul">
                        <li>
                          <span>{service.cardDescription}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* unlock benefits */}
                  <div className="text-center" style={{ marginBottom: "15px" }}>
                    <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRedeemBenefits" aria-controls="offcanvasRedeemBenefits"
                      class="btn btn-unlock-benefits"
                    >
                      redeem benefits
                    </Link>
                    <div style={{ marginTop: "5px" }}>
                      <Link
                        to="/redemption_assistance"
                        style={{
                          fontSize: "11px",
                          textDecoration: "underline",
                        }}
                      >
                        Need help?
                      </Link>
                    </div>
                  </div>

                  <div className="row featured-comment-box">
                    <div className="col-xl-12">
                      <h6 className="featured-comment-name">
                        “Booked the lowest cost room and was upgraded to a 1
                        bedroom suite for 4 nights. Also received extra points,
                        free internet, and 2 bottles of water per day.”
                      </h6>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="featured-comment-image-link">
                          <img
                            alt="Avatar"
                            className="featured-comment-image"
                            src="https://d2920d93lyqeaf.cloudfront.net/images/users/avatars/19011/tiny_profile.jpeg?1384812167"
                          ></img>
                        </div>

                        <div className="featured-comment-para">
                          <h5>
                            <span>
                              Anthony M.
                              <span>, President @ A Social Strategy, Inc</span>
                            </span>
                          </h5>
                          <h5 style={{ marginBottom: "0px" }}>
                            Member Since 2013
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* unlock benefits */}
                </div>
              </div>
              <br></br>
              <div  className={
                isViewdetails
                  ? "submenu-banner-long-box-bottom"
                  : "submenu-banner-long-box-bottom submenu-banner-long-box"
              }>
			 
                <h3>The Fine Print</h3>
                <p>
                  Applicable exclusively to CeoCard members. Valid on return
                  trip fares operated by Etihad Airways from Chicago (ORD), New
                  York (JFK), Washington D.C (IAD), Toronto (YYZ), London (LHR)
                  and Manchester (MAN) and selected US offline airports Austin
                  (AUS), Dallas - Fort Worth (DFW), Houston (HOU), Los Angeles
                  (LAX), Miami (MIA) and San Francisco (SFO) to Ahmedabad (AMD),
                  Abu Dhabi (AUH), Bahrain (BAH), Bangkok (BKK), Mumbai (BOM),
                  Cairo (CAI), Ganzhou (CAN), Jakarta (CGK), Columbo (CMB),
                  Calcutta (CCU), New Delhi (DEL), Doha (DOH), Dammam (DMM),
                  Hyderabad (HYD), Seoul (ICN), Jeddah (JED), Johannesburg
                  (JNB), Kuwait (KWI), Lahore (LHE), Chennai (MAA), Muscat
                  (MCT), Melbourne (MEL), Male (MLE), Manila (MNL), Beijing
                  (PEK), Shanghai (PVG), Riyadh (RUH), Seychelles (SEZ)
                  Singapore (SIN), Sydney (SYD), Al Ain (AAN) and Dubai (XNB).
                  The offer does not apply to multi-city and open-jaw
                  itineraries or stopovers. Valid for bookings made between 1
                  April 2023 and 31 March 2024 for travel any time until 31
                  March 2024. The offer comprises a discount of up to 10% off
                  airfares in Economy, Business and First, excluding Economy
                  Sale, Economy Choice Plus and Business Choice Plus fares. The
                  discount is applied per person, excluding taxes and
                  surcharges, and is shown at the time of booking online. The
                  discount will apply to adult fares. Flights eligible for the
                  discount are clearly marked during the
                </p>
                <div
                  className={
                    isViewdetails
                      ? "view-more-box d-none"
                      : "view-more-box d-block"
                  }
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris eu tellus efficitur lectus lobortis dignissim nec non
                    mi. Donec tellus metus, finibus sed varius ac, pretium sed
                    lectus. Nulla sagittis suscipit lacinia. Pellentesque
                    eleifend eget eros sit amet sollicitudin. Nullam laoreet
                    justo egestas, semper magna a, maximus magna. Vestibulum
                    rhoncus pellentesque arcu, aliquam varius eros faucibus a.
                    Fusce sed tincidunt enim. Sed vehicula eu lorem ut mollis.
                    Ut eu nibh id arcu egestas tempor. Sed at risus vel lacus
                    tincidunt ullamcorper et eget ipsum. Cras ut velit sit amet
                    felis luctus mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

		{/* redemmed benefits section */}
		<div className="offcanvas offcanvas-end redeem-benefits-section" tabindex="-1" id="offcanvasRedeemBenefits" aria-labelledby="offcanvasRightLabel">
			{/* <div className="offcanvas-header redeem-benefits-section-header">
				
				<Link to="/Submenu" className="back-to-benefit">
					<img alt="Go to Back" src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/back-arrow-394386e58f69426a91b10c591536d0c5f09e7673c309583018c4e29032afc3a3.svg"></img>Back to benefits
				</Link>
				<button type="button" className="btn-close text-reset btn-redeem-closed" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div> */}
			<div className="offcanvas-body  redeem-benefits-section-body">
				<div className="back-to-benefit-box">
					<Link to="/" className="back-to-benefit" data-bs-dismiss="offcanvas" aria-label="Close">
						<img alt="Go to Back" src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/back-arrow-394386e58f69426a91b10c591536d0c5f09e7673c309583018c4e29032afc3a3.svg"></img>Back to benefits
					</Link>
				</div>
				
				<div className="redeem-benefit-box" id="how-to-redeem">

						<strong>Note: You may be asked to show proof of FoundersCard Membership at check-in by presenting your <Link to="/digital_card" target="_blank">digital Membership card which can be accessed in your online profile</Link> or through our mobile app.</strong>
						If you are not able to present your <Link to="/digital_card" target="_blank">digital Membership card</Link> at check-in, the hotel reserves the right to adjust your reservation to the prevailing rate at time of check-in.
						<br></br>
						<h5 className="text-bold">Member-only hotel rates</h5>
						We negotiate the lowest possible rates, forgo commission, and extend these rates directly to Members. <strong>We ask for your discretion in referencing these special rates to anyone outside of FoundersCard.</strong>
						<br></br>
						<br></br>

						<h3>By Phone:</h3>

						<p>Call 310.457.8700. Please be sure to reference your FoundersCard Membership and bring your membership card for presentation upon check-in.</p>

						<h3>By Email:</h3>

						<p>Contact <Link to="mailto:melissan@theranchlife.com" target="_blank">melissan@theranchlife.com</Link>. Please be sure to reference your FoundersCard Membership and bring your membership card for presentation upon check-in.</p>
						{/* <form className="new_redemption" action="/" method="post">
								<input name="utf8" type="hidden" value="✓" />
								<div id="results-old"></div>
								<input type="hidden" name="benefit_id" value=""/>
								<div id="results" style={{display:"none"}}></div>
						</form> */}
				</div>
			</div>
		</div>
		{/* redemmed benefits section */}
    </>
  );
};

export default SubmenuBanner;
