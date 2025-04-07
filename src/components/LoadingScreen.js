import React from "react";

const LoadingScreen = () => {
  return (
    <div className="h-75-screen flex justify-center items-center">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-primary border-r-secondary border-b-primary-dark border-l-secondary-dark animate-spin"></div>
        <div
          className="absolute top-2 left-2 w-16 h-16 rounded-full border-4 border-t-secondary border-r-primary-dark border-b-secondary-dark border-l-primary animate-spin animation-delay-300"
          style={{ animationDirection: "reverse" }}
        ></div>
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-t-primary-dark border-r-secondary-dark border-b-primary border-l-secondary animate-spin animation-delay-500"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-primary font-bold">MJ</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
