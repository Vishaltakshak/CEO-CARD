import React from "react";
import '../css/browsehotel.css';
import '../css/browsehotelsprogram.css';
const BrowseHotelsProgram = () => {
	
	return (
		
		<>
			<div className="container-fluid browse-hotels-container hotels-program-container">
				<div className="container pe-0 ps-0">
					<div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-program-row">
						<div className="row">
							<h3 className="browse-hotels-title">The CEOCard Renowned Hotel Program</h3>
						</div>
						<div className="row">
							<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 hotels-program-child">
								<div className="hotels-program-child-img">
									<img alt="Program" className="reowned-program-img" src="././assets/img/hotel1.png"/>
								</div>
								<div className="hotels-program-child-img-detail">
									<h3>Member-only hotel rates</h3>
									<p>Access a curated collection of hotels and resorts around the world. We negotiate the lowest possible rates, forgo commission, and extend these rates directly to Members. Since there are non-commissionable rates, <strong>we ask for your discretion in referencing these special rates to anyone outside of FoundersCard.</strong></p>
								</div>
								
							</div>

							<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 hotels-program-child">
								<div className="hotels-program-child-img">
									<img alt="Program" className="reowned-program-img" src="././assets/img/hotel2.png"/>
								</div>
								<div className="hotels-program-child-img-detail">
									<h3>Complimentary upgrades</h3>
									<p>Members deserve to have the red carpet treatment while traveling. FC Hotels are often able to provide room upgrades, and other VIP perks and amenities for FC Members. Each FC Hotel page will explain any available perks during your stay.</p>
								</div>
							</div>

							<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 hotels-program-child">
								<div className="hotels-program-child-img">
									<img alt="Program" className="reowned-program-img" src="././assets/img/hotel4.jpg"/>
								</div>
								<div className="hotels-program-child-img-detail">
									<h3>Flexible cancellation</h3>
									<p>We know you're busy and plans can unexpectedly change last minute. FoundersCard rates will often include flexible cancellation privileges to accommodate your busy lifestyle.</p>
								</div>
							</div>

						</div>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default BrowseHotelsProgram;
