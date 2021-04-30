import React from 'react';

const ProjectPreviews = ({previews}) => {
  if(previews?.length === 1) {
    return (
      <img className="col-start-2 col-span-2" src={previews[0]} alt="project preview"></img>
    )
  }
  const renderedPreviews = previews?.map((preview, index) => {
    return <img src={preview} alt="project preview"></img>
  })
  return (
    <div className="col-start-2 col-span-2">
      {renderedPreviews}
    </div>
  );
};

export default ProjectPreviews;