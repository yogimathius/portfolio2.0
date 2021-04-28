import React from 'react';
import SecondaryButton from '../SecondaryButton';

const CallToAction = ({titles}) => {

  return (
    <div className=" grid md:grid-cols-2">
      <h3 className="col-start-1  text-4xl">
        Interested in doing a project together?
      </h3> 
    <div className="flex justify-end"> 
        <SecondaryButton>Contact Me</SecondaryButton>
    </div>
     
    </div>
  );
};

export default CallToAction;