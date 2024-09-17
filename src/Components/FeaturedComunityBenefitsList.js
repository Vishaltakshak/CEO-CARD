import React from "react";
import '../css/memberbenefits.css';
import '../css/featuredcomunitybenefits.css'
const FeaturedComunityBenefitsList = () => {
	return (
		<>
			<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-2 member-benefit-block">
				<div class="benefit-member-info-container">
					<img alt="avatar" class="benefit-member-avatar" src="././assets/img/comunity-avatar.jpeg"></img>
					<span class="benefit-member-info">
						<h6>Created By William B</h6>
						<p>President @ Blanc Creatives, LLC</p>
						<p>Member since 2021</p>
					</span>
				</div>
				<a href="/#">
					<div className="benefit-image-wrapper">
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

export default FeaturedComunityBenefitsList;
