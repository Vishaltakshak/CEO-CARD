import React from "react";
import MembershipImage from "./MembershipImage";
import HomeButton from "./HomeButton";
//import MembershipDetails from "./MembershipDetails";
import "../css/home.css";

const Image = "././assets/img/business-solution.jpg";

const MembershipBusinessSolution = () => {
  return (
    <>
      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 membership-block">
        <div className="row align-items-center justify-content-center bg-D9D9D9 border-radius ">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 membership-detail-child order-xxl-1 order-lg-1 order-md-2 order-sm-2 order-2">
            <h1 className="membership-title">Premier Business Solutions</h1>
            {/* <p className="membership-para">
							CeoCard helps businesses of all sizes succeed with a valuable program of exclusive benefits and savings on computers, shipping, wireless providers, co-working spaces, and more.
						</p> */}
            <ul className="membership-list">
              <li>Comprehensive operational support</li>
              <li>Strategic partnership facilitation</li>
              <li>Regulatory and fiscal advisory</li>
              <li>Brand development and promotion</li>
              <li>Corporate establishment</li>
              <li>Compliance management</li>
            </ul>
            <p className="membership-para">
              <strong>Partners include:</strong> AWS, Dell, Slack, Lenovo, and
              more...
            </p>
            <HomeButton buttontext={"preview membership"}></HomeButton>
          </div>
          <MembershipImage membershipimg={Image}></MembershipImage>
        </div>
      </div>
    </>
  );
};

export default MembershipBusinessSolution;
