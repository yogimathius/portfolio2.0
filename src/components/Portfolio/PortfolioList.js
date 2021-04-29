import React from 'react';
import useApplicationData from "../../hooks/useApplicationData";
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = () => {
  const { state } = useApplicationData();
  const projects = state.businessData;

  const renderedProjects = projects.map((project, index) => {
    return <PortfolioListItem key={index} project={project} />
  })
  return (
    <div>
      {renderedProjects}
    </div>
  );
};

export default PortfolioList;