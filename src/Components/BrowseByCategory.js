import React from "react";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
//import AfterLoginHeader from "../Common/AfterLoginHeader";
import BrowseByCategoryTopBanner from "./BrowseByCategoryTopBanner";
import BrowseByCategoryDetails from "./BrowseByCategoryDetails";
import ScrollTotop from "./ScrollTotop";
import PopularBenefitsList from "./PopularBenefitsList";
//import AfterLoginFooter from "../Common/AfterLoginFooter";

const BrowseByCategory = () => {
	return (
		
		<>
			<AfterLoginLayout>
			{/* <AfterLoginHeader></AfterLoginHeader> */}
			<BrowseByCategoryTopBanner></BrowseByCategoryTopBanner>
			<BrowseByCategoryDetails></BrowseByCategoryDetails>
			<ScrollTotop></ScrollTotop>
			{/* <AfterLoginFooter></AfterLoginFooter> */}
			{/* <PopularBenefitsList/> */}
			</AfterLoginLayout>
		</>
	);
};

export default BrowseByCategory;
