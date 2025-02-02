import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/browsehotelstopbanner.css';

const BrowseHotelsTopBanner = () => {
  // State for selected destination dropdown in mobile
  const [isselectdestination, setSelectDestination] = useState(false);
  const handleSelectDestination = () => {
    setSelectDestination(!isselectdestination);
  };

  return (
    <>
      <div className="container-fluid browse-hotels-banner-container">
        <div className="row browse-hotel-row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-banner relative">
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
            
            {/* Background Image */}
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={`${process.env.PUBLIC_URL}/assets/img/Home/tajhotel.jpg`}
              alt="hotel"
            />

            {/* Text Content */}
            <div className="absolute top-[30%] right-0 left-0 mx-auto text-center z-20">
              <div className="hotels-banner-text">
                <h1 className="hotels-banner-title">2024 FC HOTEL COLLECTION</h1>
                <h2 className="hotels-banner-subtitle">
                  Exclusive Member Rates and Privileges at 500+ Hotels and Resorts
                </h2>
                <p className="hotels-banner-para">
                  Earn Eligible Loyalty Points while Booking Directly with Privately Negotiated Rates
                </p>
              </div>
            </div>

            {/* Featured Hotel Text */}
            <div className="hotels-banner-overlay hidden md:block">
              Featured FC Hotel Property: <Link to="/#">Maroma, A Belmond Hotel Riviera Maya</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseHotelsTopBanner;
