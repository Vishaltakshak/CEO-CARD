import React from "react";
import HomePageHeading from "./HomePageHeading";
import HotelCollectionSlider from "./HotelCollectionSlider";


const HotelCollection = () => {
	return (
		<>
			<div className="container-fluid benefits-block-parent-white">
				<div className="container-fluid pe-0 ps-0">
					<HomePageHeading pagetopic="2024 FC HOTEL COLLECTION" pagetopiclink=""></HomePageHeading>
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 member-benefit-block-parent">
						<div className="row">
								<HotelCollectionSlider></HotelCollectionSlider>
						</div>
					</div>
				</div>
			</div>
		</>
		
	);
};

export default HotelCollection;
