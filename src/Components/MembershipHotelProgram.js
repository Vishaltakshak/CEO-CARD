import React from "react";
import MembershipImage from "./MembershipImage";
import HomeButton from "./HomeButton";
//import MembershipDetails from "./MembershipDetails";
import '../css/home.css';

const Image = '././assets/img/swimming-pool.png';
const MembershipHotelProgram = () => {
	return (
		<>
			<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 membership-block">
				<div className="row align-items-center justify-content-center bg-D9D9D9 border-radius">
					<MembershipImage membershipimg={Image}></MembershipImage>
					<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 membership-detail-child order-xxl-2 order-lg-2 order-md-2  order-sm-2 order-1">
						<h1 className="membership-title">The <span className="fw-bold">CEO</span> Hotel Program</h1>
						<ul className="membership-list">
							<li>Complimentary suite upgrades</li>
							<li>Priority check-in</li>
							<li>Tailored hotel experiences and offers</li>
							<li>Dedicated hospitality liaison</li>
							<li>Curated network of premium hotels</li>
						</ul>
						<p className="membership-para"><strong>Partners include:</strong> Park Hyatt, W Hotels, Rosewood, The Peninsula, Oberoi Hotels and more...</p>
						<HomeButton buttontext={"preview membership"}></HomeButton>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default MembershipHotelProgram;
