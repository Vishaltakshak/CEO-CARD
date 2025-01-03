import React, { useState, useEffect } from "react";

import BrowseByCategoryTopBanner from "./BrowseByCategoryTopBanner";
import BrowseByCategoryDetails from "./BrowseByCategoryDetails";
import ScrollTotop from "./ScrollTotop";

import '../css/memberbenefits.css';
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import TravelResults from "./BrowseByTravel";
const TravelPage = () => {
   
    return (
        <>
        <AfterLoginLayout>
			
			<BrowseByCategoryTopBanner></BrowseByCategoryTopBanner>
			<TravelResults></TravelResults>
			
            
           
            <ScrollTotop></ScrollTotop>
            </AfterLoginLayout>
        </>
    );
};

export default TravelPage;
