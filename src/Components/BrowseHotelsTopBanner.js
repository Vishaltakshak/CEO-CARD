import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/browsehotelstopbanner.css';
const BrowseHotelsTopBanner = () => {

	  //state for selectd destination dropdown in mobile
	  const [isselectdestination, setSelectDestination] = useState("false");
	  const handleSelectDestination = () => {
		setSelectDestination(!isselectdestination);
	  };
	return (
		
		<>
			<div className="container-fluid browse-hotels-banner-container">
				<div className="row browse-hotel-row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-banner">
					<div className="absolute top-0 left-0 w-full h-[79vh] bg-black opacity-30 z-10"></div>
						<img
						className="absolute sm:top-4  md:top-0 md:block h-[48vh]  w-[100%] lg:h-[75vh]"
						style={{top:'0.25rem'}}
						src={`${process.env.PUBLIC_URL}/assets/img/Home/tajhotel.jpg`}
						alt="hotel"
						/>
						<div className="absolute top-[30%] right-0 left-0 mr-auto ml-auto text-center z-20">
						<div className="hotels-banner-text">
							<h1 className="hotels-banner-title">2024 FC HOTEL COLLECTION</h1>
							<h2 className="hotels-banner-subtitle">Exclusive Member Rates and Privileges at 500+ Hotels and Resorts</h2>
							<p className="hotels-banner-para">Earn Eligible Loyalty Points while Booking Directly with Privately Negotiated Rates</p>

							{/*select city dropdown for desktop view*/}
							<div className="flex flex-col md:flex-row justify-center">
							<div className="hotel-browse-select-search-box d-xl-block d-lg-block d-md-block d-none mr-4">
								<div class="dropdown search-dropdown">
									<button type="button" class="btn search-btn dropdown-toggle" data-bs-toggle="dropdown" >
										Select a City
											<img alt="Search" className="search-btn-image"  src="././assets/img/partners/drodown-custom-arrow.svg" />
									</button>
									<ul class=" dropdown-menu search-dropdown-list">
										<li className="search-dropdown-list-li">
											<a class="dropdown-item dropdown-item-search-sett" >
												<input style={{width:"100%"}} type="text" name="search here"></input>
												<i className="bi bi-search "></i>
											</a>
										</li>
										<li className="search-dropdown-list-li">
											<a class="dropdown-item" style={{fontWeight:"700"}}>popular destination </a>
										</li>
										<li className="search-dropdown-list-li">
											<a class="dropdown-item" href="/SearchLocation">
												New York
												<span><i className="bi bi-chevron-right"></i></span>
											</a>
										</li>
										<li className="search-dropdown-list-li">
											<a class="dropdown-item" href="/SearchLocation">
												Los Angeles/Beverly Hills
												<span><i className="bi bi-chevron-right"></i></span>
											</a>
										</li>
										<li className="search-dropdown-list-li">
											<a class="dropdown-item" href="/SearchLocation">
											San Francisco
											<span><i className="bi bi-chevron-right"></i></span></a>
										</li>
									</ul>
								</div>
							</div>
							{/*select city dropdown for desktop view*/}

							{/*select city dropdown for mobile view*/}
							<div className="d-xl-none d-lg-none d-md-none d-block">
								<div onClick={handleSelectDestination} className="hotel-browse-select-search-box">
									<div className="dropdown search-dropdown">
										<button  type="button" className="btn search-btn" >
											Select a Destination
												<img alt="Search" className="search-btn-image"  src="././assets/img/partners/drodown-custom-arrow.svg" />
										</button>
									</div>
								</div>

								<div className={isselectdestination ? "city-search-mobile" : "city-search-mobile show-mob-destination-box"
								  }>
									<Link onClick={handleSelectDestination} className="city-search-mobile-close">
										<img alt="Close" src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/close-icon-867dfeec1ac7eabe7254f958e290d6beb11e16cae2fceaba3e1c6c073542c5eb.svg"/>
									</Link>
									<br></br>
									{/* repeate city block */}
									<div className="city-list-search-mobile">
											<div class="region-text">
											Popular Destinations
											</div>

											<div class="locale-select">
												New York
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Los Angeles/Beverly Hills
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												San Francisco
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Miami/South Beach
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Las Vegas
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												London
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
									</div>
									<div className="city-list-search-mobile">
											<div class="region-text">
											Popular Destinations
											</div>

											<div class="locale-select">
												New York
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Los Angeles/Beverly Hills
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												San Francisco
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Miami/South Beach
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Las Vegas
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												London
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
									</div>
									<div className="city-list-search-mobile">
											<div class="region-text">
											Popular Destinations
											</div>

											<div class="locale-select">
												New York
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Los Angeles/Beverly Hills
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												San Francisco
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Miami/South Beach
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												Las Vegas
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
											<div class="locale-select">
												London
												<span><i class="bi bi-chevron-right"></i></span>
											</div>
									</div>
									{/* repeate city block */}
								</div>
							</div>
							
							{/* select city dropdown for mobile */}


							<div className="hotel-browse-search-box">
								<span style={{position:"relative"}}>
									<img alt="Search" className="search-image"  src="././assets/img/partners/custom-search-icon.svg" />
									<input className="search-hotel-textbox" type="text" placeholder="Search All Hotels"  />
								</span>
							</div>
						</div>
						</div>

						<div className="hotels-banner-overlay hidden md:block">
							Featured FC Hotel Property: <Link to="/#">Maroma, A Belmond Hotel Riviera Maya</Link>
						</div>
					</div>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default BrowseHotelsTopBanner;
