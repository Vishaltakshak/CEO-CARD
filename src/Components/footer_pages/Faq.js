import React from "react";
import { Link } from "react-router-dom";
//import { useRef } from 'react';
import LoginHeader from "../../Common/LoginHeader";
import PagesBody from "./FooterPagesBody";
import LoginFooter from "../../Common/LoginFooter";
import '../../css/pages/faq.css';


function scrollToElement(id) {
	const element = document.getElementById(id);
	if (element) {
	  element.scrollIntoView({ behavior: 'smooth' });
	}
  }
const Faq = () => {
	// const myRef1 = useRef(null);
	// const myRef2 = useRef(null);
	// const myRef3 = useRef(null);
	// const myRef4 = useRef(null);
	// const myRef5 = useRef(null);
	// const myRef6 = useRef(null);
	// const myRef7 = useRef(null);
	// const myRef8 = useRef(null);
	return (
		<>
			<LoginHeader></LoginHeader>
			<PagesBody>
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  footerpages-container-child common-pages-body faq-container">
					<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
						<div className="row">
							<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
								<div className="faq-sidebar">
									<h2 className="faq-topics">topics</h2>
									<br></br>
									{/* repeate block */}
									<a onClick={() => scrollToElement('included-complimentary')}  className="link-faq-sidebar">
										<h4>What's inside the exclusive CEOCard welcome kit?
										</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}

									{/* repeate block */}
									<a  onClick={() => scrollToElement('about-elite')}  className="link-faq-sidebar">
										<h4>How does CEOCard membership elevate my professional journey?
										</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}

									{/* repeate block */}
									<a onClick={() => scrollToElement('physical-card')}   className="link-faq-sidebar">
										<h4>How do strategic partnerships enhance my CEOCard experience?
										</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}


									{/* repeate block */}
									<a onClick={() => scrollToElement('upgrade-redeem')}   className="link-faq-sidebar">
										<h4>Is my personal information secure with CEOCard?

										</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}

									{/* repeate block */}
									<a onClick={() => scrollToElement('card-communication')} className="link-faq-sidebar">
										<h4>How can I opt out of CEOCard communications?

										</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}

									{/* repeate block */}
									<a onClick={() => scrollToElement('card-support')}  className="link-faq-sidebar">
										<h4>What's the best way to reach CEOCard for support?
										</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}

									{/* repeate block */}
									<a onClick={() => scrollToElement('card-benefit')}  className="link-faq-sidebar">
										<h4> Can I leverage my CEOCard benefits globally?</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}

									{/* repeate block */}
									<a onClick={() => scrollToElement('card-refreshed')}   className="link-faq-sidebar">
										<h4> How frequently are CEOCard perks refreshed?
										</h4>
									</a>
									<hr className="border-blue"></hr>
									{/* repeate block */}

								</div>
							</div>
							<div  className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 ">
								<div className="faq-sidebar-result">
								
									<h2 className="faq-topics">FREQUENTLY ASKED QUESTIONS</h2>
									<br></br>
									{/* repeate block */}
									<div>
										<h4 style={{scrollMargin:"90px"}} id="included-complimentary" className="faq-sidebar-result-title">
										What's inside the exclusive CEOCard welcome kit?</h4>
										<p>Our premium welcome kit includes hand-picked leadership books and resources, symbolizing our commitment to your executive success.
											<br></br>
										</p>
										


										<h4 style={{scrollMargin:"90px"}} id="about-elite" className="faq-sidebar-result-title">How does CEOCard membership elevate my professional journey?</h4>
										<p> It creates a world of elite benefits, from cutting-edge leadership resources to exclusive privileges, designed to propel your corporate ascent.

										</p>



										<h4 style={{scrollMargin:"90px"}}  id="physical-card" className="faq-sidebar-result-title">
										How do strategic partnerships enhance my CEOCard experience?
										</h4>
										<p>Enjoy your  VIP treatment with our curated network of partners in travel, hospitality, and lifestyle sectors, offering you unparalleled access and savings.
										</p>



										<h4  style={{scrollMargin:"90px"}} id="upgrade-redeem" className="faq-sidebar-result-title">
										Is my personal information secure with CEOCard?
										</h4>
										<p> Absolutely. We employ state-of-the-art security measures and never sell your data. Review our comprehensive Privacy Policy for details.
										</p>


										<h4  style={{scrollMargin:"90px"}} id="card-communication" className="faq-sidebar-result-title">
										How can I opt out of CEOCard communications?
										</h4>
										<p>Simply use the "unsubscribe" link in our emails or contact our dedicated support team for prompt assistance.
										</p>

										<h4  style={{scrollMargin:"90px"}}  id="card-support" className="faq-sidebar-result-title">
										What's the best way to reach CEOCard for support?
										</h4>
										<p>Connect with us at support@ceocard.in or visit ceocard.in for seamless support options.
										</p>


										<h4  style={{scrollMargin:"90px"}}  id="card-benefit" className="faq-sidebar-result-title">
										Can I leverage my CEOCard benefits globally?
										</h4>
										<p>Many of our premium benefits are designed for international use. Check our website for region-specific offerings.
										</p>


										<h4  style={{scrollMargin:"90px"}}  id="card-refreshed" className="faq-sidebar-result-title">
										How frequently are CEOCard perks refreshed?</h4>
										<p>We continuously update our benefits portfolio, ensuring you always have access to the most relevant and valuable offerings.</p>



									</div>
									{/* repeate block */}
								</div>
							</div>
						</div>
					</div>
					
					
				</div>
			</PagesBody>
			<LoginFooter></LoginFooter>
		</>
		
	);
};

export default Faq;
