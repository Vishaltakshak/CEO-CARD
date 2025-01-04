import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BeforeLoginHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
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
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-full left-0 w-full lg:w-auto bg-transparent mt-2 lg:mt-0 p-4 lg:p-0`}>
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
              <li>
                <Link
                  className="text-white font-semibold hover:text-gray-300 block"
                  to="/about_us"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-semibold hover:text-gray-300 block"
                  to="/LoginPage"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  className="text-white font-semibold hover:text-gray-300 block"
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
  );
};

export default BeforeLoginHeader;