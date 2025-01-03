import React from "react";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import HotelSearchByBrands from "./HotelSearchByBrands";
import ScrollTotop from "./ScrollTotop";
import '../css/browsehotelsbybrand.css';
const BrowseHotelsByBrands = () => {
	
	return (
		
		<>
		<AfterLoginLayout>
			<div className="container-fluid hotel-brand-container">
				<div className="row hotel-brand-container-row">
					<img className="brand-hero-image" src="././assets/img/hotelBrands/brands-top-banner.jpg"/>
					<div class="brand-banner-text" >
						<div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto">
							<br></br>
							<img class="banner-brand-logo" src="././assets/img/hotelBrands/brand-logo-1.png"/>

							<span class="banner-search-container">
								<img class="search-icon-brand" src="././assets/img/hotelBrands/brand-search-white-icon.svg" />
								<span className="brand-span" >
									<input type="text" placeholder="Further refine results by location" class="form-control hotel-search-input"/>
								</span>
							</span>
						</div>
						</div>
				</div>
			</div>
			<div className="container-fluid hotel-search-brand-container">
				<div className="container pe-0 ps-0">
					{/* for desktop */}
					<div className="hotel-results-count-container d-xl-block d-lg-block d-md-none d-sm-none d-none">
						6 <span>W Hotels</span> hotels
						<span> in the FC Hotel Program</span>
					</div>

					{/* for mobile */}
					<div className="hotel-results-count-container d-xl-none d-lg-none d-md-block d-sm-block d-block">
						6  hotels
					</div>
					<br></br>
					{/* repeate block */}
					<div>
						<div class="col-xl-12 col-12">
							<h1 className="brand-search-title">North America</h1>
						</div>
						<div className="row">
							<HotelSearchByBrands></HotelSearchByBrands>
							<HotelSearchByBrands></HotelSearchByBrands>
							<HotelSearchByBrands></HotelSearchByBrands>
						</div>
					</div>
					{/* repeate block */}

					{/* repeate block */}
					<div>
						<div class="col-xl-12 col-12">
							<h1 className="brand-search-title">South America</h1>
						</div>
						<div className="row">
							<HotelSearchByBrands></HotelSearchByBrands>
							<HotelSearchByBrands></HotelSearchByBrands>
							<HotelSearchByBrands></HotelSearchByBrands>
						</div>
					</div>
					{/* repeate block */}
				</div>
			</div>
		<ScrollTotop></ScrollTotop>
		</AfterLoginLayout>
			
		</>
	);
};

export default BrowseHotelsByBrands;
