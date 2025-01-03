import React from "react";
import { Link } from "react-router-dom";
import '../css/homevideo.css';

const BgVideo = '././assets/img/afterloginhero.mp4';


const InsideHomeVideo = () => {

	return (
		<>
			<div className="homepage-hero-container">
		
				<div id="back-to-top" className="video-overlay">
				</div>
				<video autoPlay loop muted className="bg-vid"> 
					<source src={BgVideo} type="video/mp4" /> 
				</video>
				
				
				<div className="video-details video-details-pt text-center">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h3 className="homevideo-toptitle">- SAVE $400 ON YOUR FIRST YEAR -</h3>
						<h1 className="homevideo-title">UPGRADE TO ALL ACCESS ELITE
						<br></br>FOR ONLY $595 </h1>
						<p className="homevideo-subtitle">Join a select group of Members and receive high-level elite status with major travel brands, over $25,000 in credits, and more.</p>
						<button className="btn custombutton-transparent">
							<Link to='/homeafterlogin' target='_blank'>EXPLORE ELITE</Link>
						</button>
						
					</div>
				</div>
			</div>
		</>
		
	);
};

export default InsideHomeVideo;
