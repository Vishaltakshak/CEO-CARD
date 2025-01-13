import React from "react";
import InsideHomeVideo from "./InsideHomeVideo";
import MemberBenefits from "./MemberBenefits";
import FeaturedComunityBenefits from "./FeaturedComunityBenefits";
import HotelCollection from "./HotelCollection";
import PopularBenefits from "./PopularBenefits";
import ScrollTotop from "./ScrollTotop";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import HomeTravel from "./HomeTravel";
import HomeLifestyle from "./HomeLifestyle";

const HomeAfterLogin = () => {
  return (
    <AfterLoginLayout>
      <InsideHomeVideo></InsideHomeVideo>
      {/* <MemberBenefits></MemberBenefits> */}
      <HomeTravel/>
      <HomeLifestyle/>
      {/* <FeaturedComunityBenefits></FeaturedComunityBenefits> */}
      <HotelCollection></HotelCollection>
      <PopularBenefits></PopularBenefits>
      <ScrollTotop></ScrollTotop>
    </AfterLoginLayout>
  );
};

export default HomeAfterLogin;
