import React from "react";
import { Link } from "react-router-dom";
import "../css/browsebycategorytopbanner.css";
import "../css/memberbenefits.css";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import BusinessResults from "./BusinessResults";
import ScrollTotop from "./ScrollTotop";

const BusinessPage = () => {
  return (
    <AfterLoginLayout>
      <div className="container-fluid browse-category-item">
        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-12 browse-category-item-right">
            <div className="browse-category-video ">
              <Link to="/#" target="_blank">
                <div className="relative width-height-sett flex justify-center items-center">
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-25"></div>

                  {/* Business Image */}
                  <img
                    className="browse-category-video-height w-full h-[300px] object-cover"
                    src={`${process.env.PUBLIC_URL}/assets/img/Home/business.jpg`}
                    alt="business"
                  />

                  {/* Centered Text */}
                  <div className="absolute flex flex-col items-center justify-center text-center text-white">
                    <h1 className="browse-category-title text-[1.5rem] font-bold">BUSINESS BENEFITS</h1>
                    <p className="text-md font-medium">Exclusive perks for unforgettable journeys</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BusinessResults />

      <ScrollTotop />
    </AfterLoginLayout>
  );
};

export default BusinessPage;
