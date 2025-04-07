import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationLinks = ({ colorStyle }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`hidden md:flex items-center space-x-8 ${
        colorStyle || "text-dark dark:text-white"
      }`}
    >
      <Link
        className={`nav-link ${
          isActive("/") ? "after:w-full text-primary dark:text-primary" : ""
        }`}
        to="/"
      >
        Home
      </Link>

      <Link
        className={`nav-link ${
          isActive("/portfolio")
            ? "after:w-full text-primary dark:text-primary"
            : ""
        }`}
        to="/portfolio"
      >
        Portfolio
      </Link>

      <Link
        className={`nav-link ${
          isActive("/contact")
            ? "after:w-full text-primary dark:text-primary"
            : ""
        }`}
        to="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavigationLinks;
