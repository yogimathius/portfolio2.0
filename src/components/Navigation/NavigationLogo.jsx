import React from 'react';
import logo from '../../assets/images/logo.svg';

const NavigationLogo = () => {
  return (
    <div className="col-start-1 flex items-center -mb-6">
      <div className="z-50 mr-4">
        <a href="/">
          <img src={logo} alt="MJ developer Logo" />
        </a>
      </div>
    </div>
  );
};

export default NavigationLogo;