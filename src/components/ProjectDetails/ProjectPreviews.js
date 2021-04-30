import React from 'react';

const ProjectPreviews = ({previews}) => {
  console.log(previews);
  if(previews?.length === 1) {
    return (
      <img src={previews[0]} alt="project preview"></img>
    )
  }
  const renderedPreviews = previews?.map((preview, index) => {
    return <img src={preview} alt="project preview"></img>
  })
  return (
    <div>
      {renderedPreviews}
    </div>
  );
};

export default ProjectPreviews;