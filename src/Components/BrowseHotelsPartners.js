import React from "react";
import { Link } from "react-router-dom";
import '../css/browsehotelspartner.css';
import '../css/browsehotel.css';
const BrowseHotelsPartners = () => {
	
	return (
		
		<>
			<div className="container-fluid browse-hotels-container hotels-partner-container">
				<div className="container pe-0 ps-0">
					<div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-partner-row">
						<div className="row">
							<h3 className="browse-hotels-title">Premier Partners</h3>
						</div>
						<div className="row">
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner1.png "/>
								</Link>
							</div>
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner2.png "/>
								</Link>
							</div>
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner3.png "/>
								</Link>
							</div>
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner4.png "/>
								</Link>
							</div>
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner5.png "/>
								</Link>
							</div>
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner6.png "/>
								</Link>
							</div>
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner7.png "/>
								</Link>
							</div>
							<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 hotels-partner-child">
								<Link to="/browse_hotels_by_brand">
									<img alt="Partener" className="premier-partner-logo" src="././assets/img/partners/partner8.png "/>
								</Link>
							</div>


						</div>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default BrowseHotelsPartners;
