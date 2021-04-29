import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectSummary from './ProjectSummary';
// import ProjectBackground from './ProjectBackground';
// import ProjectPreviews from './ProjectPreviews';
import { loadState } from '../../helpers/localStorage';
import PrevProjectButton from './PrevProjectButton';
import NextProjectButton from './NextProjectButton';

const index = () => {
  const projectObj = loadState()
  const currentProject = projectObj.project
  const projectImage = currentProject.image_url;
  const projectUrl = currentProject.project_url;
  const title = currentProject.title;
  const description = currentProject.text_body;
  const pageId = currentProject.page_id;
  // const id = project.id;

  const projectNames = projectObj.projectNames
  console.log(projectNames, pageId);
  const prevProject = projectNames[projectNames.indexOf(pageId)- 1]
  const nextProject = projectNames[projectNames.indexOf(pageId) + 1]

  console.log(prevProject, nextProject);
  return (
    <div>
      <ProjectImage projectImage={projectImage} title={title} />
      <ProjectSummary title={title} description={description} projectUrl={projectUrl} />
      {/* <ProjectBackground /> */}
      {/* <ProjectPreviews /> */}
      <div className="flex">
        <PrevProjectButton title={prevProject} />
        <NextProjectButton title={nextProject} />
      </div>
    </div>
  );
};

export default index;