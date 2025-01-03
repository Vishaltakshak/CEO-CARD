import React from "react";
import '../css/scrolltotop.css';


const ScrollTotop = () => {
	return (
		<>
			
			<div  className="container-fluid bottom-to-top text-center d-xxl-block d-lg-block d-md-none d-sm-none d-none" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
				<img alt="" src="https://d2q86wmri3hsp2.cloudfront.net/assets/icons/up-caret-48bb195c9c0bd3863afc77335c894f910cf5b5ae2a23c118f0ae88ac6893b916.svg"></img>
				<h5>RETURN TO TOP</h5>				
			</div>
		</>
		
	);
};

export default ScrollTotop;
