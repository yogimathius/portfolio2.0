import React from 'react';
import faGithub from '../../assets/icons/github.svg';
import faTwitter from '../../assets/icons/twitter.svg';
import faLinkedin from '../../assets/icons/linkedin.svg';

const SocialMediaIcons = ({color}) => {
  return (
    <div className={`space-x-4 md:space-x-1 flex justify-center items-center text-${color}`}>
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sovereign.birth/">
      <img className="" src={faGithub} alt="github icon"></img>
    </a>
    <a href="mailto:info@SovereignBirth.ca"  >
      <img className="" src={faTwitter} alt="twitter ico"></img>

    </a>
    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SovereignBirth">
      <img src={faLinkedin} alt="linkedin icon"></img>
    </a>
  </div>
  );
};

export default SocialMediaIcons;