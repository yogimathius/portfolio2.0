import React from 'react';
import { Link } from "react-router-dom";

const NavigationLinks = () => {


    return (
           
      <div className={`col-start-3 text-2xl p-12 hidden lg:flex items-start justify-end z-50 mt-3`}>
        <div className="flex flex-wrap space-x-4 z-50">

          {/* NAVIGATION LINKS */}
          <Link className="nav-link hover:opacity-70 active" to="/">
            Home
          </Link>

          <Link className="nav-link hover:opacity-70" to="/portfolio">
            Portfolio
          </Link>


          <Link className="nav-link hover:opacity-70" to="/contact">
            Contact
          </Link>

        </div>
      </div>

    );
};

export default NavigationLinks;