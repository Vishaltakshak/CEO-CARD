import React from "react";
import "../css/signature.css";
const SignatureEvents = () => {
  return (
    <div className="container signature-section">
      <div className="col-xl-12 col-12 sugnature">
        <div className="row">
          <div className="col-lg-6 col-md-6 mx-auto">
            <div className="">
              <h3 className="signature-title">
                Signature Events
                <br />
              </h3>
              <p className="signature-paragraph">
                CEO Card hosts complimentary Members-only networking events
                in major cities around the world, offering Members a unique
                opportunity to network with like-minded entrepreneurs.
              </p>

              <p className="signature-paragraph">
                <br />
                Past Events Include:{" "}
                <strong>
                  New York, Washington DC, Miami, Austin, Boston, Chicago,
                  Toronto, London, Paris, and San Francisco.
                </strong>
                <br />
              </p>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-6">
            <img
              src="assets/img/About/signature-img.jpg"
              alt="signature"
              className="signatur-image"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignatureEvents;
