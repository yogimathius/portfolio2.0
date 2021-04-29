import React from 'react';
import AboutImage from './AboutImage';
import AboutText from "./AboutText";

const index = () => {
  return (
    <div className="grid md:grid-cols-2 my-4 md:my-24 items-center">
      <AboutImage />
      <AboutText />
    </div>
  );
};

export default index;