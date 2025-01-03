import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import SubmenuPageHeading from "./SubmenuPageHeading";
import '../css/shareexperience.css';


const ShareExperience = () => {
	//use state for handle view more experience
	const [isActive, setActive] = useState("false");
	const handleViewmoreClick = () => {
		setActive(!isActive);  
	};

	//use state for handle add experience form
	const [isCheck, setCheck] = useState("false");
	const handleCheckboxChecked = () => {
		setCheck(!isCheck);  
	};
	return (
		<>
			<div className="container-fluid submenu-container share-exp-box">
				<div className="container pe-0 ps-0">
					{/* view commente box */}
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<SubmenuPageHeading  submenupagetopic="Share your experience and total savings with fellow Members..." submenupagesubtopic="" ></SubmenuPageHeading>
							<br></br>
							<div className={isActive ? "col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  comment-box-parent " : "col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box-parent comment-box-parent-height"}>
								{/* comment-box-parent-height */}
								{/* repeate block */}
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box ">
									<div className="comment-img-box">
										<Link  className="comment-image-link" to='/#' target="_blank">
												<img className="comment-img" alt="Comment" src="././assets/img/Submenu/full_width_EY.jpg"></img>
										</Link>
									</div>
									<div className="comment-text-box">
										<h3 className="comment-text-box-h3">The Etihad Apartments is absolutely incredible.</h3>
										<h5 className="comment-text-box-h5">
											<Link to='/#' target="_blank" class="link-no-underline">
												Bethany W.
											</Link> , 
											Founder and CEO @ BougieMiles.com
										</h5>
									</div>
								</div>
								{/* repeate block */}

								{/* repeate block */}
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box ">
									<div className="comment-img-box">
										<Link  className="comment-image-link" to='/#' target="_blank">
												<img className="comment-img" alt="Comment" src="././assets/img/Submenu/full_width_EY.jpg"></img>
										</Link>
									</div>
									<div className="comment-text-box">
										<h3 className="comment-text-box-h3">The Etihad Apartments is absolutely incredible.</h3>
										<h5 className="comment-text-box-h5">
											<Link to='/#' target="_blank" class="link-no-underline">
												Bethany W.
											</Link> , 
											Founder and CEO @ BougieMiles.com
										</h5>
									</div>
								</div>
								{/* repeate block */}

								{/* repeate block */}
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box ">
									<div className="comment-img-box">
										<Link  className="comment-image-link" to='/#' target="_blank">
												<img className="comment-img" alt="Comment" src="././assets/img/Submenu/full_width_EY.jpg"></img>
										</Link>
									</div>
									<div className="comment-text-box">
										<h3 className="comment-text-box-h3">The Etihad Apartments is absolutely incredible.</h3>
										<h5 className="comment-text-box-h5">
											<Link to='/#' target="_blank" class="link-no-underline">
												Bethany W.
											</Link> , 
											Founder and CEO @ BougieMiles.com
										</h5>
									</div>
								</div>
								{/* repeate block */}

								{/* repeate block */}
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box ">
									<div className="comment-img-box">
										<Link  className="comment-image-link" to='/#' target="_blank">
												<img className="comment-img" alt="Comment" src="././assets/img/Submenu/full_width_EY.jpg"></img>
										</Link>
									</div>
									<div className="comment-text-box">
										<h3 className="comment-text-box-h3">The Etihad Apartments is absolutely incredible.</h3>
										<h5 className="comment-text-box-h5">
											<Link to='/#' target="_blank" class="link-no-underline">
												Bethany W.
											</Link> , 
											Founder and CEO @ BougieMiles.com
										</h5>
									</div>
								</div>
								{/* repeate block */}

								{/* repeate block */}
								<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box ">
									<div className="comment-img-box">
										<Link  className="comment-image-link" to='/#' target="_blank">
												<img className="comment-img" alt="Comment" src="././assets/img/Submenu/full_width_EY.jpg"></img>
										</Link>
									</div>
									<div className="comment-text-box">
										<h3 className="comment-text-box-h3">The Etihad Apartments is absolutely incredible.</h3>
										<h5 className="comment-text-box-h5">
											<Link to='/#' target="_blank" class="link-no-underline">
												Bethany W.
											</Link> , 
											Founder and CEO @ BougieMiles.com
										</h5>
									</div>
								</div>
								{/* repeate block */}

							</div>
							<div className={isActive ? "col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box-view-more-box text-center d-block" : "col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 comment-box-view-more-box text-center d-none"}>
								<Link onClick={handleViewmoreClick} className="btn btn-exp-view-more"  >
										view more
								</Link>
								
							</div>
						</div>
					</div>
				{/* view commente box */}

				{/* add commente box */}
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 add-comment-box">
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12  mx-auto ">
							<h3 className="add-comment-box-title">
              					Share your experience with fellow Members.  Each insight is worth 100 FCPoints. 
								  <OverlayTrigger placement="top" overlay={(props) => (
									<Tooltip {...props}>
										Receive 100 FCPoints for each insight, up to 5 insights every 90 days.
									</Tooltip>)}>
									<i class="bi bi-info-circle-fill"></i>
								</OverlayTrigger>
							</h3>
							<form className="add-comment-form">
								<div className="form-group">
									<input type="text" name="comment_placeholder" value="" placeholder="Start sharing here."
									className={isCheck ? "form-control d-block " : "form-control d-none"}></input>

									<textarea rows="3"  placeholder="Start sharing here." name="comment_placeholder" className={isCheck ? "form-control d-none " : "form-control d-block"}></textarea>
								</div>
								
								
								<div class="form-group">
									<input onClick={handleCheckboxChecked} class="form-check-input" type="checkbox" value=""></input>
									<label class="form-check-label" >
									&nbsp;&nbsp;&nbsp;I've used this benefit
									</label>
								</div>

								<div className={isCheck ? "form-other-field-show d-none " : "form-other-field-show d-block"}>
									<div className="form-group " >
										<input type="number" name="comment_placeholder" value="" placeholder="Share total savings with this benefit (USD)." class="form-control"></input>
									</div>
									<div className="form-group btn-mob-center">
										<Link style={{minWidth:"auto"}} className="btn btn-exp-view-more " to='/#' target="_blank">
												submit
										</Link>
									</div>
									</div>
								</form>
							
						</div>
					</div>
				</div>

				{/* add commente box */}
				</div>
			</div>
			
		</>
		
	);
};

export default ShareExperience;
