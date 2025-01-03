import React from "react";
import MembershipImage from "./MembershipImage";
import HomeButton from "./HomeButton";
import "../css/home.css";

const Image = "././assets/img/curated-privilage.webp";
const MembershipLifestyle = () => {
  return (
    <>
      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 membership-block">
        <div className="row align-items-center justify-content-center bg-white check ">
          <MembershipImage membershipimg={Image}></MembershipImage>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 membership-detail-child order-xxl-2 order-lg-2 order-md-2 order-sm-2 order-1">
            <h1 className="membership-title">Exclusive Lifestyle Benefits</h1>
            {/* <p className="membership-para">
						CeoCard offers Members-only pricing, privileges, and promotions with a wide network of leading fashion, fitness and entertainment brands.
						</p> */}
            <ul className="membership-list">
              <li>Invitations to high-profile events</li>
              <li>Tailored retail savings</li>
              <li>Wellness experiences</li>
              <li>Premium athletic programs</li>
              <li>Luxury living enhancements</li>
            </ul>
            <p className="membership-para">
              <strong>Partners include:</strong> MR PORTER, adidas, John
              Varvatos, Audi, Bang & Olufsen, Porsche Drive, Molton Brown, BMW
              and more...
            </p>
            <HomeButton buttontext={"preview membership"}></HomeButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipLifestyle;
