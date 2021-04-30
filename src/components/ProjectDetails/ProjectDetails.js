import React, { useContext, useEffect, useState } from 'react';
import ProjectImage from './ProjectImage';
import ProjectSummary from './ProjectSummary';
// import ProjectBackground from './ProjectBackground';
// import ProjectPreviews from './ProjectPreviews';
import { loadState } from '../../helpers/localStorage';
import PrevProjectButton from './PrevProjectButton';
import NextProjectButton from './NextProjectButton';
import projectsContext from '../../App'

const ProjectDetails = () => {
  const projectObj = loadState()
  const [currentProject, setProject] = useState([]);
  const [currentPageId, setPageId] = useState([]);


  
  const projectsStore = projectsContext()
  const projects = projectsStore.props.value;
  console.log(projects);
  const pageId = projectObj.pageId;
  useEffect(() => {
    setPageId(pageId)
  }, [pageId])
  console.log('project ', projectObj.pageId);
  
  const onPrevOrNextClicked = (pageIdRequested) => {
    setPageId(pageIdRequested)
  }
  
  useEffect(() => {
    const projectRequested = projects[currentPageId]
      setProject(projectRequested);
  }, [currentPageId, projects])


  console.log('current Project: ', currentProject);
  if (!currentProject) { return null}
  // const id = project.id;
  const projectImage = currentProject.image_url;
  const projectUrl = currentProject.project_url;
  const title = currentProject.title;
  const description = currentProject.text_body;

  const projectKeys = projectObj.projectKeys
  // console.log(projectKeys, currentPageId);
  const prevProject = projectKeys[projectKeys.indexOf(currentPageId)- 1]
  const nextProject = projectKeys[projectKeys.indexOf(currentPageId) + 1]

  // console.log(prevProject, nextProject);
  return (
    <div>
      <ProjectImage projectImage={projectImage} title={title} />
      <ProjectSummary title={title} description={description} projectUrl={projectUrl} />
      {/* <ProjectBackground /> */}
      {/* <ProjectPreviews /> */}
      <div className="flex">
        <PrevProjectButton onPrevOrNextClicked={onPrevOrNextClicked} pageId={prevProject} />
        <NextProjectButton onPrevOrNextClicked={onPrevOrNextClicked} pageId={nextProject} />
      </div>
    </div>
  );
};

export default ProjectDetails;