import React from "react";
//import { Link } from "react-router-dom";
import { useState } from "react";
import SearchSingleSuggestion from "./SearchSingleSuggestion";
import '../css/searchsuggestionlist.css';


const SearchSuggestionList = () => {

	
	//use state for hide and show map
	const [isViewmap, setViewmap] = useState("false");

	const handleViewmap = () => {
		setViewmap(!isViewmap); 
	};

	return (
		<>
			<div className="container-fluid suggestion-list">
				<div className="container pe-0 ps-0">
					<div className="row suggestion-list-mb">
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-6 col-6 para-align-left">
							<p className="search-count">8 result &nbsp;
								<span className="">for <span style={{textTransform:"capitalize"}}> "austing"</span></span></p>
						</div>
						<div  className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 btn-align-right">
							<button onClick={handleViewmap} className="btn btn-view-map">
								{isViewmap ? 'View with Map' : 'Hide Map'}
								<i class="bi bi-chevron-right"></i></button>
						</div>
					</div>
					<div className={isViewmap ? "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 location-map d-none" : "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 location-map d-block pe-0 ps-0"}>
						<div className="location-map-height">
							<a  href="https://maps.google.com?q=60+Tucker%27s+Point+Dr.+Hamilton+Parish+HS02+Bermuda">
								<img style={{width:"100%"}} alt="map" src="https://maps.googleapis.com/maps/api/staticmap?center=60+Tucker%2527s+Point+Dr.+Hamilton+Parish+HS02+Bermuda&amp;zoom=15&amp;size=640x180&amp;scale=2&amp;markers=size:mid%7C60+Tucker%2527s+Point+Dr.+Hamilton+Parish+HS02+Bermuda&amp;sensor=false&amp;key=AIzaSyBX6a6cBRBm2xqSNHd9GBDI7ylSH7ZGpOg&amp;signature=qszTFSgYjUPX-YKQtBzKsWEhfU8="></img>
							</a>
						</div>
					</div>
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className={isViewmap ? "row" : "row mapopen"}>
							<SearchSingleSuggestion></SearchSingleSuggestion>
							<SearchSingleSuggestion></SearchSingleSuggestion>
							<SearchSingleSuggestion></SearchSingleSuggestion>
							<SearchSingleSuggestion></SearchSingleSuggestion>
							<SearchSingleSuggestion></SearchSingleSuggestion>
							<SearchSingleSuggestion></SearchSingleSuggestion>
						</div>
					</div>
				</div>
			</div>
		</>
		
	);
};

export default SearchSuggestionList;
