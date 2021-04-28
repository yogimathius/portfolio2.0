import React from 'react';
import HeroButton from './HeroButton';

const HeroText = () => {
  const introText = "Hey, I'm Mathius Johnson and I love building beautiful websites"
  return (
      <div className="relative bg-light-grey px-48 py-40">
        <p className="absolute bottom-10 mb-2 left-2 text-5xl">
        {introText}
        </p>
        <div className="absolute bottom-0 left-2">
          <HeroButton />
        </div>
      </div>

  );
};

export default HeroText;