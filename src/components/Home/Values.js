import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/profilepic.jpg'

const Values = () => {

  return (
    <div className="grid md:grid-cols-2 my-4 md:my-24 items-center">

      <div className="col-start-1 md:w-5/6 md:mt-0 flex flex-col space-y-10">
        <h1 className="text-3xl md:text-5xl font-header text-maximum-blue-green uppercase mb-4  text-center md:text-left">About Me</h1>
        <div className="border-b-2 border-solid border-gray-300 w-1/3"></div>
        <div className="space-y-6 text-lg md:text-2xl">
          <p> 
          I’m a junior full-stack developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React and Express, but I can adapt to whatever tools are required. I’m based in Squamish, BC, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link to="/contact" type="button" className="btn btn-secondary">Go To Portfolio</Link>
        </div>
      </div>
      <div className="col-start-1 md:col-start-2 md:row-start-1 mr-2">
        <img className="rounded-xl shadow-xl" src={profilePic} alt="pregnant belly in light pink dress" />
      </div>
      <div className="border-b-2 border-solid border-gray-300 w-1/3"></div>

    </div>
  );
};

export default Values;