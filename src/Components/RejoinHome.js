import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollTotop from "./ScrollTotop";
import "../css/rejoinhome.css";

const RejoinHome = () => {

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
			},
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
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };


	  var settings1 = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
			},
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
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
			<AfterLoginLayout>
				<div className="container-fluid guest-banner-container pe-0 ps-0">
					<div className="guest-image-container">
						<video className="guest-image-video-height" autoPlay muted loop id="video" >
							<source type="video/mp4" src="https://d2q86wmri3hsp2.cloudfront.net/assets/bay-1b0c7d506346303e650b5ff9e798a81a10e2f5a212a81f36a0c4f31e6cbc12db.mp4"></source>
						</video>	
					</div>
					<div className="guest-preview-home-overlay rejoin-overaly">
						<div className="guest-preview-home-overlay-content">
							<div className="text-center">
								<h1 className="guest-hero-title">
									Welcome Back, Raghavendra!
								</h1>
								<div className="guest-hero-subtitle">
									Explore newly added and enhanced benefits and privileges with premier travel, business, and lifestyle brands.
								</div>
								<Link className="guest-preview-hero-button" to="/reactivate">REJOIN NOW</Link>
								<div className="rejoin-browse-benefit" >
									<Link to="/allbenifits" className="text-white">Browse Benefits</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid rejoin-popular-benefits">
					<div className="container pe-0 ps-0">
						<h1 className="rejoin-topic-heading">Explore Popular Member Benefits</h1>
						<div className="row make-up-cost-inner-row">
							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img1.jpg"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">Loyalty Status Upgrades</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Complimentary Status Upgrades</h1>
											<p className="rejoin-p-heading">Receive upgrades with major airline, hotel, and car rental programs</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/BrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}


							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img2.png"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">United Airlines</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Up To 16% Off Flights</h1>
											<p className="rejoin-p-heading">Enroll in the United for Business portal to enjoy savings on flights</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/BrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}

							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img3.png"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">lenevo</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Save up to 65%</h1>
											<p className="rejoin-p-heading">Enjoy savings of up to 65% off select Think and Lenovo products</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/BrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}

							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img4.png"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">Bang & Olufsen</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Save up to 15%</h1>
											<p className="rejoin-p-heading">Receive up to 15% off online and in-store</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/BrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}

							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img5.jpg"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">Complimentary Credits and Subscriptions</h3>
											</Link>
											<h1 className="rejoin-h1-heading">$25,000+
											In Value</h1>
											{/* <p className="rejoin-p-heading">Receive up to 15% off online and in-store</p> */}
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/BrowseByCategory">MR PORTER, Stripe, Airtable, Amazon Web Services (AWS), Indeed and many more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}


							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img6.jpeg"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">FedEx</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Save up to 50%</h1>
											<p className="rejoin-p-heading">Receive up to 50% off FedEx shipping services</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/BrowseByCategory">learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}



							<div className="col-xl-12 col-lg-12 col-sm-12 col-md-12 make-up-cost-cta" >
								<div className="make-up-cost-cta-bg">
									<h1>Reactivate Your Membership</h1>
									<p>and start redeeming 500+ benefits</p>
									<Link className="btn guest-preview-make-up-cost-button" to="/reactivate">REJOIN NOW</Link>
								</div>
							</div>


							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img1.jpg"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">Loyalty Status Upgrades</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Complimentary Status Upgrades</h1>
											<p className="rejoin-p-heading">Receive upgrades with major airline, hotel, and car rental programs</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/bBrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}


							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img1.jpg"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">Loyalty Status Upgrades</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Complimentary Status Upgrades</h1>
											<p className="rejoin-p-heading">Receive upgrades with major airline, hotel, and car rental programs</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/bBrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}


							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img1.jpg"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">Loyalty Status Upgrades</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Complimentary Status Upgrades</h1>
											<p className="rejoin-p-heading">Receive upgrades with major airline, hotel, and car rental programs</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/bBrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}



							{/* repeatative block */}
							<div className="guest-preview-benefit-block">
								<div className="guest-preview-benefit-block-inner">
									<div className="guest-preview-benefit-block-image-container">
										<Link to="/BrowseByCategory">
											<img alt="FC Benefits" src="../assets/img/rejoin-home/img1.jpg"/>
										</Link>    
									</div>
									<div className="rejoin-benefit-block-info">
										<div>
											<Link to="/BrowseByCategory">
												<h3 className="rejoin-h3-heading">Loyalty Status Upgrades</h3>
											</Link>
											<h1 className="rejoin-h1-heading">Complimentary Status Upgrades</h1>
											<p className="rejoin-p-heading">Receive upgrades with major airline, hotel, and car rental programs</p>
										</div>
        								<div>
											<Link className="guest-preview-benefit-learn-more-link" to="/bBrowseByCategory">Learn more</Link>
										</div>
									</div>
								</div>
							</div>
							{/* repeatative block */}

						</div>
					</div>
				</div>

				<div className="guest-preview-midsection-div">
					<div className="guest-preview-midsection-image-div d-xl-block d-lg-block d-none d-sm-none">
						<img alt="" src="../assets/img/rejoin-home/ellite-access-img.png"/>
					</div>
					<div className="guest-preview-midsection-text-div">
						<h1>Unprecedented Savings &amp; Elite Access</h1>
						<div>
							FoundersCard was created for entrepreneurs by entrepreneurs.
							Become part of our community of over 150,000 Members and start receiving access to unprecedented benefits and networking opportunities.
						</div>
						<br></br>
						<Link className="btn guest-preview-midsection-button" to="/reactivate">REJOIN NOW</Link>
					</div>
				</div>


				<div className="container-fluid rejoin-popular-benefits rejoin-travel-benefits">
					
					<div className="container pe-0 ps-0">
						<h1 className="rejoin-topic-heading">Savings and Access for Every Aspect of Your Life</h1>
						{/* travel benefit block */}
						<div className="saving-block">
							<div className="rejoin-travel-benefits-heading" style={{position:"relative"}}>
								<h4 className="rejoin-travel-benefits-h4">TRAVEL BENEFITS</h4>
								<h3 className="rejoin-travel-benefits-h3">Elite Status &amp; Preferred Pricing</h3>
								{/* view all link only visible for desktop */}
								<Link className="rejoin-travel-benefits-anchor d-xl-block d-lg-block d-none d-sm-none" to="/BrowseByCategory">View All &gt;</Link>
								{/* view all link only visible for desktop */}
							</div>
							<div className="row row-equal-height">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="IHG One Rewards" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>IHG One Rewards</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Complimentary IHG® Rewards Gold Elite Status
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 67,711 times
										</div>
								</div>

								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Hyatt Centric The Liberties Dublin</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Up to 15% off Rates &amp; Privileges 
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 169 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="United Airlines" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>United Airlines</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Save up to 16% on fares
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 19,720 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Avis</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Complimentary Upgrade + up to 25% off
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 100,441 times
										</div>
								</div>

								{/* view all link only visible for mobile */}
								<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  d-xl-none d-lg-none d-sm-block d-block text-center">
										<Link  to="/BrowseByCategory">View All &gt;</Link>
								</div>
								{/* view all link only visible for mobile */}
							</div>
						</div>
						{/* travel benefit block */}

						{/* lifestyle style benefit block */}
						<div className="saving-block">
							<div className="rejoin-travel-benefits-heading" style={{position:"relative"}}>
								<h4 className="rejoin-travel-benefits-h4">LIFESTYLE BENEFITS</h4>
								<h3 className="rejoin-travel-benefits-h3">VIP Benefits, Access, & Savings</h3>
								{/* view all link only visible for desktop */}
								<Link className="rejoin-travel-benefits-anchor d-xl-block d-lg-block d-none d-sm-none" to="/BrowseByCategory">View All &gt;</Link>
								{/* view all link only visible for desktop */}
							</div>
							<div className="row row-equal-height">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="IHG One Rewards" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>IHG One Rewards</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Complimentary IHG® Rewards Gold Elite Status
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 67,711 times
										</div>
								</div>

								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Hyatt Centric The Liberties Dublin</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Up to 15% off Rates &amp; Privileges 
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 169 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="United Airlines" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>United Airlines</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Save up to 16% on fares
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 19,720 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Avis</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Complimentary Upgrade + up to 25% off
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 100,441 times
										</div>
								</div>

								{/* view all link only visible for mobile */}
								<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  d-xl-none d-lg-none d-sm-block d-block text-center">
										<Link  to="/BrowseByCategory">View All &gt;</Link>
								</div>
								{/* view all link only visible for mobile */}
							</div>
						</div>
						{/* lifestyle benefit block */}
					</div>


					<div className="container pe-0 ps-0 rejoin-slick">
						<h1 className="rejoin-topic-heading">What Our Members Are Saying</h1>
						<div className="row">
							<Slider {...settings}>
									<div className="quote-column">
										<div className="quote-column-inner">
											<div class="circle-crop" >
												<img alt="Nelson G., CEO @ For The Earth Corp" src="../assets/img/rejoin-home/people1.png"/>
											</div>
											<h3 class="quote-text-bold">
												“The absolute best program I have ever been a part of.”
											</h3>
											<p class="quote-text-para">Nelson G., CEO @ For The Earth Corp</p>
										</div>
									</div>
									
									<div className="quote-column">
										<div className="quote-column-inner">
											<div class="circle-crop" >
												<img alt="Nelson G., CEO @ For The Earth Corp" src="../assets/img/rejoin-home/people2.jpg"/>
											</div>
											<h3 class="quote-text-bold">
												““One benefit alone makes my FC membership worth it.””
											</h3>
											<p class="quote-text-para">
												Katherine D., CEO @ La Jolla Living
											</p>
										</div>
									</div>

									<div className="quote-column">
										<div className="quote-column-inner">
											<div class="circle-crop" >
												<img alt="Nelson G., CEO @ For The Earth Corp" src="../assets/img/rejoin-home/people3.png"/>
											</div>
											<h3 class="quote-text-bold">
												““This benefit alone saved me $671 in cell service fees.””
											</h3>
											<p class="quote-text-para">David H., Founder & Chief Scientist @ Hanson Robotics</p>
										</div>
									</div>
							</Slider>
						</div>
					</div>

					<div className="container pe-0 ps-0">
						{/* business style benefit block */}
						<div className="saving-block">
							<div className="rejoin-travel-benefits-heading" style={{position:"relative"}}>
								<h4 className="rejoin-travel-benefits-h4">BUSINESS BENEFITS</h4>
								<h3 className="rejoin-travel-benefits-h3">Preferred Member Pricing</h3>
								{/* view all link only visible for desktop */}
								<Link className="rejoin-travel-benefits-anchor d-xl-block d-lg-block d-none d-sm-none" to="/BrowseByCategory">View All &gt;</Link>
								{/* view all link only visible for desktop */}
							</div>
							<div className="row row-equal-height">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="IHG One Rewards" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>IHG One Rewards</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Complimentary IHG® Rewards Gold Elite Status
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 67,711 times
										</div>
								</div>

								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Hyatt Centric The Liberties Dublin</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Up to 15% off Rates &amp; Privileges 
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 169 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="United Airlines" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>United Airlines</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Save up to 16% on fares
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 19,720 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Avis</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Complimentary Upgrade + up to 25% off
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 100,441 times
										</div>
								</div>

								{/* view all link only visible for mobile */}
								<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  d-xl-none d-lg-none d-sm-block d-block text-center">
										<Link  to="/BrowseByCategory">View All &gt;</Link>
								</div>
								{/* view all link only visible for mobile */}
							</div>
						</div>
						{/* business  benefit block */}


						{/* hotel style benefit block */}
						<div className="saving-block">
							<div className="rejoin-travel-benefits-heading" style={{position:"relative"}}>
								<h4 className="rejoin-travel-benefits-h4">HOTEL BENEFITS</h4>
								<h3 className="rejoin-travel-benefits-h3">Exclusive Rates & Upgrades</h3>
								{/* view all link only visible for desktop */}
								<Link className="rejoin-travel-benefits-anchor d-xl-block d-lg-block d-none d-sm-none" to="/BrowseByCategory">View All &gt;</Link>
								{/* view all link only visible for desktop */}
							</div>
							<div className="row row-equal-height">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="IHG One Rewards" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>IHG One Rewards</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Complimentary IHG® Rewards Gold Elite Status
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 67,711 times
										</div>
								</div>

								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Hyatt Centric The Liberties Dublin</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
											Up to 15% off Rates &amp; Privileges 
										</div>
										<div className="rejoin-benefit-redeem-container">
											Redeemed 169 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="United Airlines" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>United Airlines</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Save up to 16% on fares
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 19,720 times
										</div>
								</div>


								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 rejoin-benefit-column">
										<Link to="/SubMenu">
											<img alt="Hyatt Centric The Liberties Dublin" className="rejoin-benefit-image" src="../assets/img/rejoin-home/travel-benefit-img1.png"/>
										</Link>
										<div className="rejoin-benefit-title-container">
											<Link to="/SubMenu" >
												<h5>Avis</h5>
											</Link>
										</div>
										<div className="rejoin-benefit-description-container">
										Complimentary Upgrade + up to 25% off
										</div>
										<div className="rejoin-benefit-redeem-container">
										Redeemed 100,441 times
										</div>
								</div>

								{/* view all link only visible for mobile */}
								<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  d-xl-none d-lg-none d-sm-block d-block text-center">
										<Link  to="/BrowseByCategory">View All &gt;</Link>
								</div>
								{/* view all link only visible for mobile */}
							</div>
						</div>
						{/* hotel  benefit block */}
					</div>

				</div>


				<div className="container-fluid testimonial-block">
					<div className="container">
						<div className="row">
							<div className="col-xl-10 col-lg-10m col-md-12 col-sm-12 col-12 mx-auto endorsement-carousel">
								<Slider {...settings1}>
										<div className="text-center">
											<h1 className="testimonial-title">"The elite 'Black Card' for entrepreneurs."</h1>
											<img className="testimonial-image" alt="" src="../assets/img/rejoin-home/testi1.png"/>
										</div>
										
										<div className="text-center">
											<h1 className="testimonial-title">"Soothes Stress with Elite Access."</h1>
											<img className="testimonial-image" alt="" src="../assets/img/rejoin-home/testi2.svg"/>
										</div>

										<div className="text-center">
											<h1 className="testimonial-title">"FoundersCard gives entrepreneurs the VIP treatment they deserve."</h1>
											<img className="testimonial-image" alt="" src="../assets/img/rejoin-home/testi3.png"/>
										</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid rejoin-community">
					<div className="container">
						<div className="row">
							<div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto">
								<div className="row">
									<div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 text-center rejoin-community-left">
										<h1>Rejoin Our Community!</h1>
										<br></br>
										<p>
											Login below to see your exclusive offer to rejoin!
										</p>
										<br></br>
										<Link class="btn btn-rejoin-community" to="/reactivate">REJOIN NOW</Link>
									</div>

									<div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 d-xl-block d-lg-block d-md-none d-sm-none d-none rejoin-community-right">
										<img alt="" class="rejoin-community-img" alt="" src="../assets/img/rejoin-home/rejoin-community-img.png"/>
									</div>
								</div>
							</div>

							
						</div>
					</div>
				</div>
			<ScrollTotop></ScrollTotop>
			</AfterLoginLayout>
		</>
	);
};

export default RejoinHome;
