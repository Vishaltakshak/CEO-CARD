import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {LogOut } from "lucide-react";
import { toast } from "react-toastify";
import "../css/headerafterlogin.css"; // Make sure this CSS file exists and is correctly imported

const AfterLoginHeader = ({ allMenu, service }) => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const menuData = allMenu; // Use the custom hook to fetch menu data
 

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 1);
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
    } else if(categoryName === "Business"){
      changeLocation("/business")
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
          className={`navbar navbar-expand-lg navbar-static-top afterlogin-nav  ${
            scroll ? "thin-navbar" : ""
          }`}
        >
          <Link className="navbar-brand" to="/homeafterlogin">
            <div className="logo-size-setting md:hidden sm:block">
           <p className="text-black">Ceo Card</p>
            </div>
          </Link>

          <div className="div-sett bg-white">
            <div className="afterlogin-nav-header bg-white ">
              <div className=" hidden md:block">
              <Link className="btn btn-explore hidden md:block" to="/exploreelite">
                PREMIUM CARD
              </Link></div>

              <div className="account-menu">
                <ul className="nav navbar-nav ">
                  <li className="account-menu-li d-xl-block d-lg-block d-md-none d-sm-block d-none">
                    <div className="dropdown custom-nav-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="/#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{filter:"invert(1)"}}
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
                            ORDER CEO CARD
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
                        style={{filter:"invert(1)"}}
                        className="dropdown-toggle"
                        href="/#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        DELHI
                      </a>
                      <ul
                        className="dropdown-menu account-dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                       <li><Link to="/homeafterlogin">Mumbai</Link></li>
                      <li><Link to="/homeafterlogin">Delhi</Link></li>
                      <li><Link to="/homeafterlogin">Bangalore</Link></li>
                      <li><Link to="/homeafterlogin">Hyderabad</Link></li>
                      <li><Link to="/homeafterlogin">Chennai</Link></li>
                      <li><Link to="/homeafterlogin">Kolkata</Link></li>
                      <li><Link to="/homeafterlogin">Ahmedabad</Link></li>
                      <li><Link to="/homeafterlogin">Pune</Link></li>
                      <li><Link to="/homeafterlogin">Surat</Link></li>
                      <li><Link to="/homeafterlogin">Jaipur</Link></li>
                      <li><Link to="/homeafterlogin">Lucknow</Link></li>
                      <li><Link to="/homeafterlogin">Nagpur</Link></li>
                      <li><Link to="/homeafterlogin">Visakhapatnam</Link></li>
                      <li><Link to="/homeafterlogin">Bhopal</Link></li>
                      <li><Link to="/homeafterlogin">Indore</Link></li>
                      <li><Link to="/homeafterlogin">Visakhapatnam</Link></li>
<li><Link to="/homeafterlogin">Patna</Link></li>
<li><Link to="/homeafterlogin">Vadodara</Link></li>
<li><Link to="/homeafterlogin">Coimbatore</Link></li>
<li><Link to="/homeafterlogin">Nashik</Link></li>
<li><Link to="/homeafterlogin">Aurangabad</Link></li>
<li><Link to="/homeafterlogin">Ludhiana</Link></li>
<li><Link to="/homeafterlogin">Rajkot</Link></li>
<li><Link to="/homeafterlogin">Agra</Link></li>
<li><Link to="/homeafterlogin">Mysore</Link></li>

                      </ul>
                    </div>
                  </li>
                  <li className="account-menu-li d-xl-block d-lg-block d-md-none d-sm-none d-none thin-navbar-hide text-black">
                    <a className="text-black" href="/Rewards">7,500 CCPoints™</a>
                  </li>
                  <li className="account-menu-li">
                    <Link to='/Notifications'>
                   
                      <img
                        alt="Notification"
                        src="././assets/img/notification.svg"
                        style={{filter:"invert(1)"}}
                      />
                      
                    </Link>
                    
                  </li>
                  {/* <li className="account-menu-li d-xl-block d-lg-block d-md-block d-sm-none d-none">
                    <Link to="/homeafterlogin">
                      <i className="bi bi-suit-heart" aria-hidden="true"></i>
                    </Link>
                  </li> */}
                  <li className="account-menu-li d-xl-block d-lg-block d-md-none d-sm-block d-block">
                    <Link to="/Search">
                      <i className="bi bi-search text-black" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center-desktop margin-top-15 ">
              <button
                    className="navbar-toggler text-black flex items-center gap-2"
                    type="button"
                    onClick={logout}
                  >
                    <LogOut className="w-6 h-6 rotate-180" />
                    
              </button>
                {/* <button
                  className="navbar-toggler text-black"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="bi bi-list hidden" aria-hidden="true"></i>
                  </span>
                </button> */}
              </div>
            </div>

            <div
              className="collapse navbar-collapse afterlogin-navbar-collapse bg-white"
              id="navbarTogglerDemo01"
              style={{visibility:"visible"}}
            >
              <ul className="navbar-nav beforelogin-navbar dropdown-menu-start mx-auto mb-2 mb-lg-0">
                {Object.entries(groupedMenu).map(([category, items]) => (
                  <li className="nav-item dropdown has-megamenu text-black" key={category}>
                    <Link
                      onClick={() => onMenuClick(category)}
                      className="nav-link dropdown-toggle d-xl-block d-lg-block d-md-none d-sm-none d-none text-black"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <strong className="text-black">{category}</strong>
                      
                      
                    </Link>

                    
                    
                    
                   
                   
                    
                    <div className="dropdown-menu megamenu bg-white text-black" role="menu">
                      <div className="bg-white text-black ml-2">
                        <div className="row g-3 ">
                          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ml-4">
                            <div className="row">
                              
                              {items.map((item) => (
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 desktop-display-sett text-black" key={item.SubCategoryName}>
                                  <div className="col-megamenu ">
                                    <h6 className="megamenu-heading text-black ">
                                      <Link to="/homeafterlogin">
                                        {item.SubCategoryName}
                                      </Link>
                                    </h6>
                                    

                                    <div className="megamenu-heading-links">

                                {getMatchingServices(item).map((service) => (
                                  <p className="megamenu-p text-black" key={service.CardTitle}>
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
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12 desktop-display-sett">
                            <div className="row">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 col-megamenu">
                                
                                <div className="megamenu-heading-links">
                                  <div>
                                    
                                    <a href="/OrderMembershipCard">
                                      <img
                                        alt="block"
                                        style={{ width: "100%", }}
                                        src={`${process.env.PUBLIC_URL}/assets/img/CEOCARD.jpg`}
                                      />
                                    </a>
                                  </div>
                                  
                                  <h5 className="favorites-subcategory-person">
                                    <a href="/OrderMembershipCard">
                                      <strong className="text-black" style={{fontSize:'13px'}}>PURCHASE YOUR MEMBERSHIP </strong>
                                    </a>
                                  </h5>
                                  <h6 className="favorites-subcategory-para text-black">
                                    Enroll and enjoy Platinum Elite Status
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
                )
                
                )}
                <li className="nav-item hidden md:block  ">
                <Link to="/homeafterlogin">
                <img
                    className="w-[4rem]  block "
                    src="././assets/img/ceo-logo-white.png"
                    alt="Logo"
                    style={{filter:"invert(1)"}}
                  />
                 </Link>
                </li>

                <li className="nav-item sm:hidden md:block  ">
                  <a className="nav-link" href="/Community">
                    <strong className="text-black">community</strong>
                  </a>
                </li>
                <li className="nav-item sm:hidden md:block lg:block">
                  <a className="nav-link" href="/allbenifits">
                    <strong className="text-black">all benefits</strong>
                  </a>
                </li>


                <li className="nav-item pl-4 md:hidden">
                  <button className="nav-link text-black" onClick={logout}>
                  
                
                    LOG OUT
                    </button>
                  
                </li>
                <li className="nav-item">
                  <div className="d-xl-block d-lg-block d-md-none d-sm-none d-none">
                    <a className="nav-link" href="/Search">
                      <strong className="text-black">
                        <i className="bi bi-search" ></i> &nbsp;&nbsp; search
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
              <li className="mobile-category-link-wrapper text-black" key={category}>
                <Link
                  onClick={() => onMenuClick(category)}
                  className="mobile-category-link text-black"
                  to="#"
                >
                  <strong className="text-black">{category}</strong>
                </Link>
              </li>
            ))}
            
            {/* <span className="mobile-category-link-wrapper">
              <a className="mobile-category-link" href="/allbenifits">
                <strong>ALL BENEFITS</strong>
              </a>
            </span>
            <span className="mobile-category-link-wrapper">
              <a className="mobile-category-link" href="/community">
                <strong>COMMUNITY</strong>
              </a>
            </span> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AfterLoginHeader;



