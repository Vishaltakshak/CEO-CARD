import React from "react";
import BeforLoginHeader from "../Common/BeforeLoginHeader";
import HomeVideo from "./HomeVideo.js";
import ScrollToDivArrow from "./ScrollToDivArrow";
import AboutCeoCard from "./AboutCeoCard";
import MembershipVipTravel from "./MembershipVipTravel";
import About from "./About";
import TestimonialMembers from "./testimonialMembers";
import Faq from "./Faq";
import FooterNew from "../Common/FooterNew";
import "../css/home.css";
import HomeAfterLogin from "./HomeAfterLogin";

const Home = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    return <HomeAfterLogin />;
  }

  return (
    <div className="bg-black">
      <>
        <BeforLoginHeader />
       <HomeVideo/>
        {/* <ScrollToDivArrow /> */}
        <AboutCeoCard />

        <MembershipVipTravel />
        {/* <MembershipHotelProgram /> */}
        {/* <MembershipBusinessSolution /> */}
        {/* <MembershipLifestyle></MembershipLifestyle> */}

        <About />
        {/* <Signature></Signature> */}
        <TestimonialMembers />
        <Faq />
        <FooterNew />
      </>
    </div>
  );
};

export default Home;