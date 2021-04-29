import React from 'react';

const ProjectImage = ({projectImage, title}) => {
  const bgStyle = {
    backgroundImage: `url("${projectImage}")`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div style={bgStyle} className="h-85-screen transform scale-90">

    </div>
  );
};

export default ProjectImage;