import React from "react";
import SocialMediaIcons from "../Footer/SocialMediaIcons";

const GetInTouch = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6">
        Get in Touch
      </h1>

      <div className="max-w-3xl space-y-6">
        <p className="text-lg text-gray-dark dark:text-gray-light mb-4">
          I'd love to hear about what you're working on and how I could help.
          I'm currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I'm also happy to hear about opportunities that don't
          fit that description.
        </p>
        <p className="text-lg text-gray-dark dark:text-gray-light mb-4">
          I'm a hard-working and positive person who will always approach each
          task with a sense of purpose and attention to detail. Please do feel
          free to check out my online profiles below and get in touch using the
          form.
        </p>
      </div>

      <div className="flex justify-center md:justify-start mt-6">
        <SocialMediaIcons color="dark" />
      </div>
    </div>
  );
};

export default GetInTouch;
