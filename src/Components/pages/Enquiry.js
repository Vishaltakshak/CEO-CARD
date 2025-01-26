import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BeforeLoginHeaderEnquiry from "../../Common/BeforeLoginHeaderEnquiry";
import EnquiryModal from "./EnquiryModal";
import FooterNew from "../../Common/FooterNew";
import "../../css/pages/enquiry.css";

const HeaderbgColor = "hsla(0, 0%, 100%, 0.53)";

const Enquiry = () => {
  //use state for viewing refferal box
  const [isViewreferral, setViewreferral] = useState("false");
  const handleViewreferral = () => {
    setViewreferral(!isViewreferral);
  };

  return (
    <>
      <BeforeLoginHeaderEnquiry
        HEADERBGCOLOR={HeaderbgColor}
      ></BeforeLoginHeaderEnquiry>
      <div className="w-full flex items-center justify-center bg-enquiry bg-cover bg-top bg-no-repeat relative">
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="flex z-[10] bg-[rgba(255,255,255,0.8)] p-1 rounded-xl m-2 md:m-8 w-[90%] md:w-[50%]">
          <div className="col-xl-12 col-12">
            <div className="inquire-form-container">
             
              <form className="flex flex-col w-full px-8 py-6 gap-1">
  <div className="text-center mb-6">
    <div className="text-2xl font-semibold text-gray-700 mb-2 mt-3">Get Access</div>
    <h1 className="text-3xl font-bold text-gray-800">
      Receive Inside Access to
      <br />
      Over 500 Exclusive Benefits
    </h1>
  </div>

  {/* Form Fields Container */}
  <div className="grid gap-4 w-full max-w-2xl mx-auto">
    {/* Full Name */}
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold text-gray-700">FULL NAME</label>
      <input
        className="px-4 py-2.5 rounded-full border border-black bg-transparent 
        placeholder:text-gray-800 focus:outline-none focus:border-black 
        transition-all duration-200 hover:border-gray-400"
        type="text"
        placeholder="Enter your Name"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold text-gray-700">EMAIL ADDRESS</label>
      <input
        className="px-4 py-2.5 rounded-full border border-black bg-transparent 
        placeholder:text-gray-800 focus:outline-none focus:border-black 
        transition-all duration-200 hover:border-gray-400"
        type="email"
        placeholder="Enter your Email Address"
      />
    </div>

    {/* Professional Title */}
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold text-gray-700">PROFESSIONAL TITLE</label>
      <input
        className="px-4 py-2.5 rounded-full border border-black bg-transparent 
        placeholder:text-gray-800 focus:outline-none focus:border-black 
        transition-all duration-200 hover:border-gray-400"
        type="text"
        placeholder="Enter your Title"
      />
    </div>

    {/* Company */}
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold text-gray-700">COMPANY</label>
      <input
        className="px-4 py-2.5 rounded-full border border-black bg-transparent 
        placeholder:text-gray-800 focus:outline-none focus:border-black 
        transition-all duration-200 hover:border-gray-400"
        type="text"
        placeholder="Enter your Company"
      />
    </div>

    {/* Phone */}
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold text-gray-700">PHONE</label>
      <input
        className="px-4 py-2.5 rounded-full border border-black bg-transparent 
        placeholder:text-gray-800 focus:outline-none focus:border-black 
        transition-all duration-200 hover:border-gray-400"
        type="tel"
        placeholder="Enter your Phone no"
      />
    </div>

    {/* Referral */}
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold text-gray-700">REFERRAL CODE</label>
      <input
        className="px-4 py-2.5 rounded-full border border-black bg-transparent 
        placeholder:text-gray-800 focus:outline-none focus:border-black 
        transition-all duration-200 hover:border-gray-400"
        type="text"
        placeholder="Enter Referral Code"
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-center mt-4">
      <Link
        to="/signupnew"
        className="px-8 py-3 bg-black text-white rounded-full font-semibold 
        hover:bg-gray-800 transition-all duration-200 text-center min-w-[200px]"
      >
        SUBMIT
      </Link>
    </div>
  </div>
</form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="enquiryFaq"
        className="container-fluid enquiry-faq-container pe-0 ps-0"
      >
        <div className="container">
          <div className="row">
            <div class="col-xs-12">
              <h2 class="faq-heading">Frequently Asked Questions</h2>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 col-12">
              <div className="question-div">
                <h6>IF I JOIN TODAY, WHEN CAN I BEGIN USING MY MEMBERSHIP?</h6>
                <p className="faq-details">
                  <span>
                    Your Membership starts the day your application is approved,
                    and you will have immediate access to redeem benefits at
                    that point.
                  </span>
                </p>
              </div>
              <div className="question-div">
                <h6>IIS FOUNDERSCARD A CREDIT CARD?</h6>
                <p className="faq-details">
                  <span>
                    FoundersCard is a Membership community, not a credit card.
                    Your Membership provides you access to a portfolio of over
                    500 benefits that can be accessed through our website.
                  </span>
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-12 col-12">
              <div className="question-div">
                <h6>HOW DOES REDEEMING BENEFITS WORK?</h6>
                <p className="faq-details">
                  <span>
                    Each benefit that we offer our Members has a dedicated
                    landing page on the FoundersCard site, with simple
                    instructions of how to take advantage of that particular
                    offer. Benefits are not automatically applied to your
                    account, so you need to redeem the benefit to take advantage
                    of the offer.
                  </span>
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-12 col-12">
              <div className="question-div">
                <h6>IS MEMBERSHIP AVAILABLE INTERNATIONALLY?</h6>
                <p className="faq-details">
                  <span>
                    FoundersCard Membership is available globally. There may be
                    some restrictions with brands that will be listed on the
                    individual benefit pages, but we do our best to select
                    benefits that all Members can enjoy.
                  </span>
                </p>
              </div>
              <div className="question-div">
                <h6>WHY CAN'T I SEE THE FULL LIST OF BENEFITS?</h6>
                <p className="faq-details">
                  <span>
                    Due to the exclusive benefits we have negotiated with our
                    benefit partners, we can only show the detailed list of over
                    500 benefits to those that are invited to the community.
                    Once you complete the inquiry form above, you will receive
                    access to view the complete list of Member benefits.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal></EnquiryModal>
      {/* modal show after some time delay */}
      <FooterNew></FooterNew>
    </>
  );
};

export default Enquiry;