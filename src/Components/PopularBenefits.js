import React from "react";
import HomePageHeading from "./HomePageHeading";
import PopularBenefitsList from "./PopularBenefitsList";
import '../css/memberbenefits.css';
import "../css/testimonial.css";

const PopularBenefits = () => {
	
	return (
		<>
			<div className="container-fluid benefits-block-parent benefits-block-parent-white overflow-x-auto scrollBar pb-6 bg-white">
				<div className="container pe-0 ps-0">
					{/* <HomePageHeading pagetopic="MOST POPULAR BENEFITS" pagetopiclink="View all benefits"></HomePageHeading> */}
					{/* <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 member-benefit-block-parent "> */}
						<h1 className="text-center text-black ">MOST POPULAR BENEFITS</h1>
					<div className="  flex   ">
						<div className=" flex scroll-inner-div-6-benefits  ">
							<PopularBenefitsList></PopularBenefitsList>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularBenefits;
