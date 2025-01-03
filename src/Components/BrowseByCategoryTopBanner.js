import React from "react";
import { Link } from "react-router-dom";
import "../css/browsebycategorytopbanner.css";
const BrowseByCategoryTopBanner = ({ allMenuNav }) => {
  return (
    <>
      <div className="container-fluid browse-category-bg">
        <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-12">
          <h1 className="browse-category-title">Featured Travel Benefits</h1>
        </div>
      </div>
      <div className="container-fluid browse-category-item">
        <div className="row">
          <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-6 browse-category-item-left">
            <div
              className="browse-category-img"
              style={{
                backgroundImage:
                  "url('https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6987/large_sixt.com-rent-a-car-for-business-sixt-products-rent.jpg')",
              }}
            >
              <Link to="/#" target="_blank">
                <div className="width-height-sett"></div>
              </Link>
            </div>
            <div className="browse-category-info">
              <h3 className="browse-category-info-title">
                <Link to="/#" target="_blank">
                  SIXT - Rent The Car
                </Link>
              </h3>
              <p className="browse-category-info-para">
                {" "}
                Elevated car rental that meets your needs across the globe
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-6 browse-category-item-right">
            <div className="browse-category-video">
              <Link to="/#" target="_blank">
                <div class="width-height-sett">
                  <video
                    poster="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/7912/gallery_Screenshot_2023-12-05_at_5.09.53_PM.png?1701814225"
                    className="browse-category-video-height"
                    autoplay="autoplay"
                    loop="loop"
                    muted="muted"
                    src="https://d2q86wmri3hsp2.cloudfront.net/system/benefits/standard_videos/000/001/110/original/Porsche_standard.mp4?1690469858"
                  ></video>
                </div>
              </Link>
            </div>
            <div className="browse-category-info">
              <h3 className="browse-category-info-title">
                <Link to="/#" target="_blank">
                  Porsche Drive
                </Link>
              </h3>
              <p className="browse-category-info-para">
                {" "}
                Waived Activation Fees on Porsche Drive Rentals and
                Subscriptions & 10% off.
              </p>
            </div>
          </div>

          {/* <ul className="navbar-nav beforelogin-navbar mx-auto mb-2 mb-lg-0">
            {allMenuNav &&
              allMenuNav.length > 0 &&
              allMenuNav.map((menu) => (
                <li
                  className="nav-item dropdown has-megamenu"
                  key={menu.categoryId}
                >
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row g-3">
                   
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="row">
                            {menu.subcategories.map((subCategory) => (
                              <div
                                className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 desktop-display-sett"
                                key={subCategory.subCategoryId}
                              >
                                <div className="col-megamenu">
                                  <h6 className="megamenu-heading">
                                    <Link to="/homeafterlogin">
                                      {subCategory.subCategoryName}
                                    </Link>
                                  </h6>
                                  <div className="megamenu-heading-links">
                                    {subCategory.services.map((service) => (
                                      <p
                                        className="megamenu-p"
                                        key={service.serviceId}
                                      >
                                        

                                        <img src={service.serviceImages} />
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default BrowseByCategoryTopBanner;
