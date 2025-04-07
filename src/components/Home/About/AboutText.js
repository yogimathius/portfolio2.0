import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto space-y-8">
      <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
        About Me
      </h2>

      <div className="space-y-6">
        <p className="text-lg text-gray-dark dark:text-gray-light">
          I'm a junior full-stack developer looking for a new role in an
          exciting company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React and Express, but I can adapt to whatever tools are
          required.
        </p>
        <p className="text-lg text-gray-dark dark:text-gray-light">
          I'm based in Squamish, BC, but I'm happy working remotely and have
          experience in remote teams. When I'm not coding, you'll find me
          outdoors. I love being out in nature whether that's going for a walk,
          run or cycling.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <Link to="/portfolio" className="btn btn-primary">
          View My Portfolio
        </Link>
        <a
          href="https://github.com/mathiusjohnson"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default About;
