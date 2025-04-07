import React from "react";
import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-white/80 via-white/90 to-white/80 dark:from-dark/80 dark:via-dark/90 dark:to-dark/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark dark:text-white animate-fade-in-up">
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Mathius Johnson
          </span>{" "}
          and I love building beautiful websites
        </h1>
        <p className="text-gray-dark dark:text-gray-light text-lg md:text-xl mb-8 animation-delay-300 animate-fade-in-up">
          Full-stack developer specializing in creating sleek, user-friendly
          digital experiences with modern web technologies
        </p>
        <div className="flex space-x-4 animation-delay-500 animate-fade-in-up">
          <Link to="/#about" className="btn btn-primary group">
            About Me
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </Link>
          <Link to="/portfolio" className="btn btn-secondary group">
            My Work
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 dark:bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute -bottom-16 -left-16 w-32 h-32 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 -right-24 w-16 h-16 bg-accent/20 dark:bg-accent/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default HeroText;
