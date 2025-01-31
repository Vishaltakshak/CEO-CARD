import React from "react";
import BeforLoginHeader from "../Common/BeforeLoginHeader";
import "../css/about_us.css";
import FooterNew from "./FooterNew";
import AboutusHeader from "./AboutusHeader";


const AboutHeaderbgColor = "#000000";
const AboutFooterbgColor = "#ffffff";
const About_us = () => {
  return (
    <>
    <AboutusHeader/>
      {/* <BeforLoginHeader isopen={false}  HEADERBGCOLOR={AboutHeaderbgColor}></BeforLoginHeader> */}
      <div>
        {/* ist */}
        <div className="w-full h-[80vh] flex items-center justify-center bg-about bg-cover bg-top bg-no-repeat relative">
          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <div className="w-[70%] lg:w-[50%] flex flex-col items-center justify-center z-[10]">
            <h1 className="redesign-about-hero-h1" style={{ color: "#fff" }}>
              The CEOCard Story
            </h1>
            <p
              className="text-center text-[20px]"
              style={{ color: "#fff", fontWeight: "600" }}
            >
              Established in 2020, CEO Card provides premium membership benefits
              for elite entrepreneurs and business leaders.
            </p>
          </div>
        </div>
        {/* 2nd  aboutvid*/}
        <div className="redesign-aboutvid-section">
          <div className="redesign-home-full-container">
            <div className="redesign-about-cols row">
              <div className="col-lg-4 col-md-4">
                
              </div>
              {/* <div className="col-lg-8 col-md-8"> */}
              <div className="redesign-home-div-left-events">
                <p className="redesign-about-half-paragraph">
                  Established in 2020, CEO Card provides premium membership
                  benefits for elite entrepreneurs and business leaders. Our
                  mission is to elevate your business travel experiences with a
                  range of benefits covering flights, luxury hotels, and
                  essential business services. Whether you need a flight from
                  New York or a reservation at a 5-star hotel, we've got you
                  covered.
                </p>
                <p className="redesign-about-half-paragraph">
                  CEO Card is an innovative platform designed to enhance the
                  professional journey of today's most influential business
                  leaders. We provide tailored resources to support their unique
                  needs, recognizing the critical role executives play in
                  driving organisational success.
                </p>
                <div className="flex justify-content-center key-offering-con">
                  <div className="about-us-keyoffering">
                    <h1>KEY OFFERINGS</h1>
                  </div>
                  {/* <p>
                      <strong>Key Offerings:</strong>
                    </p> */}

                  <div className="col-lg-4 col-md-4 key-offering-list">
                    <ul className="feature-list">
                      <li>Superior business travel perks</li>
                      <li>Luxury hotel accommodations</li>
                      <li>Essential business support services</li>
                      <li>Elite networking events</li>
                      <li>Exclusive brand partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="redesign-review-stats">
          <div className="container" style={{ maxWidth: "940px" }}>
            <div className="row">
              <h1 className="text-center text">Our Community</h1>
              <br />
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6">
                <h2 className="redesign-review-h6">100,000</h2>
                <h4 className="redesign-review-h7">Elite Members</h4>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6">
                <h2 className="redesign-review-h6">100+</h2>
                <h4 className="redesign-review-h7">strategic partnerships</h4>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12">
                <h2 className="redesign-review-h6">75+</h2>
                <h4 className="redesign-review-h7">discerning investors</h4>
              </div>
              {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
                <h2 className="redesign-review-h6">650,000+</h2>
                <h4 className="redesign-review-h7">Benefit Redemptions</h4>
              </div> */}
            </div>
          </div>
        </div>

        <FooterNew FOOTERBGCOLOR={AboutFooterbgColor} />
      </div>
    </>
  );
};

export default About_us;