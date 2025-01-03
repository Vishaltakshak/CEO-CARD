import React from "react";
import { Link } from "react-router-dom";
// import "../css/home.css";

const AboutCeoCard = () => {
  return (
    <>
      <div className="bg-white relative overflow-hidden py-[3rem]">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[2] filter grayscale">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/Home/clouds.jpg`}
            alt="Clouds"
            className="opacity-50 w-full h-full object-cover"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
        <div className="flex flex-col items-center justify-center py-20 gap-4 z-[10] relative">
          <h1 className="font-bold text-[3rem] xs:pl-4 text-black">What is CEO Card</h1>
          <p className="text-[1.2rem] text-black text-center font-medium w-[60%]">
            Established in 2020, CEO Card provides premium membership benefits
            for elite entrepreneurs and business leaders. <br />
            <br /> Our mission is to elevate your business travel experiences
            with a range of benefits covering flights, luxury hotels, and
            essential business services.Whether you need a flight from New York
            or a reservation at a 5-star hotel, we've got you covered.
          </p>
          <a
            href="#one"
            className="bg-[#A1A9BC] text-white mx-auto px-20 py-3 rounded-full font-semibold text-[20px]"
          >
            <button>See More</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCeoCard;