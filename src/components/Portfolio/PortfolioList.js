import React, { useEffect, useState } from 'react';
import useApplicationData from "../../hooks/useApplicationData";
import LoadingScreen from '../LoadingScreen';
import PortfolioListItem from './PortfolioListItem';

const PortfolioList = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
  }, [])

  const { state } = useApplicationData();
  const projects = state.businessData;

  const renderedProjects = projects.map((project, index) => {
    return <PortfolioListItem key={index} project={project} />
  })
  return (
    
    <div>
    {loading === false ? (
      <div>
      {renderedProjects}</div>
      ) : 
        <LoadingScreen />
      }
    </div>
  );
};

export default PortfolioList;