import React from "react";
import faGithub from "../../assets/icons/github.svg";
import faTwitter from "../../assets/icons/twitter.svg";
import faLinkedin from "../../assets/icons/linkedin.svg";

const SocialMediaIcons = ({ color = "dark" }) => {
  const getIconClass = () => {
    if (color === "white") return "filter invert";
    if (color === "dark") return "dark:filter dark:invert";
    return "";
  };

  return (
    <div className="flex items-center space-x-6">
      <a
        href="https://github.com/mathiusjohnson"
        target="_blank"
        rel="noreferrer"
        className="transform transition-transform hover:scale-110"
        aria-label="GitHub Profile"
      >
        <img className={`w-6 h-6 ${getIconClass()}`} src={faGithub} alt="" />
      </a>

      <a
        href="https://twitter.com/mathius_johnson"
        target="_blank"
        rel="noreferrer"
        className="transform transition-transform hover:scale-110"
        aria-label="Twitter Profile"
      >
        <img className={`w-6 h-6 ${getIconClass()}`} src={faTwitter} alt="" />
      </a>

      <a
        href="https://www.linkedin.com/in/mathius-johnson/"
        target="_blank"
        rel="noreferrer"
        className="transform transition-transform hover:scale-110"
        aria-label="LinkedIn Profile"
      >
        <img className={`w-6 h-6 ${getIconClass()}`} src={faLinkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
