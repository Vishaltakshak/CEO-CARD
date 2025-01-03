import React from "react";
//import { Link } from "react-router-dom";
import '../css/hotelsearchbybrands.css';


const HotelSearchByBrands = () => {

	return (
		<>	
			<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 suggestion-block">
				<a href="/SubMenu">
					<div className="suggestion-image-wrapper">
						{/* <div className="suggestion-label">new</div> */}
						{/* <div className="locked-suggestion-label">
							<i className="bi bi-lock-fill" data-original-title="" title=""></i>
						</div> */}
						<img alt="The Oberoi Udaivilas Udaipur" className="suggestion-primary-image" src="././assets/img/member-img1.jpg"></img>

						<img alt="The Oberoi Udaivilas Udaipur" src="././assets/img/member-img1-hover.jpg"></img>
					</div>
				</a>
				<div className="suggestion-top-title-container">
					<h5 className="">Austin</h5>
				</div>
				<div className="suggestion-title-container">
					<a href="/SubMenu" class="suggestion-no-underline">
						<h5 className="">The Oberoi Udaivilas Udaipur</h5>
					</a>
				</div>
				<div className="suggestion-description-container">
					20% off Rates &amp; Privileges 
				</div>
			</div>
		</>
		
	);
};

export default HotelSearchByBrands;
