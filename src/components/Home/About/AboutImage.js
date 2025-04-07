import React from "react";
import profilePic from "../../../assets/images/profilepic.jpg";

const AboutImage = () => {
  return (
    <div className="relative h-full w-full">
      <div className="overflow-hidden rounded-2xl shadow-card">
        <img
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src={profilePic}
          alt="Mathius Johnson portrait"
        />
      </div>
      <div className="absolute -bottom-4 -right-4 h-24 w-24 md:h-32 md:w-32 bg-primary rounded-full flex items-center justify-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 md:h-16 md:w-16 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutImage;
