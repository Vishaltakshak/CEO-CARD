import React, { useState } from "react";
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
import { AuthProvider } from "./AuthContext.js";

const Home = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");


  if (isLoggedIn) {
    return <HomeAfterLogin />;
  }
  return (
    <div className="bg-black">
      <>
      <AuthProvider>
        <BeforLoginHeader  />
       <HomeVideo />
        
        <AboutCeoCard />

        <MembershipVipTravel />
     

        <About />
       
        <TestimonialMembers />
        <Faq />
        <FooterNew />
        </AuthProvider>
      </>
    </div>
  );
};

export default Home;