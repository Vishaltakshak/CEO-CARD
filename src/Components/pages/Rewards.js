import { Link } from "react-router-dom";
//import HomePageHeading from "../HomePageHeading";
import AfterLoginLayout from "../layouts/AfterLoginLayout";
import ScrollTotop from "../ScrollTotop";
import "../../css/pages/rewards.css";

const Rewards = () => {
  return (
    <>
      <AfterLoginLayout>
        <div className="container-fluid rewards-block-parent">
          <div className="container pe-0 ps-0">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <h1
                className="home-heading"
                style={{ textTransform: "capitalize" }}
              >
                Redeem Your FCPoints<sup>TM</sup>
              </h1>
              <Link
                style={{ textDecoration: "none" }}
                className="home-heading-anchor"
                onClick={() => {
                  const element = document.getElementById("earnpts");
                  element?.scrollIntoView({
                    behavior: "smooth",
                    top: 0,
                  });
                }}
              >
                Learn more about how you can{" "}
                <span style={{ textDecoration: "underline" }}>
                  earn FCPoints
                </span>
              </Link>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 rewards-block-child">
              <div className="row">
                {/* repeate block */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="reward-column">
                    <div className="reward-info">
                      <img
                        alt="Rewards"
                        class="reward-image"
                        src="../assets/img/reward/reward-img1.jpg"
                      />
                      <div class="reward-details">
                        <p className="reward-details-heading">
                          Amazon eGift Card
                        </p>
                        <p className="reward-details-subheading">
                          $200 - $500 Gift Cards
                        </p>
                        <p
                          style={{ color: "#8f8f8f" }}
                          className="reward-details-subheading"
                        >
                          50,000 - 100,000 POINTS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* repeate block */}

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="reward-column">
                    <div className="reward-info">
                      <img
                        alt="Rewards"
                        class="reward-image"
                        src="../assets/img/reward/reward-img1.jpg"
                      />
                      <div class="reward-details">
                        <p className="reward-details-heading">
                          Amazon eGift Card
                        </p>
                        <p className="reward-details-subheading">
                          $200 - $500 Gift Cards
                        </p>
                        <p
                          style={{ color: "#8f8f8f" }}
                          className="reward-details-subheading"
                        >
                          50,000 - 100,000 POINTS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="reward-column">
                    <div className="reward-info">
                      <img
                        alt="Rewards"
                        class="reward-image"
                        src="../assets/img/reward/reward-img1.jpg"
                      />
                      <div class="reward-details">
                        <p className="reward-details-heading">
                          Amazon eGift Card
                        </p>
                        <p className="reward-details-subheading">
                          $200 - $500 Gift Cards
                        </p>
                        <p
                          style={{ color: "#8f8f8f" }}
                          className="reward-details-subheading"
                        >
                          50,000 - 100,000 POINTS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="reward-column">
                    <div className="reward-info">
                      <img
                        alt="Rewards"
                        class="reward-image"
                        src="../assets/img/reward/reward-img1.jpg"
                      />
                      <div class="reward-details">
                        <p className="reward-details-heading">
                          Amazon eGift Card
                        </p>
                        <p className="reward-details-subheading">
                          $200 - $500 Gift Cards
                        </p>
                        <p
                          style={{ color: "#8f8f8f" }}
                          className="reward-details-subheading"
                        >
                          50,000 - 100,000 POINTS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="reward-column">
                    <div className="reward-info">
                      <img
                        alt="Rewards"
                        class="reward-image"
                        src="../assets/img/reward/reward-img1.jpg"
                      />
                      <div class="reward-details">
                        <p className="reward-details-heading">
                          Amazon eGift Card
                        </p>
                        <p className="reward-details-subheading">
                          $200 - $500 Gift Cards
                        </p>
                        <p
                          style={{ color: "#8f8f8f" }}
                          className="reward-details-subheading"
                        >
                          50,000 - 100,000 POINTS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="earnpts" className="container-fluid earnpt-block-parent">
          <div className="container-fluid pe-0 ps-0">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <h1
                className="home-heading"
                style={{ textTransform: "capitalize" }}
              >
                How You Can Earn Points
              </h1>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 earnpt-block-child">
              <div className="row">
                {/* repeate block */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 earn-more-column earnpt-block-parent-left0">
                  <img
                    alt="earn points"
                    className="earn-more-image d-xl-block d-lg-block d-md-none d-sm-none d-none "
                    src="../assets/img/reward/earn-point-1.png"
                  />
                  <div className="earn-more-details">
                    <h5 className="earn-more-details-title">
                      Add your Spouse or Significant Other
                    </h5>
                    <p className="earn-more-details-p">
                      Earn 10,000 FCPoints when you purchase a companion
                      Membership
                    </p>
                    <Link className="btn btn-earn-points" to="/#">
                      ADD SPOUSE
                    </Link>
                  </div>
                </div>
                {/* repeate block */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 earn-more-column earnpt-block-parent-left0-right0">
                  <img
                    alt="earn points"
                    className="earn-more-image d-xl-block d-lg-block d-md-none d-sm-none d-none "
                    src="../assets/img/reward/earn-point-2.jpg"
                  />
                  <div className="earn-more-details">
                    <h5 className="earn-more-details-title">
                      Invite New FC Members
                    </h5>
                    <p className="earn-more-details-p">
                      Earn 20,000 FCPoints for each Member referral that joins
                      CeoCard
                    </p>
                    <Link className="btn btn-earn-points" to="/#">
                      SEND A REFERRAL
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 earn-more-column earnpt-block-parent-right0">
                  <img
                    alt="earn points"
                    className="earn-more-image d-xl-block d-lg-block d-md-none d-sm-none d-none "
                    src="../assets/img/reward/earn-point-3.jpg"
                  />
                  <div className="earn-more-details">
                    <h5 className="earn-more-details-title">
                      Gift Memberships
                    </h5>
                    <p className="earn-more-details-p">
                      Earn 20,000 FCPoints for each Gift Membership purchased
                    </p>
                    <Link className="btn btn-earn-points" to="/#">
                      GIFT A MEMBERSHIP
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid rewards-block-parent pts-container">
          <div className="container pe-0 ps-0">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <h1
                className="home-heading"
                style={{ textTransform: "capitalize" }}
              >
                FCPoints Activity
              </h1>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 rewards-block-child">
              <div className="row points-activity-headers">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-3 col-sm-3 d-xxl-block  d-xl-block d-lg-block d-none d-sm-none d-md-none">
                  Date
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-7 col-sm-7">
                  Points Activity
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-5 col-sm-5">
                  Points Earned
                </div>
              </div>

              <div className="row points-activity-row row-odd">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-3 col-sm-3 d-xxl-block  d-xl-block d-lg-block d-none d-sm-none d-md-none">
                  January 13 at 1:25 AM
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-7 col-sm-7 ">
                  <div className="truncated-xs">
                    New Member Promotion: 5,000 FCPoints for Redeeming First
                    Benefit
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-5 col-sm-5">
                  5,000
                </div>
              </div>

              <div className="row points-activity-row row-even">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-3 col-sm-3 d-xxl-block  d-xl-block d-lg-block d-none d-sm-none d-md-none">
                  January 12 at 10:08 PM
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-7 col-sm-7 ">
                  <div className="truncated-xs">Welcome to CeoCard</div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-5 col-sm-5">
                  2,500
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
        <ScrollTotop></ScrollTotop>
      </AfterLoginLayout>
    </>
  );
};

export default Rewards;
