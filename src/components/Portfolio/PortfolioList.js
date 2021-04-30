import React, { createContext, useEffect, useState } from 'react';
import { saveState } from '../../helpers/localStorage';
import useApplicationData from "../../hooks/useApplicationData";
import LoadingScreen from '../LoadingScreen';
import PortfolioListItem from './PortfolioListItem';
import projectsContext from '../../App';

const PortfolioList = () => {
  const projectsStore = projectsContext()
  const projects = projectsStore.props.value;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  // const { state } = useApplicationData();
  // const projects = state.businessData;

  const projectKeys = Object.keys(projects)
  const renderedProjects = projectKeys.map((projectKey, index) => {
    const project = projects[projectKey]
    return <PortfolioListItem key={index} project={project} />
  })
  
  saveState(projectKeys)
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