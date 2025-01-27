import React from "react";
import { Link } from "react-router-dom";
//import BgVideo from '././assets/img/vid-bg.mp4';
import "../css/home.css";
import { useAuth } from "./AuthContext";

const HomeVideo = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn)

  return (
    <>
      <div className=  {`video-overlay1 `}  >
        {/* <img className="video-overlay1-img" src="./././././assets/img/landing-hero.jpg" alt="heroimg"></img> */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/assets/img/Home/homeVideo.mp4`}
		
          autoPlay
          loop
          muted
          playsInline
        >
          
        </video>
		


        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className= {`video-details1 text-center ${isLoggedIn ? "mt-[250px] transition-all" : ""}`}>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h1 className="homevideo-title1">
			          Welcome to CEOCard  
            </h1>
            <br></br>
            <h1 className="text-white" style={{fontSize:"18px"}}>Empowering India's Startup Leaders</h1>
            <p className="homevideo-subtitle1 p-4 sm:p-0">
              {" "}
			  At CEOCard, we understand the challenges and opportunities of leading a startup. Tailored specifically for entrepreneurs and CEOs of Indian startups, our platform offers exclusive benefits, strategic resources to help you scale your business and achieve your goals. 
            </p>
            <button className="btn custombutton-white">
              <Link to="/enquiry">PREVIEW MEMBERSHIP</Link>
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
