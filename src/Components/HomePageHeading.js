import React from "react";
import { Link } from "react-router-dom";
import '../css/homepageheading.css';


const HomePageHeading = ({pagetopic, pagetopiclink}) => {
	return (
		<>
			<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
				<h1 className="home-heading">{pagetopic}</h1>
				<Link className="home-heading-anchor" to='/homeafterlogin'>{pagetopiclink}</Link>
			</div>
			
		</>
		
	);
};

export default HomePageHeading;
