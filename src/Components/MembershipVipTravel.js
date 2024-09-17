import React from "react";
import MembershipImage from "./MembershipImage";
import HomeButton from "./HomeButton";
//import MembershipDetails from "./MembershipDetails";
import '../css/home.css';

const Image = '././assets/img/female-tour.png';
const MembershipVipTravel = () => {
	return (
		<>
			<div id="one" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 membership-block">
				<div className="row align-items-center justify-content-center bg-D9D9D9 border-radius">
					{/* <MembershipDetails></MembershipDetails> */}
					<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 membership-detail-child order-xxl-1 order-lg-1 order-md-2 order-sm-2 order-2">
						<h1 className="membership-title">VIP Travel Privileges</h1>
						<p className="membership-para">
							CEO Card partners with leading airlines, loyalty programs, car rental companies and innovative travel brands to provide Members with:
						</p>
						<ul className="membership-list">
							<li>Seamless priority check-in</li>
							<li>Unmatched travel savings</li>
							<li>Global travel adventures</li>
							<li>Complimentary travel membership</li>
							<li>Enhanced travel value</li>
							<li>Premium customer service</li>
							<li>Elite status elevation</li>
						</ul>
						<p className="membership-para"><strong>Partners include:</strong> United Airlines, Virgin Atlantic, Singapore Airlines, Avis and more...</p>
						<HomeButton  buttontext={"preview membership"}></HomeButton>
					</div>
					<MembershipImage membershipimg={Image}></MembershipImage>
				</div>
			</div>
		</>
	);
};

export default MembershipVipTravel;
