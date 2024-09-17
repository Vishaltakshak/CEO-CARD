import React from "react";
import { Link } from "react-router-dom";
//import BgVideo from '././assets/img/vid-bg.mp4';
import '../css/home.css';

const HomeVideo = () => {
	return (
		<>
			<div className="video-overlay1">
				<img className="video-overlay1-img" src="./././././assets/img/landing-hero.jpg" alt="heroimg"></img>
				<div className="video-details1 text-center">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<h1 className="homevideo-title1">Exceptional Perks for CEOs, CFOs, Business Owners, and Entrepreneurs</h1>
					<p className="homevideo-subtitle1"> Connect with over 100,000 top-tier business professionals in our elite network. Unlock invaluable resources and relationships that drive business success.
					</p>
					<button className="btn custombutton-white">
						<Link to='/Enquiry' >PREVIEW MEMBERSHIP</Link>
					</button>
					
				</div>
				
	            {/* <div className="hero-grid">

                    <div className="herogrid-img-con herogrid-img-con1 ">
                        <img src="./././././assets/img/lifestyle1.png" alt="Imag" className="w-full h-auto " />
                    </div>
                    <div className="herogrid-img-con herogrid-img-con2 ">
                        <img src="./././././assets/img/hotels3.png" alt="Imag" className="w-full h-auto " />
                    </div>
                    <div className=" herogrid-img-con herogrid-img-con3">
                        <img src="./././././assets/img/luxury6.png" alt="Imag" className="w-full h-auto " />
                    </div>
                
    
                    <div className=" herogrid-img-con herogrid-img-con4 ">
                        <img src="./././././assets/img/lifestyle2.png" alt="Imag" className="w-full h-auto " />
                    </div>
                    <div className="herogrid-img-con herogrid-img-con5">
                        <img src="./././././assets/img/luxury3.png" alt="Imag" className="w-full h-auto " />
                    </div>
                    <div className=" herogrid-img-con herogrid-img-con6">
                        <img src="./././././assets/img/luxury4.png" alt="Ima" className="w-full h-auto " />
                </div>
        </div> */}
				

			</div>
			
			
				{/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 video-details-logo">
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 video-details-logo-child">
							<img className='homelogo-sett logo1-size' src={DivLogo1}  alt='Logo'></img>
							<p>"A Community for Leaders."</p>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 video-details-logo-child">
							<img className='homelogo-sett logo2-size' src={DivLogo2}  alt='Logo'></img>
							<p>"A Community for Leaders."</p>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 video-details-logo-child">
							<img className='homelogo-sett logo3-size' src={DivLogo3}  alt='Logo'></img>
							<p>"A Community for Leaders."</p>
						</div>
					</div>
				</div> */}
				
			</div>
		</>
		
	);
};

export default HomeVideo;
