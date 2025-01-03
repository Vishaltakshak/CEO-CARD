import React from "react";
import '../css/searchlocation.css';


const SearchLocationTopbanner = () => {

	return (
		<>
			<div className="container-fluid search-listing-page">
				<div className="row  search-box-strip search-box-strip-bg">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h1 className="location-search-heading">Where are you headed?</h1>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto search-icon-box">
						{/* <img alt="Search" className="search-icon" style={{marginTop:"10px"}} src="././assets/img/Submenu/search-icon.svg">
						</img>
						<div className="form-group  input-container" style={{position:"relative"}}>
							<input type="text" placeholder="Enter a city or destination" className="form-control search-input"  name="location" />
							<img className="search-icon-clear " src="././assets/img/Submenu/close-icon.svg
							" alt="Close"></img>

						</div> */}

						<form>
							
							<div style={{position:"relative"}}>
								<img alt="Search" className="search-icon" style={{marginTop:"10px"}} src="././assets/img/Submenu/search-icon.svg">
								</img>
								<input type="text" name="focus" required class="search-box" placeholder="Enter a city or destination" />
								<button class="close-icon" type="reset"></button>
							</div>
							
						</form>
						
					</div>
				</div>
			</div>
		</>
		
	);
};

export default SearchLocationTopbanner;
