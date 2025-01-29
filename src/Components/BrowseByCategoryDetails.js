import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
						
				<BrowseByCategoryResult sharedState={isViewsidebar} setSharedState={setViewsidebar} handlesharedState={handleViewdetails} ></BrowseByCategoryResult>
				
			</div>
		</>
	);
};

export default BrowseByCategoryDetails;
