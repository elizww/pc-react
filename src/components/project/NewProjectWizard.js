import React from 'react';

import StepZilla from "react-stepzilla";
import ProjetDescriptionStep from './ProjectDescriptionStep';
import ProjectScriptStep from './ProjectScriptStep';
import 'react-stepzilla/src/css/main.css';

const NewProjectWizard = () => {

  const steps =
      [
        {name: 'Description', component: <ProjetDescriptionStep />},
        {name: 'Script', component: <ProjectScriptStep />},
        {name: 'Dates', component: <ProjetDescriptionStep />},
        {name: 'Crew', component: <ProjetDescriptionStep />},
        {name: 'Budget', component: <ProjetDescriptionStep />}
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