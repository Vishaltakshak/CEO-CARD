// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import SubmenuPageHeading from "./SubmenuPageHeading";
// import '../css/shareexperience.css';


// const ShareExperience = ({service}) => {
// 	//use state for handle view more experience
// 	const [isActive, setActive] = useState("false");
// 	const handleViewmoreClick = () => {
// 		setActive(!isActive);  
// 	};

// 	//use state for handle add experience form
// 	const [isCheck, setCheck] = useState("false");
// 	const handleCheckboxChecked = () => {
// 		setCheck(!isCheck);  
// 	};
// 	return (
// 		<>
// 			<div className="container-fluid submenu-container share-exp-box">
// 				<div className="container pe-0 ps-0">
// 					{/* view commente box */}
// 					<div className="row">
// 						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
// 							<h1> {service.VendorName}</h1>
// 							{/* <SubmenuPageHeading  submenupagetopic="Share your experience and total savings with fellow Members..." submenupagesubtopic="" ></SubmenuPageHeading> */}
// 							<br></br>
// 							<div className={isActive ? "col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  comment-box-parent " : "col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box-parent comment-box-parent-height"}>
								
// 								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box ">
// 									<div className="comment-img-box">
// 										<Link  className="comment-image-link" to='/#' target="_blank">
// 												<img className="comment-img" alt="Comment" src="././assets/img/Submenu/full_width_EY.jpg"></img>
// 										</Link>
// 									</div>
									
// 								</div>
								
							
// 								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box ">
									
// 									<div className="comment-text-box">
// 										<h3 className="comment-text-box-h3">The Etihad Apartments is absolutely incredible.</h3>
// 										<h5 className="comment-text-box-h5">
// 											<Link to='/#' target="_blank" class="link-no-underline">
// 												Bethany W.
// 											</Link> , 
// 											Founder and CEO @ BougieMiles.com
// 										</h5>
// 									</div>
// 								</div>
								
								
								
								
								

// 							</div>
							
// 						</div>
// 					</div>
				
// 				<div className="row">
// 					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 add-comment-box">
// 						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12  mx-auto ">
// 							<h3 className="add-comment-box-title">
//               					Share your experience with fellow Members.  Each insight is worth 100 FCPoints. 
// 								  <OverlayTrigger placement="top" overlay={(props) => (
// 									<Tooltip {...props}>
// 										Receive 100 FCPoints for each insight, up to 5 insights every 90 days.
// 									</Tooltip>)}>
// 									<i class="bi bi-info-circle-fill"></i>
// 								</OverlayTrigger>
// 							</h3>
							
							
// 						</div>
// 					</div>
// 				</div>

// 				{/* add commente box */}
// 				</div>
// 			</div>
			
// 		</>
		
// 	);
// };

// export default ShareExperience;
import React from 'react';
import { Clock, MapPin, Phone, Mail, FileText } from 'lucide-react';

const VendorDescription = ({ service }) => {
  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 md:p-6 border-b border-gray-700">
            <h1 className="text-xl md:text-2xl font-bold text-black">
              {service.VendorName}
            </h1>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 space-y-6">
            {/* Description */}
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 mt-1 text-gray-800 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-black">Description</h3>
                <p className="text-black mt-1 break-words">
                  {service.VendorDescription}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-black flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-black">Address</h3>
                <p className="text-black mt-1 break-words">
                  {service.VendorAddress}
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-1 text-black flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-black">Operating Hours</h3>
                <p className="text-black mt-1">
                  {service.VendorOpenHours}
                </p>
              </div>
            </div>

            {/* Pricing Information */}
            {service.VendorPricingInfo && (
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 mt-1 text-black flex-shrink-0 font-semibold">₹</span>
                <div>
                  <h3 className="font-semibold text-black">Pricing Information</h3>
                  <p className="text-black mt-1">
                    Currency: {service.VendorPricingInfo.Currency}
					<br/>
					Minimum-Amount:  {service.VendorPricingInfo.PriceRange.Min}
					<br/>
					Maximum-Amount:  {service.VendorPricingInfo.PriceRange.Max}
                  </p>
                </div>
              </div>
            )}

            {/* Contact Details Section */}
            <div className="pt-4 border-t">
              <h2 className="text-lg font-semibold text-black mb-4">Contact Information</h2>
              
              {/* Contact Number */}
              <div className="flex items-start gap-3 mb-4">
                <Phone className="w-5 h-5 mt-1 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-black mt-1">
                    {service.ContactNumber}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-black mt-1 break-words">
                    {service.ContactMail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDescription;