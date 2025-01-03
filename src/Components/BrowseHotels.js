import React from "react";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import BrowseHotelsTopBanner from "./BrowseHotelsTopBanner";
import BrowseHotelsFavourites from "./BrowseHotelsFavourites";
import BrowseHotelsPartners from "./BrowseHotelsPartners";
import BrowseHotelsProgram from "./BrowseHotelsProgram";
import ScrollTotop from "./ScrollTotop";

const BrowseHotels = () => {
	return (
		
		<>
			<AfterLoginLayout>
			<BrowseHotelsTopBanner></BrowseHotelsTopBanner>
			<BrowseHotelsFavourites></BrowseHotelsFavourites>
			<BrowseHotelsPartners></BrowseHotelsPartners>
			<BrowseHotelsProgram></BrowseHotelsProgram>
			<ScrollTotop></ScrollTotop>
			</AfterLoginLayout>
		</>
	);
};

export default BrowseHotels;
