import React from "react";
import { withRouter } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import DropDown from "./DropDown";
import NavigationLogo from "./NavigationLogo";

function Navigation() {

  return (

    <nav className="">
      <div id="overlay" className="z-10 flex justify-between py-8 mb-6">
        <div className="flex justify-center ml-4 mt-12 lg:hidden">
          <DropDown  />
        </div>
        <NavigationLogo colorStyle="text-black" />
        <NavigationLinks />
      </div> 
    </nav>
  );
}

export default withRouter(Navigation);