import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BrowseByCategorySidebar from "./BrowseByCategorySidebar";
import BrowseByCategoryResult from "./BrowseByCategoryResult";
import '../css/browsebycategoryresultdetails.css';


const BrowseByCategoryDetails = () => {

	//use state for toggline sidebar, need to share state between sidebar and result component thats why state add here
	const [isViewsidebar, setViewsidebar] = useState("true");
	const handleViewdetails = () => {
		setViewsidebar(!isViewsidebar);  
	};
	
	//state for filter by brand in mobile
	const [isfilterbrand, setFilterbrand] = useState("false");
	const handleFilterbrand = () => {
		setFilterbrand(!isfilterbrand);  
	};

	return (
		
		<>
			<div className="container-fluid pe-0 ps-0 browse-category-result">
				{/* filters only visible for mobile  */}
				<div className="d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block d-block">
					<div className="col-xl-12">
						<div className="filter-select-box">
							<div className="row">
								<div className="col-xl-12 select-box-ui">
									<select class="select-category-option-mobile">
										<option value="">All Travel Benefits</option>
										<option value="" selected="">Travel &gt; Airport Lounges</option>
										<option value="">Travel &gt; By Our Members</option>
										<option value="">Travel &gt; Ground transportation</option>
										<option value="">Travel &gt; Hotel Rewards</option>
										<option value="">Travel &gt; Loyalty Program Status Upgrades</option>
										<option value="">Travel &gt; Premium Airlines</option>
										<option value="">Travel &gt; Premium Services</option>
									</select>
									<span className="select-box-icon">
										<img alt="arrow" src="././assets/img/Submenu/select-arrow.svg"></img>
									</span>
										
								</div>
							</div>

							<div className="row">
								<div className="col-xl-12 select-box-ui">
									<select class="select-category-option-mobile">
										<option value="">Sort By: Popularity</option>
										<option value="" selected="">Sort By: Newest</option>
									</select>
									<span className="select-box-icon">
										<img alt="arrow" src="././assets/img/Submenu/select-arrow.svg"></img>
									</span>
								</div>
							</div>
							

							<div className="row">
								<div onClick={handleFilterbrand} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 select-box-ui">
									<div className="select-category-option-mobile">
										Filter By Brand
									</div>
									<span className="select-box-icon">
										<img alt="arrow" src="././assets/img/Submenu/select-arrow.svg"></img>
									</span>
								</div>
								{/* block open on filter by brands option in mobile */}
								<div className={isfilterbrand ? "filter-by-brands-mobile" : "filter-by-brands-mobile showbrand-box"}   >
										<Link onClick={handleFilterbrand}  id="filter-close-mobile" class="filter-close" >
											<img alt="close" src="././assets/img/Submenu/mobile-close-filter-img.svg"></img>
										</Link>
										
										<br></br>
										<br></br>

										{/* repeatative block */}
										<div className="brands-block-mb">
											<h3 className="brand-name-mobile">Brands 1</h3>

											<div class="benefit-brand-div-mobile active">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile">Caesars Rewards®</span>
											</div>

											<div class="benefit-brand-div-mobile ">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile">Hilton Honors™</span>
											</div>

											<div class="benefit-brand-div-mobile ">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile"> IHG One Rewards</span>
											</div>

											<div class="benefit-brand-div-mobile ">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile">Caesars Rewards®</span>
											</div>
										</div>
										{/* repeatative block */}

										{/* repeatative block */}
										<div className="brands-block-mb">
											<h3 className="brand-name-mobile" >Brands 2</h3>

											<div class="benefit-brand-div-mobile active">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile">Caesars Rewards®</span>
											</div>

											<div class="benefit-brand-div-mobile ">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile">Hilton Honors™</span>
											</div>

											<div class="benefit-brand-div-mobile ">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile"> IHG One Rewards</span>
											</div>

											<div class="benefit-brand-div-mobile ">
												<span class="filter-checkbox-mobile"></span>
												<span class="filter-text-mobile">Caesars Rewards®</span>
											</div>
										</div>
										{/* repeatative block */}


										<div>
											<Link  class="btn filter-apply-mobile">Apply Filter</Link>
										</div>
								</div>
								{/* block open on filter by brands option in mobile */}

								
								<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 select-box-ui">
									<Link to="/BrowseByCategory" target="_self">
										<div className="select-category-option-mobile">
											Reset Filters
										</div>
										<span className="select-box-icon">
											X
										</span>
									</Link>
								</div>
							</div>
						</div>
						
						
					</div>
				</div>
				
				{/* filters only visible for mobile  */}


				<div className="col-xl-12">
					<div className="d-flex">
						<BrowseByCategorySidebar sharedState={isViewsidebar} setSharedState={setViewsidebar} handlesharedState={handleViewdetails}></BrowseByCategorySidebar>
						<BrowseByCategoryResult sharedState={isViewsidebar} setSharedState={setViewsidebar} handlesharedState={handleViewdetails} ></BrowseByCategoryResult>
					</div>
				</div>
			</div>
		</>
	);
};

export default BrowseByCategoryDetails;
