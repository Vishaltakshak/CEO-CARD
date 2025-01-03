import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Common/LoginHeader";
import PagesBody from "./FooterPagesBody";
import LoginFooter from "../../Common/LoginFooter";

const Careers = () => {
  return (
    <>
      <LoginHeader></LoginHeader>
      <PagesBody>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  footerpages-container-child common-pages-body ">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
            <h1 className="common-pages-text">Careers</h1>
            <br></br>
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
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  footerpages-container-child2">
          {/* repeate block 1 */}
          <div class="col-xl-12 career-box">
            <div className="row row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 class="career-post">Business Development Manager</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <Link
                  className="btn btn-view-details"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo"
                >
                  view details
                </Link>
              </div>
            </div>
          </div>
          <div id="demo" class="collapse">
            <div className="career-box-details">
              <strong>CeoCard</strong> is looking for a{" "}
              <strong>Business Development Manager</strong> to strategize and
              execute on new partnerships, based in our New York office.
              <br></br>
              Founded in 2009, CeoCard is an exclusive membership community that
              gives entrepreneurs and business executives negotiated discounts
              across travel, lifestyle, and business brands including Park
              Hyatt, Ritz-Carlton, St Regis, Dell, Avis, IHG, and Caesars --
              just to name a few of our over 500 benefits. Our Members are
              influential in their communities, and that’s why our benefit
              partners offer our Members such unparalleled access and discounts.
              The Business Development Manager will play a key part growing our
              influential Member base.
            </div>
          </div>
          {/* repeate block 1*/}

          {/* repeate block 2 */}
          <div class="col-xl-12 career-box">
            <div className="row row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 class="career-post">Travel and Lifestyle Concierge</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <Link
                  className="btn btn-view-details"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo1"
                >
                  view details
                </Link>
              </div>
            </div>
          </div>
          <div id="demo1" class="collapse">
            <div className="career-box-details">
              <strong>CeoCard</strong> is looking for a{" "}
              <strong>Business Development Manager</strong> to strategize and
              execute on new partnerships, based in our New York office.
              <br></br>
              Founded in 2009, CeoCard is an exclusive membership community that
              gives entrepreneurs and business executives negotiated discounts
              across travel, lifestyle, and business brands including Park
              Hyatt, Ritz-Carlton, St Regis, Dell, Avis, IHG, and Caesars --
              just to name a few of our over 500 benefits. Our Members are
              influential in their communities, and that’s why our benefit
              partners offer our Members such unparalleled access and discounts.
              The Business Development Manager will play a key part growing our
              influential Member base.
            </div>
          </div>
          {/* repeate block 2*/}

          {/* repeate block 3 */}
          <div class="col-xl-12 career-box">
            <div className="row row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 class="career-post">Travel and Lifestyle Concierge</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <Link
                  className="btn btn-view-details"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo2"
                >
                  view details
                </Link>
              </div>
            </div>
          </div>
          <div id="demo2" class="collapse">
            <div className="career-box-details">
              <strong>CeoCard</strong> is looking for a{" "}
              <strong>Business Development Manager</strong> to strategize and
              execute on new partnerships, based in our New York office.
              <br></br>
              Founded in 2009, CeoCard is an exclusive membership community that
              gives entrepreneurs and business executives negotiated discounts
              across travel, lifestyle, and business brands including Park
              Hyatt, Ritz-Carlton, St Regis, Dell, Avis, IHG, and Caesars --
              just to name a few of our over 500 benefits. Our Members are
              influential in their communities, and that’s why our benefit
              partners offer our Members such unparalleled access and discounts.
              The Business Development Manager will play a key part growing our
              influential Member base.
            </div>
          </div>
          {/* repeate block 3*/}

          {/* repeate block 2 */}
          <div class="col-xl-12 career-box last-career-box">
            <div className="row row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-5">
                <h3 class="career-post">Travel and Lifestyle Concierge</h3>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-5 btn-text-right">
                <Link
                  className="btn btn-view-details"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo3"
                >
                  view details
                </Link>
              </div>
            </div>
          </div>
          <div id="demo3" class="collapse">
            <div className="career-box-details">
              <strong>CeoCard</strong> is looking for a{" "}
              <strong>Business Development Manager</strong> to strategize and
              execute on new partnerships, based in our New York office.
              <br></br>
              Founded in 2009, CeoCard is an exclusive membership community that
              gives entrepreneurs and business executives negotiated discounts
              across travel, lifestyle, and business brands including Park
              Hyatt, Ritz-Carlton, St Regis, Dell, Avis, IHG, and Caesars --
              just to name a few of our over 500 benefits. Our Members are
              influential in their communities, and that’s why our benefit
              partners offer our Members such unparalleled access and discounts.
              The Business Development Manager will play a key part growing our
              influential Member base.
            </div>
          </div>
          {/* repeate block 2*/}
        </div>
      </PagesBody>
      <LoginFooter></LoginFooter>
    </>
  );
};

export default Careers;
