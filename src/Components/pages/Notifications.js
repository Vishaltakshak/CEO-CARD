import React from "react";
import { Link } from "react-router-dom";
import AfterLoginHeader from "../../Common/AfterLoginHeader";
import ScrollTotop from "../ScrollTotop";
import AfterLoginFooter from "../../Common/AfterLoginFooter";
import "../../css/pages/notifications.css";
import AfterLoginLayout from "../layouts/AfterLoginLayout";

const Notifications = () => {
  return (
    <>
      <AfterLoginLayout>
      <div className="container-fluid notify-container ps-0 pe-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <ul
                className="nav nav-tabs notify-nav justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link active "
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <h5>inbox</h5>
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <h5>starred</h5>
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <h5>trash</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12  notify-list">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {/* Inbox notifications */}
                  <div className="row">
                    <div className="notify-accordian">
                      <div className="accordion " id="accordionFlush1">
                        <div className="accordion-item notify-accordian-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingOne1"
                          >
                            <button
                              className="accordion-button notify-accord-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne1"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne1"
                            >
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-8 col-6 col-sm-8 div1">
                                  <div className="new-message-indication"></div>
                                  New Benefit Announcement: Inspirato
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-6 col-sm-4  notify-float-right">
                                  <div className="notify-dt">June 6, 2024</div>
                                  <div className="notify-option">
                                    <p className="star-link">
                                      <i className="bi bi-star"></i>&nbsp;
                                      <span>Star</span>
                                    </p>
                                    <p className="star-link">
                                      <i className="bi bi-trash"></i>&nbsp;
                                      <span>Delete</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-12 col-sm-12 div2">
                                  <p>
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                  </p>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne1"
                            className="accordion-collapse collapse custom-collapse"
                            aria-labelledby="flush-headingOne1"
                            data-bs-parent="#accordionFlush1"
                          >
                            <div className="row">
                              <div className="accordion-body">
                                Founded in 2008 with a collection of dresses
                                celebrated for their cut and fit, Victoria
                                Beckham’s eponymous label forms the basis of the
                                modern woman’s wardrobe; versatile and wearable
                                yet rooted in modernity with a sophisticated
                                ease. Developed at the Victoria Beckham atelier
                                in London, today the global brand offering
                                includes ready-to-wear, footwear, expertly
                                crafted eyewear, and timeless leather goods for
                                CeoCard Members to discover online.<br></br>
                                <Link to="https://Ceocard.com/benefits/sixt-rent-a-car">
                                  <img
                                    className="img-fluid"
                                    alt="Sixt Rent a Car"
                                    src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6987/gallery_sixt.com-rent-a-car-for-business-sixt-products-rent.jpg?1673919239"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item notify-accordian-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingOne2"
                          >
                            <button
                              className="accordion-button notify-accord-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne2"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne2"
                            >
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-8 col-6 col-sm-8 div1">
                                  New Benefit Announcement: Seabourn Cruises
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-6 col-sm-4  notify-float-right">
                                  <div className="notify-dt">June 6, 2024</div>
                                  <div className="notify-option">
                                    <p className="star-link">
                                      <i className="bi bi-star"></i>&nbsp;
                                      <span>Star</span>
                                    </p>
                                    <p className="star-link">
                                      <i className="bi bi-trash"></i>&nbsp;
                                      <span>Delete</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-12 col-sm-12 div2">
                                  <p>
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                  </p>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne2"
                            className="accordion-collapse collapse custom-collapse"
                            aria-labelledby="flush-headingOne2"
                            data-bs-parent="#accordionFlush1"
                          >
                            <div className="row">
                              <div className="accordion-body">
                                Founded in 2008 with a collection of dresses
                                celebrated for their cut and fit, Victoria
                                Beckham’s eponymous label forms the basis of the
                                modern woman’s wardrobe; versatile and wearable
                                yet rooted in modernity with a sophisticated
                                ease. Developed at the Victoria Beckham atelier
                                in London, today the global brand offering
                                includes ready-to-wear, footwear, expertly
                                crafted eyewear, and timeless leather goods for
                                CeoCard Members to discover online.<br></br>
                                <Link to="https://Ceocard.com/benefits/sixt-rent-a-car">
                                  <img
                                    className="img-fluid"
                                    alt="Sixt Rent a Car"
                                    src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6987/gallery_sixt.com-rent-a-car-for-business-sixt-products-rent.jpg?1673919239"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item notify-accordian-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingOne3"
                          >
                            <button
                              className="accordion-button notify-accord-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne3"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne3"
                            >
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-8 col-6 col-sm-8 div1">
                                  New Benefit Announcement: Seabourn Cruises
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-6 col-sm-4  notify-float-right">
                                  <div className="notify-dt">June 6, 2024</div>
                                  <div className="notify-option">
                                    <p className="star-link">
                                      <i className="bi bi-star"></i>&nbsp;
                                      <span>Star</span>
                                    </p>
                                    <p className="star-link">
                                      <i className="bi bi-trash"></i>&nbsp;
                                      <span>Delete</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-12 col-sm-12 div2">
                                  <p>
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                  </p>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne3"
                            className="accordion-collapse collapse custom-collapse"
                            aria-labelledby="flush-headingOne3"
                            data-bs-parent="#accordionFlush1"
                          >
                            <div className="row">
                              <div className="accordion-body">
                                Founded in 2008 with a collection of dresses
                                celebrated for their cut and fit, Victoria
                                Beckham’s eponymous label forms the basis of the
                                modern woman’s wardrobe; versatile and wearable
                                yet rooted in modernity with a sophisticated
                                ease. Developed at the Victoria Beckham atelier
                                in London, today the global brand offering
                                includes ready-to-wear, footwear, expertly
                                crafted eyewear, and timeless leather goods for
                                CeoCard Members to discover online.<br></br>
                                <Link to="https://Ceocard.com/benefits/sixt-rent-a-car">
                                  <img
                                    className="img-fluid"
                                    alt="Sixt Rent a Car"
                                    src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6987/gallery_sixt.com-rent-a-car-for-business-sixt-products-rent.jpg?1673919239"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Inbox notifications */}
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  {/* starred notifications */}
                  <div className="row">
                    <div className="notify-accordian">
                      <div className="accordion " id="accordionFlush2">
                        <div className="accordion-item notify-accordian-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingTwo1"
                          >
                            <button
                              className="accordion-button notify-accord-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo1"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo1"
                            >
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-8 col-6 col-sm-8 div1">
                                  <div className="new-message-indication"></div>
                                  New Benefit Announcement: Inspirato
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-6 col-sm-4  notify-float-right">
                                  <div className="notify-dt">June 6, 2024</div>
                                  <div className="notify-option">
                                    <p className="star-link">
                                      <i className="bi bi-star"></i>&nbsp;
                                      <span>Star</span>
                                    </p>
                                    <p className="star-link">
                                      <i className="bi bi-trash"></i>&nbsp;
                                      <span>Delete</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-12 col-sm-12 div2">
                                  <p>
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                  </p>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo1"
                            className="accordion-collapse collapse custom-collapse"
                            aria-labelledby="flush-headingTwo1"
                            data-bs-parent="#accordionFlush2"
                          >
                            <div className="row">
                              <div className="accordion-body">
                                Founded in 2008 with a collection of dresses
                                celebrated for their cut and fit, Victoria
                                Beckham’s eponymous label forms the basis of the
                                modern woman’s wardrobe; versatile and wearable
                                yet rooted in modernity with a sophisticated
                                ease. Developed at the Victoria Beckham atelier
                                in London, today the global brand offering
                                includes ready-to-wear, footwear, expertly
                                crafted eyewear, and timeless leather goods for
                                CeoCard Members to discover online.<br></br>
                                <Link to="https://Ceocard.com/benefits/sixt-rent-a-car">
                                  <img
                                    className="img-fluid"
                                    alt="Sixt Rent a Car"
                                    src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6987/gallery_sixt.com-rent-a-car-for-business-sixt-products-rent.jpg?1673919239"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* starred notifications */}
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  {/* Trash notifications */}
                  <div className="row">
                    <div className="notify-accordian">
                      <div className="accordion " id="accordionFlush3">
                        <div className="accordion-item notify-accordian-item">
                          <h2
                            className="accordion-header"
                            id="flush-headingThree1"
                          >
                            <button
                              className="accordion-button notify-accord-btn collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree1"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree1"
                            >
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-8 col-6 col-sm-8 div1">
                                  <div className="new-message-indication"></div>
                                  New Benefit Announcement: Inspirato
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-6 col-sm-4  notify-float-right">
                                  <div className="notify-dt">June 6, 2024</div>
                                  <div className="notify-option">
                                    <p className="star-link">
                                      <i className="bi bi-star"></i>&nbsp;
                                      <span>Star</span>
                                    </p>
                                    <p className="star-link">
                                      <i className="bi bi-trash"></i>&nbsp;
                                      <span>Delete</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-12 col-sm-12 div2">
                                  <p>
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the
                                  </p>
                                </div>
                              </div>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree1"
                            className="accordion-collapse collapse custom-collapse"
                            aria-labelledby="flush-headingThree1"
                            data-bs-parent="#accordionFlush3"
                          >
                            <div className="row">
                              <div className="accordion-body">
                                Founded in 2008 with a collection of dresses
                                celebrated for their cut and fit, Victoria
                                Beckham’s eponymous label forms the basis of the
                                modern woman’s wardrobe; versatile and wearable
                                yet rooted in modernity with a sophisticated
                                ease. Developed at the Victoria Beckham atelier
                                in London, today the global brand offering
                                includes ready-to-wear, footwear, expertly
                                crafted eyewear, and timeless leather goods for
                                CeoCard Members to discover online.<br></br>
                                <Link to="https://Ceocard.com/benefits/sixt-rent-a-car">
                                  <img
                                    className="img-fluid"
                                    alt="Sixt Rent a Car"
                                    src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6987/gallery_sixt.com-rent-a-car-for-business-sixt-products-rent.jpg?1673919239"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Trash notifications */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTotop></ScrollTotop>
      </AfterLoginLayout>
    </>
  );
};

export default Notifications;
