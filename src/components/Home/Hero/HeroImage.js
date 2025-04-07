import React, { useEffect, useRef } from "react";
import HeroText from "./HeroText";

const HeroImage = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;

      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;

      parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-hero bg-cover bg-center opacity-90 dark:opacity-60"
        style={{
          backgroundImage: "url('/src/assets/images/header-background.jpg')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Animated Overlay */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 transition-transform duration-200 ease-out"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-accent/20 dark:bg-accent/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "0.8s" }}
        ></div>
      </div>

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 dark:from-primary/20 dark:to-secondary/20"></div>

      <div className="container relative z-10 px-4 md:px-8">
        <HeroText />
      </div>
    </div>
  );
};

export default HeroImage;
