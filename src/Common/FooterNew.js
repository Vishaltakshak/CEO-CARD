import React from "react";
import "../css/footerNew.css";
const FooterNew = (props) => {
  return (
    <div>
      <div className="redesign-home-footer" style={{backgroundColor: props.FOOTERBGCOLOR}}>
        <img
          src="assets/img/ceo-logo-white2.png"
          alt=""
          width={50}
          height={50}
          className="redesign-home-footer-logo"
        />
        <p className="redesign-home-footer-text">
          ‍
          <a
            href="/about_us"
            target="_blank"
            className="redesign-home-footer-links"
          >
            ABOUT US
          </a>{" "}
          |
          <a
            href="/partnership"
            target="_blank"
            className="redesign-home-footer-links"
          >
            PARTNERSHIP INQUIRIES
          </a>{" "}
          |
          <a
            href="/ContactUs"
            target="_blank"
            className="redesign-home-footer-links"
          >
            CONTACT US
          </a>{" "}
          |
          <a
            href="/careers"
            target="_blank"
            className="redesign-home-footer-links"
          >
            CAREERS
          </a>{" "}
          |
          <a
            href="/privacy"
            target="_blank"
            className="redesign-home-footer-links"
          >
            PRIVACY
          </a>
          <br />
          540 Madison Ave, 29th Floor, New York, NY 10022 |{" "}
          <a href="mailto:memberservices@ceocard.com">Email Us</a> |
          800.963.1988
          <br />
          <br />
          Copyright © 2024 CeoCard. All Rights Reserved.
          <br />
        </p>
        <a
          href="https://www.facebook.com/CeoCard/"
          target="_blank"
          className="inline-block"
        >
          <img
            src="assets/img/Footer/facebook_icon.png"
            alt=""
            className="redesign-home-social-footer"
          />
        </a>
        <a
          href="https://twitter.com/ceocard"
          target="_blank"
          className="inline-block"
        >
          <img
            src="assets/img/Footer/twitter_icon.png"
            sizes="35px"
            style={{}}
            alt=""
            className="redesign-home-social-footer"
          />
        </a>
        <a
          href="https://www.instagram.com/ceocard/"
          target="_blank"
          className="inline-block"
        >
          <img
            src="assets/img/Footer/instagram_icon.png"
            alt=""
            className="redesign-home-social-footer"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterNew;
