import React from "react";
import '../css/memberbenefits.css';
const MemberBenefitsList = () => {
	return (
		<>
			<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-2 member-benefit-block">
				<a href="/#">
					<div className="benefit-image-wrapper">
						<div className="benefit-label">ENHANCED</div>
						<div className="locked-benefit-label">
							<i className="bi bi-lock-fill" data-original-title="" title=""></i>
						</div>
						<img alt="The Oberoi Udaivilas Udaipur" className="primary-image" src="././assets/img/member-img1.jpg"></img>

						<img alt="The Oberoi Udaivilas Udaipur" src="././assets/img/member-img1-hover.jpg"></img>
					</div>
				</a>
				<div className="benefit-title-container">
					<a href="/#" class="link-no-underline">
						<h5 className="no-translation">The Oberoi Udaivilas Udaipur</h5>
					</a>
				</div>
				<div className="benefit-description-container">
					20% off Rates &amp; Privileges 
				</div>
			</div>
		</>
	);
};

export default MemberBenefitsList;
