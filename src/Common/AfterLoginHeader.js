import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/headerafterlogin.css"; // Make sure this CSS file exists and is correctly imported

const AfterLoginHeader = ({ allMenu, service }) => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const menuData = allMenu; // Use the custom hook to fetch menu data
  

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully");
    navigate("/");
  };

  const changeLocation = (placeToGo) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  };

  const onMenuClick = (categoryName) => {
    if (categoryName === "Hotels") {
      changeLocation("/browse_hotels");
    } else if(categoryName === "Travel"){
      changeLocation("/travel")
    }
    else {
      changeLocation("/BrowseByCategory");
    }
  };

  // Function to group menu items by MainCategory
  const groupMenuByCategory = (menuData) => {
    return menuData.reduce((acc, item) => {
      if (!acc[item.MainCategory]) {
        acc[item.MainCategory] = [];
      }
      acc[item.MainCategory].push(item);
      return acc;
    }, {});
  };

  const groupServicesBySubCategory = (services) => {
    return services.reduce((acc, service) => {
      const subCategory = service.SubCategory || "Other"; // Group by SubCategoryTitle
      if (!acc[subCategory]) {
        acc[subCategory] = [];
      }
      acc[subCategory].push(service);
      return acc;
    }, {});
  };

  const groupedMenu = groupMenuByCategory(menuData);
  const groupedServices = groupServicesBySubCategory(service);



  const getMatchingServices = (menuItem) => {
    return service.filter(s => 
      s.SubCategory === menuItem.SubCategoryName || 
      s.SubCategoryTitle === menuItem.SubCategoryTitle
    );
  };



  return (
    <>
      <div className="nav-container">
        <nav
          className={`navbar navbar-expand-lg navbar-static-top afterlogin-nav ${
            scroll ? "thin-navbar" : ""
          }`}
        >
          <Link className="navbar-brand" to="/homeafterlogin">
            <div className="logo-size-setting">
              <p>CEO CARD</p>
            </div>
          </Link>

          <div className="div-sett">
            <div className="afterlogin-nav-header">
              <Link className="btn btn-explore" to="/exploreelite">
                PREMIUM CARD
              </Link>

              <div className="account-menu">
                <ul className="nav navbar-nav">
                  <li className="account-menu-li d-xl-block d-lg-block d-md-none d-sm-none d-none">
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
                          <Link to="/Profile-Page">Profile</Link>
                        </li>
                        <li>
                          <Link to="/SpouseMembership">
                            PURCHASE SPOUSE MEMBERSHIP
                          </Link>
                        </li>
                        <li>
                          <Link to="/TeamMembership">
                            PURCHASE TEAM MEMBERSHIP
                          </Link>
                        </li>
                        <li>
                          <Link to="/refferal">
                            REFER FRIENDS, EARN REWARDS
                          </Link>
                        </li>
                        <li>
                          <Link to="/OrderMembershipCard">
                            ORDER MEMBERSHIP CARD
                          </Link>
                        </li>
                        <li>
                          <a className="dropdown-item" onClick={logout}>
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
                        <li><Link to="/homeafterlogin">US</Link></li>
                        <li><Link to="/homeafterlogin">Canada</Link></li>
                        <li><Link to="/homeafterlogin">UK</Link></li>
                        <li><Link to="/homeafterlogin">Europe</Link></li>
                        <li><Link to="/homeafterlogin">Asia</Link></li>
                        <li><Link to="/homeafterlogin">Australia</Link></li>
                        <li><Link to="/homeafterlogin">Mexico</Link></li>
                        <li><Link to="/homeafterlogin">South America</Link></li>
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
                      />
                      <span className="badge">9</span>
                    </a>
                  </li>
                  <li className="account-menu-li d-xl-block d-lg-block d-md-block d-sm-none d-none">
                    <Link to="/homeafterlogin">
                      <i className="bi bi-suit-heart" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="account-menu-li d-xl-none d-lg-none d-md-none d-sm-block d-block">
                    <Link to="/Search">
                      <i className="bi bi-search" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center-desktop margin-top-15">
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
                    <i className="bi bi-list" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>

            <div
              className="collapse navbar-collapse afterlogin-navbar-collapse"
              id="navbarTogglerDemo01"
              style={{visibility:"visible"}}
            >
              <ul className="navbar-nav beforelogin-navbar mx-auto mb-2 mb-lg-0">
                {Object.entries(groupedMenu).map(([category, items]) => (
                  <li className="nav-item dropdown has-megamenu" key={category}>
                    <Link
                      onClick={() => onMenuClick(category)}
                      className="nav-link dropdown-toggle d-xl-block d-lg-block d-md-none d-sm-none d-none"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <strong>{category}</strong>
                    </Link>
                    <div className="dropdown-menu megamenu" role="menu">
                      <div className="container">
                        <div className="row g-3">
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="row">
                              {items.map((item) => (
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 desktop-display-sett" key={item.SubCategoryName}>
                                  <div className="col-megamenu">
                                    <h6 className="megamenu-heading">
                                      <Link to="/homeafterlogin">
                                        {item.SubCategoryName}
                                      </Link>
                                    </h6>
                                    

                                    <div className="megamenu-heading-links">

                                {getMatchingServices(item).map((service) => (
                                  <p className="megamenu-p" key={service.CardTitle}>
                                    <Link to="/SubMenu" state={{ service }}>
                                      {service.CardTitle ? service.CardTitle : service.ProviderName}
                                    </Link>
                                  </p>
                                ))}
                              </div>

                                  
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 desktop-display-sett">
                            <div className="row">
                              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 col-megamenu">
                                <h6 className="megamenu-heading">
                                  <a href="/#">CEO FAVORITES</a>
                                </h6>
                                <div className="megamenu-heading-links">
                                  <div>
                                    <a href="/#">
                                      <img
                                        alt="block"
                                        style={{ width: "100%" }}
                                        src="https://d2920d93lyqeaf.cloudfront.net/images/picture_gallery_items/images/6522/gallery_unnamed-1.jpg?1706540682"
                                      />
                                    </a>
                                  </div>
                                  <h6 className="favorites-subcategory">
                                    <strong>Travel</strong>
                                  </h6>
                                  <h5 className="favorites-subcategory-person">
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
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                <li className="nav-item sm:hidden md:block  ">
                  <a className="nav-link" href="/Community">
                    <strong>community</strong>
                  </a>
                </li>
                <li className="nav-item sm:hidden md:block lg:block">
                  <a className="nav-link" href="/allbenifits">
                    <strong>all benefits</strong>
                  </a>
                </li>
                <li className="nav-item pl-4 md:hidden">
                  <button className="nav-link text-white" onClick={logout}>
                  {/* <a className="nav-link" href="/"> */}
                
                    <strong>LOG OUT</strong>
                    </button>
                  
                </li>
                <li className="nav-item">
                  <div className="d-xl-block d-lg-block d-md-none d-sm-none d-none">
                    <a className="nav-link" href="/Search">
                      <strong>
                        <i className="bi bi-search"></i> &nbsp;&nbsp; search
                      </strong>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        id="mobile-category-navbar"
        className="d-xl-none d-lg-none d-md-none d-sm-block d-block"
      >
        <div id="mobile-category-link-container">
          <ul style={{
            display: "flex",
            listStyleType: "none",
            padding: "0",
            margin: "0",
            overflowX: "auto"
          }}>
            {Object.keys(groupedMenu).map((category) => (
              <li className="mobile-category-link-wrapper" key={category}>
                <Link
                  onClick={() => onMenuClick(category)}
                  className="mobile-category-link"
                  to="#"
                >
                  <strong>{category}</strong>
                </Link>
              </li>
            ))}
            <span className="mobile-category-link-wrapper">
              <a className="mobile-category-link" href="/allbenifits">
                <strong>ALL BENEFITS</strong>
              </a>
            </span>
            <span className="mobile-category-link-wrapper">
              <a className="mobile-category-link" href="/community">
                <strong>COMMUNITY</strong>
              </a>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AfterLoginHeader;



