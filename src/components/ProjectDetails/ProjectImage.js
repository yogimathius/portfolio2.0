import React from 'react';

const ProjectImage = ({projectImage, title}) => {
  const bgStyle = {
    backgroundImage: `url("${projectImage}")`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div style={bgStyle} className="h-85-screen mb-12">

    </div>
  );
};

export default ProjectImage;