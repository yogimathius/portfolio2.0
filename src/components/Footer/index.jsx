import React from "react";
import AdminLogin from "./AdminLogin";
import FooterDetails from "./FooterDetails";
import FooterLogo from "./FooterLogo";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <div className="footer">
      {/* <div className="flex justify-center">
        <div className="border-t-2 border-solid border-gray-500 opacity-50 w-11/12 "></div>
      </div>  */}
      <footer className="my-2 space-y-4 md:space-y-0 grid md:grid-cols-6 auto-rows-min text-maximum-blue-green ">
        <FooterLogo />
        <FooterDetails />
        <SocialMediaIcons />
        <AdminLogin />
      </footer>
    </div>
  );
}

export default Footer;