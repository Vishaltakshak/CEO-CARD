import React from "react";
import "../../css/pages/allbenifits.css";
import PopularBenefits from "../PopularBenefits";
import AfterLoginLayout from "../layouts/AfterLoginLayout";
import ScrollTotop from "../ScrollTotop";
const About = () => {
  return (
    <>
      <AfterLoginLayout>
        <div id="referral-hero-container">
          <div id="referral-hero-content">
            <div
              id="referral-hero-heading-version-1"
              class="referral-hero-heading"
            >
              All Access Elite
            </div>
            <div
              id="referral-hero-subheading-version-1"
              class="referral-hero-subheading"
            >
              Upgrade to All Access
              <br />
              Elite to unlock all benefits
            </div>
            <a id="referral-hero-button" href="/OrderMembershipCard">
              UPGRADE TO ELITE
            </a>
          </div>
        </div>
        <PopularBenefits />
        <ScrollTotop/>
      </AfterLoginLayout>
    </>
  );
};

export default About;
