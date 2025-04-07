import React from "react";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <section id="about" className="section bg-gray-light dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8">
            <AboutImage />
          </div>
          <div>
            <AboutText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
