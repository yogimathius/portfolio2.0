import React from "react";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import FooterLogo from "./FooterLogo";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-dark via-primary to-accent text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start animate-fade-in-up">
            <FooterLogo />
            <div className="mt-6 text-gray-light">
              <p>Mathius Johnson</p>
              <p>Full Stack Developer</p>
              <p>Squamish, BC, Canada</p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col items-center space-y-2">
              <Link
                to="/"
                className="text-gray-light hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-light hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-gray-light hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div
            className="flex flex-col items-center md:items-end animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <SocialMediaIcons color="white" />
            <a
              href="mailto:mathius.johnson@gmail.com"
              className="mt-4 text-gray-light hover:text-white transition-colors"
            >
              mathius.johnson@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-light text-sm">
            &copy; {new Date().getFullYear()} Mathius Johnson. All rights
            reserved.
          </p>
          <AdminLogin />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
