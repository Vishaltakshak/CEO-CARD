import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/headerafterlogin.css";
import { toast } from "react-toastify";
import { Nav } from "react-bootstrap";

const AfterLoginHeader = ({ allMenu }) => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully");
    navigate("/");
  };
  const handleServiceClick = (service) => {
    console.log(`Clicked on service: ${service.serviceProviderName}`);
  };
  // added by sk
  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }

  const onMenuClick = (categoryName) => {
    if (categoryName === "HOTELS") {
      changeLocation("/browse_hotels");
    } else {
      changeLocation("/BrowseByCategory");
    }
  };

  return (
    <>
      <div className="nav-container">
        <nav
          className={
            scroll
              ? "navbar navbar-expand-lg navbar-static-top afterlogin-nav thin-navbar"
              : "navbar navbar-expand-lg navbar-static-top afterlogin-nav"
          }
        >
          <Link className="navbar-brand" to="/homeafterlogin">
            <div className="logo-size-setting"> <p>CEO CARD</p> </div>
                  {/* <img
                    className="logo-size-setting"
                    src="././assets/img/ceo-logo-white.png"
                    alt="Logo"
                    // width={"58px"}
                    // height={50}
                  ></img> */}
                </Link>
          <div className="div-sett">
            <div className="afterlogin-nav-header">
              {/* <div className="navbar-explore-upgrade d-xl-block d-lg-block d-md-none d-sm-none d-none"> */}
                <Link className="btn btn-explore" to="/homeafterlogin">
                  Explore elite
                </Link>
              {/* </div> */}


              {/* header menu after membership expired */}
              <div className="account-menu membership-expired-menu d-none">
                <ul className="nav navbar-nav ">
                  {/* rejoin now button for desktop */}
                  <li className="account-menu-li desktop-rejoin-btn">
                    <Link className="btn btn-rejoin" to="/reactivate">
                    	REJOIN NOW 
                    </Link>
                  </li>
                  {/* rejoin now button for desktop */}

                  {/* rejoin now button for mobile */}
                  <li className="account-menu-li mobile-rejoin-btn">
                    <Link className="btn btn-rejoin" to="/reactivate">
                    REJOIN NOW <i className="bi bi-chevron-right" style={{fontSize:"10px"}}></i>
                    </Link>
                  </li>
                  {/* rejoin now button for mobile */}

                  <li className="account-menu-li">
                    <div className="reactivate-user d-xl-block d-lg-block d-md-none d-sm-none d-none" >
                      <div className="reactivate-user-name">
                        Hi, Raghavendra
                      </div>
                      <div className="reactivate-user-membership">
                        Membership Expired
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* header menu after membership expired */}



              <div className="account-menu ">
                <ul className="nav navbar-nav ">
                  <li className="account-menu-li d-xl-block d-lg-block d-md-none d-sm-none d-none ">
                    <div className="dropdown custom-nav-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="/#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="user-icon">
                          <i className="bi bi-person"></i>&nbsp;
                        </span>
                        <span className="thin-navbar-hide">
                          Hello &nbsp;
                          <span>{sessionStorage.getItem("userName")}</span>
                        </span>
                      </a>

                      <ul
                        className="dropdown-menu account-dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link to="/homeafterlogin">profile</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">account setting</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">
                            UPGRADE TO ALL ACCESS ELITE
                          </Link>
                        </li>
                        <li>
                          <Link to="/SpouseMembership">
                            PURCHASE SPOUSE MEMBERSHIP
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="/TeamMembership">
                            PURCHASE TEAM MEMBERSHIP
                          </Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">
                            REFER FRIENDS, EARN REWARDS
                          </Link>
                        </li>
                        <li>
                          <Link to="/OrderMembershipCard">
                            ORDER MEMBERSHIP CARD
                          </Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">VIEW DIGITAL CARD</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">TUTORIAL</Link>
                        </li>
                        <li>
                          <a className="dropdown-item" onClick={() => logout()}>
                            LOGOUT
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="account-menu-li d-xl-block d-lg-block d-md-none d-sm-none d-none thin-navbar-hide">
                    <div className="dropdown custom-nav-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="/#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Asia
                      </a>

                      <ul
                        className="dropdown-menu account-dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link to="/homeafterlogin">US</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">Canada</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">UK</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">Europe</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">Asia</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">Australia</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">Mexico</Link>
                        </li>
                        <li>
                          <Link to="/homeafterlogin">South America</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="account-menu-li d-xl-block d-lg-block d-md-none d-sm-none d-none thin-navbar-hide">
                    <a href="/Rewards">7,500 FCPoints™</a>
                  </li>
                  <li className="account-menu-li">
                    <a href="/Notifications">
                      <img
                        alt="Notification"
                        src="././assets/img/notification.svg"
                      ></img>
                      <span className="badge">9</span>
                    </a>
                  </li>
                  <li className="account-menu-li d-xl-block d-lg-block d-md-block d-sm-none d-none">
                    <Link to="/homeafterlogin">
                      <i class="bi bi-suit-heart" aria-hidden="true"></i>
                    </Link>
                  </li>

                  {/* search icon visible for mobile only */}
                  <li className="aa account-menu-li d-xl-none d-lg-none d-md-none d-sm-block d-block">
                    <Link to="/Search">
                      <i class="bi bi-search" aria-hidden="true"></i>
                    </Link>
                  </li>
                  {/* search icon visible for mobile only */}
                </ul>
              </div>

              <div class="text-center-desktop margin-top-15">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i class="bi bi-list" aria-hidden="true"></i>
                  </span>
                </button>

                
              </div>
            </div>
            <div
              className="collapse navbar-collapse afterlogin-navbar-collapse"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav beforelogin-navbar mx-auto mb-2 mb-lg-0 ">
                {
                  // allMenu.length > 0 &&
                  allMenu.length > 0 &&
                    allMenu.map((menu) => (
                      <li
                        class="nav-item dropdown has-megamenu"
                        key={menu.categoryId}
                      >
                        {/* menu loaded for desktop */}
                        <Link
                          // onClick={() => changeLocation("/BrowseByCategory")}
                          onClick={() => onMenuClick(menu.categoryName)}
                          className="nav-link dropdown-toggle d-xl-block d-lg-block d-md-none d-sm-none d-none"
                          // to="/BrowseByCategory"
                          // data-bs-toggle="dropdown"
                        >
                          {" "}
                          <strong>{menu.categoryName}</strong>{" "}
                        </Link>
                        {/* menu loaded for desktop */}

                        {/* menu loaded for mobile sidebar*/}
                        <Link
                          className="nav-link dropdown-toggle d-xl-none d-lg-none d-md-block d-sm-block d-block"
                          data-bs-toggle="dropdown"
                        >
                          {" "}
                          <strong>{menu.categoryName}</strong>{" "}
                        </Link>
                        {/* menu loaded for mobile sidebar*/}

                        <div class="dropdown-menu megamenu" role="menu">
                          <div className="container">
                            <div class="row g-3">
                              {/* submenu for desktop */}
                              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row">
                                  {menu.subcategories.map((subCategory) => (
                                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 desktop-display-sett">
                                      <div class="col-megamenu">
                                        <h6 class="megamenu-heading">
                                          <Link to="/homeafterlogin">
                                            {subCategory.subCategoryName}
                                          </Link>
                                        </h6>
                                        <div className="megamenu-heading-links">
                                          {subCategory.services.map(
                                            (service) => (
                                              <p className="megamenu-p">
                                                <Link
                                                  to={"/SubMenu"}
                                                  state={{ service }}
                                                >
                                                  {service.serviceProviderName}
                                                </Link>
                                              </p>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 desktop-display-sett">
                                <div className="row">
                                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 col-megamenu">
                                    <h6 class="megamenu-heading">
                                      <a href="/#">Ceo FAVORITES</a>
                                    </h6>
                                    <div className="megamenu-heading-links">
                                      <div>
                                        <a href="/#">
                                          <img
                                            alt="block"
                                            style={{ width: "100%" }}
                                            src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6522/gallery_unnamed-1.jpg?1706540682"
                                          ></img>
                                        </a>
                                      </div>
                                      <h6 class="favorites-subcategory">
                                        <strong>Travel</strong>
                                      </h6>
                                      <h5 class="favorites-subcategory-person">
                                        <a href="/#">
                                          <strong>Marriott Bonvoy™ </strong>
                                        </a>
                                      </h5>
                                      <h6 className="favorites-subcategory-para">
                                        Enroll in Marriott Platinum Elite Status
                                        Challenge
                                      </h6>
                                    </div>
                                  </div>

                                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 col-megamenu">
                                    <h6 class="megamenu-heading">
                                      <a href="/#">Ceo FAVORITES</a>
                                    </h6>
                                    <div className="megamenu-heading-links">
                                      <div>
                                        <a href="/#">
                                          <img
                                            alt="block"
                                            style={{ width: "100%" }}
                                            src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6522/gallery_unnamed-1.jpg?1706540682"
                                          ></img>
                                        </a>
                                      </div>
                                      <h6 class="favorites-subcategory">
                                        <strong>Travel</strong>
                                      </h6>
                                      <h5 class="favorites-subcategory-person">
                                        <a href="/#">
                                          <strong>Marriott Bonvoy™ </strong>
                                        </a>
                                      </h5>
                                      <h6 className="favorites-subcategory-para">
                                        Enroll in Marriott Platinum Elite Status
                                        Challenge
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* submenu for desktop */}

                              {/* submenu for mobile sidebar */}
                              <div class="col-lg-3 col-12 mobile-display-sett">
                                <hr className="menu-section-break"></hr>
                                <div class="col-megamenu">
                                  <div className="megamenu-heading-links">
                                    {menu.subcategories.map((subCategory) => (
                                      <div className="">
                                        <p className="megamenu-p">
                                          <Link to="/homeafterlogin">
                                            {subCategory.subCategoryName}
                                          </Link>
                                        </p>

                                        <div className="megamenu-heading-links">
                                          {subCategory.services.map(
                                            (service) => (
                                              <p className="megamenu-p">
                                                <Link
                                                  to={"/SubMenu"}
                                                  state={{ service }}
                                                >
                                                  {service.serviceProviderName}
                                                </Link>
                                              </p>
                                            )
                                          )}
                                        </div>
                                        {/* {/* </div> */}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <hr className="menu-section-break"></hr>
                              </div>
                              {/* submenu for mobile sidebar*/}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                }

                <li className="nav-item">
                  <a className="nav-link" href="/Community">
                    <strong>community</strong>{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/allbenifits">
                    <strong>all benefits</strong>{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <div className="d-xl-block d-lg-block d-md-none d-sm-none d-none">
                    {/* <a className="nav-link" href="/Search" /> */}
                    <a className="nav-link" href="/Search">
                      <strong>
                        <i className="bi bi-search"></i> &nbsp;&nbsp; search
                      </strong>{" "}
                    </a>
                  </div>
                </li>

                {/* Links visible for mobile only */}

                {/* explore ellite btn for mobile */}
                <hr class="menu-section-break d-xl-none d-lg-none d-md-block d-sm-block d-block"></hr>
                <li className="nav-item ">
                  <div className="navbar-explore-upgrade d-xl-none d-lg-none d-md-block d-sm-block d-block">
                    <Link className="btn btn-explore" to="/" target="_blank">
                      Explore elite
                    </Link>
                  </div>
                </li>
                {/* explore ellite btn for mobile */}
                <li className="nav-item">
                  <div className="d-xl-none d-lg-none d-md-block d-sm-block d-block">
                    <a className="nav-link" href="/#">
                      <strong>
                        <i className="bi bi-suit-heart"></i> saved & done
                      </strong>{" "}
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="d-xl-none d-lg-none d-md-block d-sm-block d-block">
                    <a className="nav-link" href="/Notifications">
                      <strong>
                        <i className="bi bi-bell"></i> notifications{" "}
                        <sup>9</sup>
                      </strong>{" "}
                    </a>
                  </div>
                </li>
                <hr class="menu-section-break d-xl-none d-lg-none d-md-block d-sm-block d-block"></hr>

                <li class="nav-item dropdown has-megamenu">
                  <div className="d-xl-none d-lg-none d-md-block d-sm-block d-block">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/#"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      <strong>account</strong>{" "}
                    </a>
                    <div class="dropdown-menu megamenu" role="menu">
                      <div className="container">
                        <div class="row g-3">
                          <div class="col-lg-3 col-12 mobile-display-sett">
                            <hr className="menu-section-break"></hr>
                            <div class="col-megamenu">
                              <div className="megamenu-heading-links">
                                <p className="megamenu-p">
                                  <Link to="/homeafterlogin">PROFILE</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/homeafterlogin">
                                    ACCOUNT SETTINGS
                                  </Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/homeafterlogin">
                                    UPGRADE TO ALL ACCESS ELITE
                                  </Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/SpouseMembership">
                                    PURCHASE SPOUSE MEMBERSHIP
                                  </Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/TeamMembership">
                                    PURCHASE TEAM MEMBERSHIP
                                  </Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/homeafterlogin">
                                    REFER FRIENDS, EARN REWARDS
                                  </Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/OrderMembershipCard">
                                    ORDER MEMBERSHIP CARD
                                  </Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/homeafterlogin">
                                    VIEW DIGITAL CARD
                                  </Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link to="/homeafterlogin">TUTORIAL</Link>
                                </p>
                                <p className="megamenu-p">
                                  <a onClick={() => logout()}>LOGOUT</a>
                                </p>
                              </div>
                            </div>
                            <hr className="menu-section-break"></hr>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown has-megamenu">
                  <div className="d-xl-none d-lg-none d-md-block d-sm-block d-block">
                    <Link
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      <strong>asia</strong>{" "}
                    </Link>
                    <div class="dropdown-menu megamenu" role="menu">
                      <div className="container">
                        <div class="row g-3">
                          <div class="col-lg-3 col-12 mobile-display-sett">
                            <hr className="menu-section-break"></hr>
                            <div class="col-megamenu">
                              <div className="megamenu-heading-links">
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">US</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">Canada</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">UK</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">Europe</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">Asia</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">Australia</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">Mexico</Link>
                                </p>
                                <p className="megamenu-p">
                                  <Link href="/homeafterlogin">
                                    South America
                                  </Link>
                                </p>
                              </div>
                            </div>
                            <hr className="menu-section-break"></hr>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Links visible for mobile only */}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* This nav links only visible for mobile header */}
      <div
        id="mobile-category-navbar"
        className="d-xl-none d-lg-none d-md-none d-sm-block d-blcok"
      >
        <div
          id="mobile-category-link-container"
          style={{ color: "inherit", textDecoration: "none", padding: "10px" }}
        >
          <ul
            style={{
              display: "flex",
              listStyleype: "none",
              padding: "0",
              margin: "0",
            }}
          >
            {allMenu.length > 0 &&
              allMenu.map((menu) => (
                <li class="mobile-category-link-wrapper" key={menu.categoryId}>
                  {/* menu loaded for Mobile header*/}
                  <Link
                    // onClick={() => changeLocation("/BrowseByCategory")}
                    onClick={() => onMenuClick(menu.categoryName)}
                    className="mobile-category-link"
                    // to="/BrowseByCategory"
                    // data-bs-toggle="dropdown"
                  >
                    {" "}
                    <strong>{menu.categoryName}</strong>{" "}
                  </Link>
                  <div className="row">
                    {menu.subcategories.map((subCategory) => (
                      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 desktop-display-sett">
                        <div class="col-megamenu">
                          <h6 class="megamenu-heading">
                            <Link to="/homeafterlogin">
                              {subCategory.subCategoryName}
                            </Link>
                          </h6>
                          <div className="megamenu-heading-links">
                            {subCategory.services.map((service) => (
                              <p className="megamenu-p">
                                <Link
                                  onClick={() => changeLocation("/SubMenu")}
                                  to={"/SubMenu"}
                                  state={{ service }}
                                >
                                  {service.serviceProviderName}
                                </Link>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            <span class="mobile-category-link-wrapper">
              <a className="mobile-category-link " href="/allbenifits">
                <strong>ALL BENEFITS</strong>
              </a>
            </span>
            <span class="mobile-category-link-wrapper">
              <a className="mobile-category-link " href="/community">
                <strong> COMMUNITY</strong>
              </a>
            </span>
          </ul>
        </div>
      </div>
      {/* This nav links only visible for mobile */}
    </>
  );
};

export default AfterLoginHeader;
