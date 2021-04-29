import React from 'react';
import spinner from '../assets/images/spinner.gif'
const LoadingScreen = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={spinner} alt="loading spinner"></img>
    </div>
  );
};

export default LoadingScreen;