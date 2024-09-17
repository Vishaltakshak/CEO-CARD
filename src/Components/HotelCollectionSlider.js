import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/hotelcollection.css';

// function SampleNextArrow(props) {
// 	const { className, style, onClick } = props;
// 	return (
// 	  <div
// 		className={className}
// 		style={{ ...style, display: "block", background: "white" }}
// 		onClick={onClick}
// 	  />
// 	);
//   }
  
//   function SamplePrevArrow(props) {
// 	const { className, style, onClick } = props;
// 	return (
// 	  <div
// 		className={className}
// 		style={{ ...style, display: "block", background: "white" }}
// 		onClick={onClick}
// 	  />
// 	);
//   }
const HotelCollectionSlider = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: '20%',
		slidesToShow: 1,
		speed: 500,
		//nextArrow: <SampleNextArrow />,
    	//prevArrow: <SamplePrevArrow />
	  };
	  return (
		<div className="slider-container custom-slick-slider">
			<Slider {...settings}>
				<div>
					<Link to="/#">
						<h3 className="video-title">ROSEWOOD LE GUANAHANI ST. BARTH</h3>
						<video autoPlay loop muted className="slick-custom-item"> 
							<source src="././assets/img/collection1.mp4" type="video/mp4" /> 
						</video>
					</Link>
				</div>
				<div>
					<Link to="/#">
						<h3 className="video-title">ROSEWOOD LE GUANAHANI ST. BARTH</h3>
						<video autoPlay loop muted className="slick-custom-item"> 
							<source src="././assets/img/collection1.mp4" type="video/mp4" /> 
						</video>
					</Link>
				</div>
				<div>
					<Link to="/#">
						<h3 className="video-title">ROSEWOOD LE GUANAHANI ST. BARTH</h3>
						<video autoPlay loop muted className="slick-custom-item"> 
							<source src="././assets/img/collection1.mp4" type="video/mp4" /> 
						</video>
					</Link>
				</div>
				<div>
					<Link to="/#">
						<h3 className="video-title">ROSEWOOD LE GUANAHANI ST. BARTH</h3>
						<video autoPlay loop muted className="slick-custom-item"> 
							<source src="././assets/img/collection1.mp4" type="video/mp4" /> 
						</video>
					</Link>
				</div>
				<div>
					<Link to="/#">
						<h3 className="video-title">ROSEWOOD LE GUANAHANI ST. BARTH</h3>
						<video autoPlay loop muted className="slick-custom-item"> 
							<source src="././assets/img/collection1.mp4" type="video/mp4" /> 
						</video>
					</Link>
				</div>
				<div>
					<Link to="/#">
						<h3 className="video-title">ROSEWOOD LE GUANAHANI ST. BARTH</h3>
						<video autoPlay loop muted className="slick-custom-item"> 
							<source src="././assets/img/collection1.mp4" type="video/mp4" /> 
						</video>
					</Link>
				</div>
			</Slider>
		</div>
	  );
};

export default HotelCollectionSlider;
