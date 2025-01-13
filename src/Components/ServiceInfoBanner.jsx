import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/submenubanner.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ServiceInfoBanner = ({ service }) => {
 

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
                     <img alt="Full width Banner" src={service.VendorImages}></img>
                </div>
          <div className="visible-small-size">
            <img alt="Full width Banner" src={service.VendorImages}></img>
          </div>
          <div className="submenu-banner-child-overlay">
            <div className="external-information">
              {service.ContactNumber}
              &nbsp; &nbsp; &nbsp; &nbsp;
              {/* <Link to={service.WebsiteURl} target="_blank">
                Visit Website &nbsp;
                <img
                  alt="Website Visit"
                  style={{ height: "10px", width: "auto" }}
                  src="././assets/img/Submenu/visit-website-icon.svg"
                ></img>
              </Link> */}
            </div>
          </div>
          
        </div>
    </div>
		
    </>
  );
};

export default ServiceInfoBanner;
