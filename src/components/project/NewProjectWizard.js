import React from 'react';

import StepZilla from "react-stepzilla";
import ProjetDescriptionStep from './ProjectDescriptionStep';
import ProjectScriptStep from './ProjectScriptStep';
import ProjectTimelineStep from './ProjectTimelineStep';
import ProjectCrewStep from './ProjectCrewStep';
import ProjectBudgetStep from './ProjectBudgetStep';
import ProjectCalendarStep from './ProjectCalendarStep';
import 'react-stepzilla/src/css/main.css';
import './_project.scss';

const NewProjectWizard = () => {

  const steps =
      [
        {name: 'Description', component: <ProjetDescriptionStep />},
        {name: 'Script', component: <ProjectScriptStep />},
        {name: 'Dates', component: <ProjectTimelineStep />},
        {name: 'Crew', component: <ProjectCrewStep />},
        {name: 'Budget', component: <ProjectBudgetStep />},
        {name: 'Calendar', component: <ProjectCalendarStep />}
      ];
  return (
    <div className='pc-project-container'>
      <div className='step-progress pc-project-wizard'>
        <StepZilla steps={steps}/>
      </div>
    </div>
  )
};

export default NewProjectWizard;