import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Common/LoginHeader";
import PagesBody from "./FooterPagesBody";
import LoginFooter from "../../Common/LoginFooter";

const Careers = () => {
  const [visible, setVisible] = useState(null); // Track which section is visible

  const toggleVisibility = (index) => {
    setVisible(visible === index ? null : index); // Toggle visibility
  };

  return (
    <>
      <LoginHeader></LoginHeader>
      <PagesBody>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 footerpages-container-child common-pages-body">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <h1 className="common-pages-text">Careers</h1>
            <br />
            <h2 className="common-pages-subtext">
              To apply for any of the positions below, please email us at{" "}
              <Link to="mailto:jobs@Ceocard.com" target="_blank">
                jobs@Ceocard.com
              </Link>{" "}
              with your resume and cover letter. Indicate the position you're
              applying for in the subject line of your email.
            </h2>
          </div>
        </div>

        {/* Career Positions */}
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 footerpages-container-child2">
          {/* Block 1 */}
          <div className="col-xl-12 career-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 className="career-post">Business Development Manager</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <button
                  className="btn btn-view-details"
                  onClick={() => toggleVisibility(1)}
                >
                  {visible === 1 ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
            {visible === 1 && (
              <div className="career-box-details">
                <strong>CeoCard</strong> is looking for a{" "}
                <strong>Business Development Manager</strong> to strategize and
                execute on new partnerships, based in our New York office.
                <br />
                Founded in 2009, CeoCard is an exclusive membership community
                that gives entrepreneurs and business executives negotiated
                discounts across travel, lifestyle, and business brands. The
                Business Development Manager will play a key part in growing
                our influential Member base.
              </div>
            )}
          </div>

          {/* Block 2 */}
          <div className="col-xl-12 career-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 className="career-post">Travel and Lifestyle Concierge</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <button
                  className="btn btn-view-details"
                  onClick={() => toggleVisibility(2)}
                >
                  {visible === 2 ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
            {visible === 2 && (
              <div className="career-box-details">
                <strong>CeoCard</strong> is looking for a{" "}
                <strong>Travel and Lifestyle Concierge</strong> to assist our
                Members with their travel and lifestyle needs. The role requires
                excellent organizational skills and the ability to create
                seamless experiences for our Members.
              </div>
            )}
          </div>

          {/* Block 3 */}
          <div className="col-xl-12 career-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 className="career-post">Marketing Specialist</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <button
                  className="btn btn-view-details"
                  onClick={() => toggleVisibility(3)}
                >
                  {visible === 3 ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
            {visible === 3 && (
              <div className="career-box-details">
                <strong>CeoCard</strong> is looking for a{" "}
                <strong>Marketing Specialist</strong> to create and implement
                marketing campaigns that drive brand awareness and engagement.
                The ideal candidate will have experience in digital marketing
                and content creation.
              </div>
            )}
          </div>

          {/* Block 4 */}
          <div className="col-xl-12 career-box last-career-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 className="career-post">Software Engineer</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <button
                  className="btn btn-view-details"
                  onClick={() => toggleVisibility(4)}
                >
                  {visible === 4 ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
            {visible === 4 && (
              <div className="career-box-details">
                <strong>CeoCard</strong> is looking for a{" "}
                <strong>Software Engineer</strong> to develop and maintain our
                web and mobile applications. The role involves working with a
                team to deliver cutting-edge solutions for our Members.
              </div>
            )}
          </div>
        </div>
      </PagesBody>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default Careers;
