import React from "react";
import LoginHeader from "../../Common/LoginHeader";
import PagesBody from "../footer_pages/FooterPagesBody";
import LoginFooter from "../../Common/LoginFooter";
import "../../css/about_us.css";

const bgHeight = "500px";
const MembershipFormSubmitted = () => {
  return (
    <>
      <LoginHeader></LoginHeader>
        <PagesBody BGHEIGHT={bgHeight}>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  footerpages-container-child common-pages-body">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <h1 className="common-pages-text" style={{textTransform:"inherit"}}>
              <strong>Thank You for Your Interest in Membership</strong>
            </h1>
            <br></br>
            <h2 className="common-pages-subtext">
				Please be on the lookout for an email that will give you access to preview all the benefits of FoundersCard Membership.
			 </h2>
			 <br></br>
			 <br></br>
			 <br></br>
			 <br></br>
          </div>
        </div>
        </PagesBody>
		
		{/* 5th review-section*/}
        <div className="redesign-reviews-section-main">
          <div className="container text-center" style={{ maxWidth: "940px" }}>
            <h2 className="redesign-review-h2">
              <strong>Hear From Our Members</strong>
            </h2>
            <p className="redesign-reviews-subtext">
              Over 100,000 entrepreneurs, business professionals and innovators
              use CeoCard to receive unprecedented benefits and networking
              opportunities.
            </p>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>The Peninsula New York</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card saved me 30% on a last-minute business flight to
                    India. It's a game-changer for frequent travellers. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Paolo M.</h4>
                    <p className="redesign-review-title">Principal</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Hilton Honors™</b>
                  </div>
                  <p className="redesign-review-p">
                    “I booked a 5-star hotel at a 3-star price with CEO Card.
                    The savings are real and substantial. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Anthony M.</h4>
                    <p className="redesign-review-title">President</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>British Airways</b>
                  </div>
                  <p className="redesign-review-p">
                    “Thanks to CEO Card, I upgraded to a first-class ticket
                    without breaking the bank. It's like having a secret weapon
                    for luxury travel. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Christopher K.</h4>
                    <p className="redesign-review-title">Founder / COO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Dell</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card's flight deals helped me visit three continents in
                    a year without overspending. It's a must-have for
                    globetrotters. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Bijal P.</h4>
                    <p className="redesign-review-title">Founder, CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Amazon Web Services (AWS) Activate</b>
                  </div>
                  <p className="redesign-review-p">
                    “I was sceptical at first, but CEO Card's hotel discounts
                    have saved my company thousands on business trips. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <h4 className="redesign-review-name">Catherine J.</h4>
                    <p className="redesign-review-title">CEO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Wine Library</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card turned my economy budget into a business-class
                    experience. I can't imagine travelling without it now. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Lorna P.</h4>
                    <p className="redesign-review-title">Executive Director </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="redesign-review-big-div clearfix d-flex"
              style={{
                backgroundImage: 'url("../assets/img/About/hand-shake.png")',
              }}
            >
              <div className="redesign-review-big-left">
                <h3 className="redesign-review-h4-para">
                  The absolute best program I have ever been a part of. Paid for
                  itself the first 2 months.
                </h3>
                <h4 className="redesign-review-h4-name">
                  <strong>
                    Nelson G.
                    <br />
                  </strong>
                  <span className="redesign-review-title-span">
                    CEO - For The Earth Corp
                  </span>
                </h4>
              </div>
              <div className="redesign-review-big-right clearfix">
                <div className="redesign-review-big-img nelson_img"></div>
              </div>
            </div>


			<div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>The Peninsula New York</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card saved me 30% on a last-minute business flight to
                    India. It's a game-changer for frequent travellers. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Paolo M.</h4>
                    <p className="redesign-review-title">Principal</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Hilton Honors™</b>
                  </div>
                  <p className="redesign-review-p">
                    “I booked a 5-star hotel at a 3-star price with CEO Card.
                    The savings are real and substantial. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Anthony M.</h4>
                    <p className="redesign-review-title">President</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>British Airways</b>
                  </div>
                  <p className="redesign-review-p">
                    “Thanks to CEO Card, I upgraded to a first-class ticket
                    without breaking the bank. It's like having a secret weapon
                    for luxury travel. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Christopher K.</h4>
                    <p className="redesign-review-title">Founder / COO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Dell</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card's flight deals helped me visit three continents in
                    a year without overspending. It's a must-have for
                    globetrotters. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Bijal P.</h4>
                    <p className="redesign-review-title">Founder, CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Amazon Web Services (AWS) Activate</b>
                  </div>
                  <p className="redesign-review-p">
                    “I was sceptical at first, but CEO Card's hotel discounts
                    have saved my company thousands on business trips. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <h4 className="redesign-review-name">Catherine J.</h4>
                    <p className="redesign-review-title">CEO</p>
                  </div>
                </div>

                <div className="redesign-review">
                  <div style={{ fontSize: "11px", color: "#888" }}>
                    FC Exclusive Benefit
                  </div>
                  <div className="no-translation">
                    <b>Wine Library</b>
                  </div>
                  <p className="redesign-review-p">
                    “CEO Card turned my economy budget into a business-class
                    experience. I can't imagine travelling without it now. ”
                  </p>
                  <div className="redesign-review-author-div clearfix">
                    <div
                      className="redesign-review-photo"
                      style={{
                        backgroundImage:
                          'url("../assets/img/About/testimonial-1.png")',
                      }}
                    ></div>
                    <h4 className="redesign-review-name">Lorna P.</h4>
                    <p className="redesign-review-title">Executive Director </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      <LoginFooter></LoginFooter>
    </>
  );
};

export default MembershipFormSubmitted;
