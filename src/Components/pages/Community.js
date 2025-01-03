import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommunitySingleBlock from "./CommunitySingleBlock";
import ScrollTotop from "../ScrollTotop";
import "../../css/pages/community.css";
import AfterLoginLayout from "../layouts/AfterLoginLayout";
import CommunityApi from "../../Api/CommunityApi";

const Community = () => {
  const [community, setCommunity] = useState([]);
  const [category, setCategory] = useState(1);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const communityData = async () => {
    const data = await CommunityApi(category);
    setCommunity(data);
  };

  useEffect(() => {
    communityData(category);
  }, [category]);

  //state for filter by category in mobile
  const [isfiltercategory, setFiltercategory] = useState("false");
  const handleFiltercategory = () => {
    setFiltercategory(!isfiltercategory);
  };

  //state for filter by newest and popular in mobile
  const [isfilternewest, setFilternewest] = useState("false");
  const handleFilternewest = () => {
    setFilternewest(!isfilternewest);
  };
  return (
    <>
      <AfterLoginLayout>
        <div className="container-fluid community-page-container ps-0 pe-0">
          <Link to="/#" target="_self">
            <div className="community-child-container">
              <div className="community-child-headings">
                <h3>COMMUNITY</h3>
                <h1>INSIDER BENEFITS CREATED BY FELLOW CeoCARD MEMBERS</h1>
              </div>
              <div className="community-child-info-container">
                <div className="community-child-info-left">
                  <h4 className="community-child-info-left-title">
                    ORLEBAR BROWN
                  </h4>
                  <h5 className="community-child-info-left-subtitle">
                    SAVE 20%
                  </h5>
                </div>

                <div className="community-child-info-right">
                  <div className="created-by-inner">
                    <div className="created-by-avatar-container">
                      <h5>CREATED BY:</h5>
                      <img
                        alt="user"
                        className="avatar-img-sett"
                        src="././assets/img/COMMUNITY/community-person.jpeg"
                      ></img>
                    </div>
                    <div class="avatar-detail">
                      <h4>ADAM B</h4>
                      <h5>FOUNDER @ ORLEBAR BROWN</h5>
                      <h5>FC MEMBER SINCE 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="container-fluid community-filter-container">
          <div className="container community-filter-container-child ps-0 pe-0 ">
            <div className="community-members-info">
              <img
                alt="stacked"
                className="community-stacked-avatars-image"
                src="../assets/img/COMMUNITY/stacked-img.png"
              ></img>
              <h4 className="stacked-member-count">50+ COMMUNITY BENEFITS</h4>
            </div>
            <div className="community-filters">
              <h4 className="stacked-member-count filter-text-mb">
                Filter By:
              </h4>
              {/* filters section only visible for desktop view */}
              <div className="d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none">
                <div className="filter-buttons">
                  <div class="dropdown community-select-ui">
                    <button
                      class="community-category-option select-dark-weight dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Business
                    </button>
                    <ul
                      class="dropdown-menu community-dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          class="dropdown-item filter-option-select"
                          to="/#"
                        >
                          Business
                          <img
                            alt="Right arrow"
                            class="filter-option-select-arrow"
                            src="././assets/img/COMMUNITY/right-arrow.png"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link
                          class="dropdown-item filter-option-select"
                          to="/#"
                        >
                          Lifestyle
                          <img
                            alt="Right arrow"
                            class="filter-option-select-arrow"
                            src="././assets/img/COMMUNITY/right-arrow.png"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link
                          class="dropdown-item filter-option-select"
                          to="/#"
                        >
                          Travel
                          <img
                            alt="Right arrow"
                            class="filter-option-select-arrow"
                            src="././assets/img/COMMUNITY/right-arrow.png"
                          ></img>
                        </Link>
                      </li>
                    </ul>
                    <span class="communityselect-box-icon">
                      <img
                        className="select-arrow"
                        alt="arrow"
                        src="././assets/img/Submenu/select-arrow.svg"
                      ></img>
                    </span>
                  </div>
                  <div class="dropdown community-select-ui">
                    <button
                      class="community-category-option  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Newest
                    </button>
                    <ul
                      class="dropdown-menu community-dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <Link
                          class="dropdown-item filter-option-select select-dark-weight "
                          to="/#"
                        >
                          Newest
                          <img
                            alt="Right arrow"
                            class="filter-option-select-arrow"
                            src="././assets/img/COMMUNITY/right-arrow.png"
                          ></img>
                        </Link>
                      </li>
                      <li>
                        <Link
                          class="dropdown-item filter-option-select select-dark-weight "
                          to="/#"
                        >
                          Popular
                          <img
                            alt="Right arrow"
                            class="filter-option-select-arrow"
                            src="././assets/img/COMMUNITY/right-arrow.png"
                          ></img>
                        </Link>
                      </li>
                    </ul>
                    <span class="communityselect-box-icon">
                      <img
                        className="select-arrow"
                        alt="arrow"
                        src="././assets/img/Submenu/select-arrow.svg"
                      ></img>
                    </span>
                  </div>
                  {/* <div className="community-select-ui">
                                <select class="community-category-option" >
                                    <option value="npopularewest"> Newest</option>
                                    <option value="newest">Popular</option>
                                </select>
                                <span class="communityselect-box-icon">
                                    <img className="select-arrow" alt="arrow" src="././assets/img/Submenu/select-arrow.svg"></img>
                                </span>
                            </div> */}

                  <div className="community-select-ui mobile-full-width">
                    <Link
                      style={{ justifyContent: "center" }}
                      class="community-category-option"
                      to="/#"
                    >
                      Reset Filters
                    </Link>
                  </div>
                </div>
              </div>
              {/* filters section only visible for desktop view */}

              {/* filters section only visible for mobile and ipad portrait view */}
              <div className="col-12 d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block d-block">
                <div
                  className="row"
                  style={{ justifyContent: "space-between" }}
                >
                  <div
                    className="community-select-ui"
                    onClick={handleFiltercategory}
                  >
                    <Link class="community-category-option select-dark-weight">
                      Categories
                      <span class="communityselect-box-icon">
                        <img
                          className="select-arrow"
                          alt="arrow"
                          src="././assets/img/Submenu/select-arrow.svg"
                        ></img>
                      </span>
                    </Link>
                  </div>

                  <div
                    className="community-select-ui"
                    onClick={handleFilternewest}
                  >
                    <Link class="community-category-option">
                      Newest
                      <span class="communityselect-box-icon">
                        <img
                          className="select-arrow"
                          alt="arrow"
                          src="././assets/img/Submenu/select-arrow.svg"
                        ></img>
                      </span>
                    </Link>
                  </div>

                  <div className="community-select-ui mobile-full-width">
                    <Link
                      style={{ justifyContent: "center" }}
                      class="community-category-option"
                      to="/#"
                    >
                      Reset
                    </Link>
                  </div>
                </div>

                {/* block open on category dropdown */}

                <div
                  className={
                    isfiltercategory
                      ? "mobile-category-filter mob-cate-dropdown"
                      : "mobile-category-filter mob-cate-dropdown showcategory-box"
                  }
                >
                  <Link
                    onClick={handleFiltercategory}
                    class="mobile-filter-dropdown-close"
                  >
                    X
                  </Link>
                  <ul className="mobile-category-filter-ul">
                    <li className="mobile-category-filter-li">
                      <Link className="mobile-category-filter-a" to="/#">
                        Business
                        <img
                          alt="Right arrow"
                          class="filter-option-select-arrow-mob"
                          src="././assets/img/COMMUNITY/right-arrow.png"
                        ></img>
                      </Link>
                    </li>
                    <li className="mobile-category-filter-li">
                      <Link className="mobile-category-filter-a" to="/#">
                        Lifestyle
                        <img
                          alt="Right arrow"
                          class="filter-option-select-arrow-mob"
                          src="././assets/img/COMMUNITY/right-arrow.png"
                        ></img>
                      </Link>
                    </li>
                    <li className="mobile-category-filter-li">
                      <Link className="mobile-category-filter-a" to="/#">
                        Travel
                        <img
                          alt="Right arrow"
                          class="filter-option-select-arrow-mob"
                          src="././assets/img/COMMUNITY/right-arrow.png"
                        ></img>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* block open on category dropdown */}

                {/* block open on newest dropdown */}
                <div
                  className={
                    isfilternewest
                      ? "mobile-category-filter mob-newest-dropdown"
                      : "mobile-category-filter mob-newest-dropdown shownewest-box"
                  }
                >
                  <Link
                    onClick={handleFilternewest}
                    class="mobile-filter-dropdown-close"
                  >
                    X
                  </Link>
                  <ul className="mobile-category-filter-ul">
                    <li className="mobile-category-filter-li">
                      <Link className="mobile-category-filter-a" to="/#">
                        Newest
                        <img
                          alt="Right arrow"
                          class="filter-option-select-arrow-mob"
                          src="././assets/img/COMMUNITY/right-arrow.png"
                        ></img>
                      </Link>
                    </li>
                    <li className="mobile-category-filter-li">
                      <Link className="mobile-category-filter-a" to="/#">
                        Popular
                        <img
                          alt="Right arrow"
                          class="filter-option-select-arrow-mob"
                          src="././assets/img/COMMUNITY/right-arrow.png"
                        ></img>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* block open on newest dropdown */}
              </div>
              {/* filters section only visible for mobile and ipad portrait view */}
            </div>
          </div>
        </div>
        <CommunitySingleBlock></CommunitySingleBlock>
        <ScrollTotop></ScrollTotop>
      </AfterLoginLayout>
    </>
  );
};

export default Community;
