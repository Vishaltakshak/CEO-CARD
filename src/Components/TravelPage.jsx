import React, { useState, useEffect } from "react";

import BrowseByCategoryTopBanner from "./BrowseByCategoryTopBanner";
import BrowseByCategoryDetails from "./BrowseByCategoryDetails";
import ScrollTotop from "./ScrollTotop";
import { Link } from "react-router-dom";
import "../css/browsebycategorytopbanner.css";
import '../css/memberbenefits.css';
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import TravelResults from "./BrowseByTravel";
const TravelPage = () => {
   
    return (
        <>
        <AfterLoginLayout>
		
                <div className="container-fluid browse-category-item">
                    <div className="row">
                      
                        <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-12 browse-category-item-right">
                        
                            <div className="browse-category-video">
                                    <Link to="/#" target="_blank">
                                      <div class="width-height-sett">
                                      <div className="absolute top-15 left-0 w-full h-[15%] md:h-[40%] bg-black opacity-55"></div>
                                        <video
                                          poster="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/7912/gallery_Screenshot_2023-12-05_at_5.09.53_PM.png?1701814225"
                                          className="browse-category-video-height"
                                          autoplay="autoplay"
                                          loop="loop"
                                          muted="muted"
                                          src="https://d2q86wmri3hsp2.cloudfront.net/system/benefits/standard_videos/000/001/110/original/Porsche_standard.mp4?1690469858"
                                        ></video>

                                            <div className="absolute top-[30%] right-0 left-0 mr-auto ml-auto text-center">
                                          <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-12 flex flex-col justify-center items-center">
                                            <h1 className="browse-category-title text-[1rem]">Featured Travel Benefits</h1>
                                            <p className="font-bold text-white">Exclusive perks for unforgettable journey</p>
                                          </div>
                                          </div>

                                      </div>
                                    </Link>
                                </div>
                        </div>
                    </div>
                       
                </div>
            
                     
            
			
			<TravelResults></TravelResults>
			
            
           
            <ScrollTotop></ScrollTotop>
            </AfterLoginLayout>
        </>
    );
};

export default TravelPage;
