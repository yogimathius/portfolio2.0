import React from 'react';
import SecondaryButton from '../SecondaryButton';

const ProjectSummary = ({title, description, projectUrl}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <SecondaryButton target="_blank" link={projectUrl}>Visit Website</SecondaryButton>
    </div>
  );
};

export default ProjectSummary;