import React from "react";
import InsideHomeVideo from "./InsideHomeVideo";
import HotelCollection from "./HotelCollection";
import ScrollTotop from "./ScrollTotop";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import HomeTravel from "./HomeTravel";
import HomeLifestyle from "./HomeLifestyle";
import AllBenifitsHome from "./AllBenifitsHome";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const     HomeAfterLogin = () => {

  return (
    <AfterLoginLayout>
      <InsideHomeVideo></InsideHomeVideo>
     
      <HomeTravel/>
      <HomeLifestyle/>
     
      <HotelCollection></HotelCollection>
      <AllBenifitsHome/>
      <ScrollTotop></ScrollTotop>
    </AfterLoginLayout>
  );
};

export default HomeAfterLogin;
