import React from "react";
import BeforLoginHeader from "../Common/BeforeLoginHeader";
import HomeVideo from "./HomeVideo";
import ScrollToDivArrow from "./ScrollToDivArrow";
import AboutCeoCard from "./AboutCeoCard";
import MembershipVipTravel from "./MembershipVipTravel";
import MembershipHotelProgram from "./MembershipHotelProgram";
import MembershipBusinessSolution from "./MembershipBusinessSolution";
import MembershipLifestyle from "./MembershipLifestyle";
import About from "./About";
import Signature from "./SignatureEvents";
import TestimonialMembers from "./testimonialMembers";
import Faq from "./Faq";
import FooterNew from "../Common/FooterNew";
import "../css/home.css";
import HomeAfterLogin from "./HomeAfterLogin";

const Home = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn')
  
  if(isLoggedIn) {
    return <HomeAfterLogin />;
  }

  return (
    <div className="bg-black">
    <>
      <BeforLoginHeader></BeforLoginHeader>
      <HomeVideo></HomeVideo>
      <ScrollToDivArrow></ScrollToDivArrow>
      <AboutCeoCard></AboutCeoCard>
      <div className="container-fluid membership-block-parent">
        <MembershipVipTravel></MembershipVipTravel>
        <MembershipHotelProgram></MembershipHotelProgram>
        <MembershipBusinessSolution></MembershipBusinessSolution>
        {/* <MembershipLifestyle></MembershipLifestyle> */}
      </div>
      <About></About>
      {/* <Signature></Signature> */}
      <TestimonialMembers></TestimonialMembers>
      <Faq></Faq>
      <FooterNew></FooterNew>
    </>
    </div>
  );
};

export default Home;
