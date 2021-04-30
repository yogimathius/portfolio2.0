import React, { useContext, useEffect, useState } from 'react';
import ProjectImage from './ProjectImage';
import ProjectSummary from './ProjectSummary';
import ProjectBackground from './ProjectBackground';
import ProjectPreviews from './ProjectPreviews';
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
  const pageId = projectObj.pageId;
  useEffect(() => {
    setPageId(pageId)
  }, [pageId])
  
  const onPrevOrNextClicked = (pageIdRequested) => {
    setPageId(pageIdRequested)
  }
  
  useEffect(() => {
    const projectRequested = projects[currentPageId]
      setProject(projectRequested);
  }, [currentPageId, projects])


  if (!currentProject) { return null}
  const projectImage = currentProject.image_url;
  const projectUrl = currentProject.project_url;
  const title = currentProject.title;
  const description = currentProject.text_body;
  const background = currentProject.text_body_background;
  const previews = currentProject.previewimages;
  const projectKeys = projectObj.projectKeys
  const prevProject = projectKeys[projectKeys.indexOf(currentPageId)- 1]
  const nextProject = projectKeys[projectKeys.indexOf(currentPageId) + 1]

  return (
    <div>
      <ProjectImage projectImage={projectImage} title={title} />
      <div className="grid grid-cols-5">
        <ProjectSummary title={title} description={description} projectUrl={projectUrl} />
        <ProjectBackground background={background} />
        <ProjectPreviews previews={previews} />
      </div>
      <div className="flex">
        <PrevProjectButton onPrevOrNextClicked={onPrevOrNextClicked} pageId={prevProject} />
        <NextProjectButton onPrevOrNextClicked={onPrevOrNextClicked} pageId={nextProject} />
      </div>
    </div>
  );
};

export default ProjectDetails;