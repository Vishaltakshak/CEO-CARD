import React from "react";
// import "../css/home.css";
import { Link } from "react-router-dom";

const BeforLoginHeader = (props) => {
  return (
    <>
      <nav className="bg-transparent py-4 absolute z-[100] w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link className="navbar-brand" to="/#">
              <img
                className="w-[4rem]"
                src="././assets/img/ceo-logo-white.png"
                alt="Logo"
              />
            </Link>

            <button
              className="lg:hidden text-white"
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

            <div className="hidden lg:flex space-x-6">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    className="text-white font-semibold hover:text-gray-300"
                    aria-current="page"
                    to="/about_us"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white font-semibold hover:text-gray-300"
                    to="/LoginPage"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white font-semibold hover:text-gray-300"
                    to="/signupnew"
                  >
                    Join
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BeforLoginHeader;