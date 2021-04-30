import React from 'react';

const ProjectBackground = ({background}) => {
  return (
    <div className="col-span-3 space-y-16 mb-16">
      <h2 className="text-4xl">Project Background</h2>
      <p className="leading-8">{background}</p>
    </div>
  );
};

export default ProjectBackground;