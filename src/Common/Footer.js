import React from "react";
import "../css/footer.css";
const Footer = () => {
  return (
    <div>
      <footer
        id="footer"
        className="ftbg ftstick"
        style={{
          backgroundImage: `url("../assets/img/123.png")`,
        }}
      >
        <div className="container d-md-flex  footer-width">
          <div className="social-links  text-md-end  pt-md-0">
            <a href="#" className="btlogo">
              <img src="assets/img/btmLogo.png" />
            </a>
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Presento</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className=" ftarrow back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Footer;
