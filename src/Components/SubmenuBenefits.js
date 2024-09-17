import React from "react";
import SubmenuPageHeading from "./SubmenuPageHeading";
import MemberBenefitsList from "./MemberBenefitsList";
import '../css/memberbenefits.css';

import "../css/testimonial.css";
const SubmenuBenefits = () => {
	return (
		<>
			<div className="container-fluid benefits-block-parent" style={{backgroundColor:"#000"}}>
				
				<div className="container pe-0 ps-0">
					<SubmenuPageHeading submenupagetopic="Benefits Similar to Etihad Airways" submenupagesubtopic=""></SubmenuPageHeading>
					{/* <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 member-benefit-block-parent scroll-container"> */}
					<div className="testimonial-container member-benefit-block-parent scroll-container">
						<div className="test-slider">
							<MemberBenefitsList></MemberBenefitsList>
							<MemberBenefitsList></MemberBenefitsList>
							<MemberBenefitsList></MemberBenefitsList>
							<MemberBenefitsList></MemberBenefitsList>
							<MemberBenefitsList></MemberBenefitsList>
							<MemberBenefitsList></MemberBenefitsList>
						</div>
					</div>
				</div>
			</div>
		</>
		
	);
};

export default SubmenuBenefits;
