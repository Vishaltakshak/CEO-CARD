import React from "react";
import '../css/home.css';


const ScrollToDivArrow = () => {
	return (
		<>
			<div className="home-arrow-div">
				<a href="#one" >
					<div className="bounce-arrow-down">
						<i className="bi bi-chevron-down " aria-hidden="true"></i>
					</div>
				</a>
			</div>
		</>
		
	);
};

export default ScrollToDivArrow;
