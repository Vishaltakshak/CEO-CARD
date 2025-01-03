import React from "react";
import "../../css/pages/enquiry.css";
const EnquiryModal = () => {


	
  return (
    <>
		{/* <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
		Launch static backdrop modal
		</button> */}
		

		{/* modal show after some time delay */}
			<div className="modal fade enquiry-modal">
				<div className="modal-dialog modal-dialog-scrollable modal-xl">
					<div className="modal-content" >
					<div className="modal-body modal-bg-image" >
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
							<img alt="Button" src="../assets/img/Enquiry/enquiry-close-button.png"></img>
						</button>
						<h2>Find out why <img alt="Forbes" className="forbes-logo" src="../assets/img/Enquiry/enquiry-forbes.png"/> calls us</h2>
						<h1>“THE SOHO HOUSE OF CARDS”</h1>
						<button className="modal-preview-button">PREVIEW 500+ BENEFITS</button>
					</div>
					</div>
				</div>
			</div>
		{/* modal show after some time delay */}
    </>
  );
};

export default EnquiryModal;
