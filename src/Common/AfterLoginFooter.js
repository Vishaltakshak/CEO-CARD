import React from "react";
import { Link } from "react-router-dom";
import "../css/footerafterlogin.css";

const AfterLoginFooter = () => {
  return (
    <>
      <div className="container-fluid footer-main">
        <div className="container pe-0 ps-0">
          <div className="col-xl-12 col-12">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 footer-child">
                <div>
                  <a href="/homeafterlogin">
                    <img
                      alt=""
                      className="footer-logo"
                      src="././assets/img/ceo-logo-white.png"
                      style={{
                        width: "58px",
                        height: "auto",
                        marginLeft: "15px",
                      }}
                    ></img>
                  </a>
                </div>

                <div>
                  <ul className="list-inline footer-social-links">
                    <li>
                      <a href="https://twitter.com/Ceocard">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/Ceocard">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/CeoCard/">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" d-xxl-block d-lg-block d-md-none d-sm-none d-none">
                  <a
                    className="btn footer-btn-white"
                    id="footer-refer-link"
                    href="/homeafterlogin"
                  >
                    REFER A MEMBER, EARN FCPOINTS
                  </a>
                </div>
                <div className=" d-xxl-none d-lg-none d-md-block d-sm-block d-block">
                  <a
                    className="btn footer-btn-white"
                    id="footer-refer-link"
                    href="/refer"
                  >
                    REFER A MEMBER
                  </a>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                id="footer-navigation"
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 footer-navigation">
                    <h5>
                      <Link to="/ContactUs">CONTACT US</Link>
                    </h5>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 footer-navigation">
                    <h5>
                    <Link to="/concierge_request">ELITE CONCIERGE</Link>
                    </h5>
                    <h5>
                      <Link to="/Faq">FAQS</Link>
                    </h5>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 footer-navigation">
                    <h5>
                      <Link to="/Partnership">PARTNERSHIP INQUIRIES</Link>
                    </h5>
                    <h5>
                      <Link to="/TermsOfServices">TERMS OF MEMBERSHIP</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-12 text-center">
            <p className="footer-p">Make sure to stay connected with CeoCard</p>
            <a
              className="inline-block"
              href="https://play.google.com/store/apps/details?id=com.app.Ceocard"
            >
              <img
                alt=""
                style={{ width: "155px" }}
                src="././assets/img/img-gp.png"
              ></img>
            </a>

            <a
              className="inline-block"
              href="https://itunes.apple.com/us/app/Ceocard/id662972940?mt=8"
            >
              <img
                alt=""
                style={{ width: "135px" }}
                src="././assets/img/app-store.svg"
              ></img>
            </a>

            <a
              className="inline-block"
              href="https://chrome.google.com/webstore/detail/Ceocard-chrome-exten/kamiaabbnpncbobdiblhfogafnoefkae"
            >
              <img
                style={{ width: "205px" }}
                alt=""
                src="././assets/img/chrome-webstore.png"
              ></img>
            </a>
          </div>


          <div className="col-xl-12 col-12 text-center">
            <hr className="menu-section-break"></hr>
        </div>

          <div className="col-xl-12 col-12 text-center">
            <h5 className="copyright-text">
              © 2024 CeoCard &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="/Privacy">Privacy Policy</Link>
              &nbsp;&nbsp;|&nbsp;&nbsp; 800.963.1988
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterLoginFooter;
