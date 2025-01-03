import React from "react";
import HomeButton from "./HomeButton";
import "../css/home.css";

const MembershipDetails = () => {
  return (
    <>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 membership-detail-child">
        <h1 className="membership-title">VIP Travel Privileges</h1>
        <p className="membership-para">
          CeoCard partners with leading airlines, loyalty programs, car rental
          companies and innovative travel brands to provide Members with:
        </p>
        <ul className="membership-list">
          <li>Complimentary elite status</li>
          <li>Priority check-in</li>
          <li>Savings off standard fares</li>
          <li>Access to unique global travel experiences</li>
          <li>Complimentary travel membership solutions.</li>
        </ul>
        <p className="membership-para">
          <strong>Partners include:</strong> United Airlines, Virgin Atlantic,
          Singapore Airlines, Avis and more...
        </p>
        <HomeButton buttontext={"preview membership"}></HomeButton>
      </div>
    </>
  );
};

export default MembershipDetails;
