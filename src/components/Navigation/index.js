import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import DropDown from "./DropDown";
import NavigationLogo from "./NavigationLogo";
import DarkModeToggle from "../DarkModeToggle";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <NavigationLogo
            colorStyle={
              scrolled
                ? "text-dark dark:text-white"
                : "text-dark dark:text-white"
            }
          />

          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <div className="md:hidden">
              <DropDown />
            </div>
            <NavigationLinks
              colorStyle={
                scrolled
                  ? "text-dark dark:text-white"
                  : "text-dark dark:text-white"
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);
