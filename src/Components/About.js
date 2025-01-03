import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-[#F8F8F8] from-20% via-[#FEFEFE] via-[50%] to-[#D9D9D9] to-100% p-8 py-[5rem] sm:py-[10rem]"
      >
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center md:items-start w-[90%]">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/Home/CeoCard.png`}
                alt="CEO Card"
                className="rounded-l-full w-full max-w-[300px] md:max-w-[400px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6 md:gap-10">
              <div
                className="redesign-home-sub-title text-[30px] sm:text-[35px] md:text-[45px] font-bold text-left"
              >
                About Us
              </div>
              <p
                className="text-black text-[16px] sm:text-[18px] md:text-[20px] text-left"
              >
                CEO Card is an innovative platform designed to enhance the
                professional journey of today's most influential business
                leaders. We provide tailored resources to support their unique
                needs, recognizing the critical role executives play in driving
                organizational success.
              </p>
              <div className="w-full flex justify-start">
                <Link
                  to="/enquiry"
                  className="bg-black text-white px-4 py-3 rounded-lg font-semibold text-center"
                >
                  Preview Membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
