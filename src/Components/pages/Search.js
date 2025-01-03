import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/pages/search.css";
const Search = () => {
  return (
    <>

        <div className="container-fluid menusearch-container">
            <div className="col-xl-12 col-12">
                <Link  to="/homeafterlogin" class="search-close-icon d-xl-block d-lg-block d-md-block d-sm-none d-none">
                    <h4>CLOSE</h4>
                </Link>
                <Link to="/" class="search-close-icon d-xl-none d-lg-none d-md-none d-sm-block d-block">
                    <img alt="close" src="././assets/img/Submenu/close-icon.svg"></img>
                </Link>
            </div>
            <div className="col-xl-8 col-xxl-8 col-lg-8 col-md-10 col-sm-12 mx-auto col-12 menusearch-container-child">
                <form class="menusearch-form">
                    <div className="col-xl-12 d-flex justify-content-center align-items-center" style={{position:"relative"}}>
                        <Link to="/#">
                            <img alt="search" class="menusearch-search-icon" src="././assets/img/Search/Search.svg"/>
                        </Link>
                        <input name="focus" className="menusearch-form-input" type="text" placeholder="What are you looking for?" required />
                        <button className="menusearch-close-icon" type="reset"></button>
                    </div>
                </form>

                <div className="col-xl-12 search-history">
                    <div className="search-history-container">
                        <h5>YOUR RECENT SEARCHES</h5>
                            <p className="search-history-p"><Link className="search-history-term">chikago</Link></p>
                            <p className="search-history-p"><Link className="search-history-term">hotel</Link></p>
                            <p className="search-history-p"><Link className="search-history-term">fd</Link></p>
                            <p className="search-history-p"><Link className="search-history-term">fd</Link></p>
                    </div>
                </div>


                <div className="col-xl-12 search-history">
                    <div className="search-history-container">
                        <h5>MOST POPULAR SEARCHES</h5>
                            <p className="search-history-p"><Link className="search-history-term">flowers</Link></p>
                            <p className="search-history-p"><Link className="search-history-term">airlines</Link></p>
                            <p className="search-history-p"><Link className="search-history-term">car rentals</Link></p>
                            <p className="search-history-p"><Link className="search-history-term">elite</Link></p>
                            <p className="search-history-p"><Link className="search-history-term">hotels in new york</Link></p>
                    </div>
                </div>
            </div>

        </div>
    </>
  );
};

export default Search;
