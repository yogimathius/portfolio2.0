import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="space-x-4 md:space-x-1 flex justify-center items-center">
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sovereign.birth/"   className="fa-layers fa-fw fa-4x">
    <FontAwesomeIcon className="text-white" icon={faGithub} transform={'shrink-8'} /> 
    </a>
    <a href="mailto:info@SovereignBirth.ca"   className="fa-layers fa-fw fa-4x">

      <FontAwesomeIcon icon={faTwitter} className="text-white" transform={'shrink-8'} />         
    </a>
    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SovereignBirth"   className="fa-layers fa-fw ">
     <FontAwesomeIcon className="text-white fa-4x" icon={faLinkedin} transform={'shrink-8'} />      
    </a>
  </div>
  );
};

export default SocialMediaIcons;