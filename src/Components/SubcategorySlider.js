import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/subcategoryslider.css';


const SubcategorySlider = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding:0,
		slidesToShow: 3,
		speed: 500,

		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false
			  }
			},
			{
				breakpoint: 767,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  initialSlide: 1
				}
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  };
	return (
		<>
			{/* <div className="container-fluid submenu-container subcategpory-slider pe-0 ps-0">
				<div className="col-xl-12">
					<Slider {...settings}>
						<div>
							<img alt="Submenu" src="././assets/img/submenu/slider-img1.jpg"></img>
						</div>
						<div>
							<img alt="Submenu" src="././assets/img/submenu/slider-img2.jpg"></img>
						</div>
						<div>
							<img alt="Submenu" src="././assets/img/submenu/slider-img3.png"></img>
						</div>
						<div>
							<img alt="Submenu" src="././assets/img/submenu/slider-img1.jpg"></img>
						</div>
						<div>
							<img alt="Submenu" src="././assets/img/submenu/slider-img2.jpg"></img>
						</div>
					</Slider>
				</div>
			</div> */}
		</>
		
	);
};

export default SubcategorySlider;
