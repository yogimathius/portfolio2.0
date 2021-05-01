import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = ({color}) => {
  return (
    <div className={`space-x-4 md:space-x-1 flex justify-center items-center text-${color}`}>
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sovereign.birth/"   className="fa-layers fa-fw fa-4x">
    <FontAwesomeIcon className="" icon={faGithub} transform={'shrink-8'} /> 
    </a>
    <a href="mailto:info@SovereignBirth.ca"   className="fa-layers fa-fw fa-4x">

      <FontAwesomeIcon icon={faTwitter} className="" transform={'shrink-8'} />         
    </a>
    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SovereignBirth"   className="fa-layers fa-fw ">
     <FontAwesomeIcon className=" fa-4x" icon={faLinkedin} transform={'shrink-8'} />      
    </a>
  </div>
  );
};

export default SocialMediaIcons;