import React ,{ useState } from 'react';
import {InputText} from 'primereact/inputtext';
import './_project.scss';

const ProjectBudgetStep = () => {
  const [budget, setBudget] = useState('');
   
  return (
      <div className='pc-project-step-content'>
        <div className="pc-project-step-title">Project Budget</div>  
          <InputText className="pc-project-field" placeholder="Budget Frame" id="budget" type="text" size="30" value={budget} onChange={(e) => setBudget(e.target.value)} />
      </div>
  )
};

export default ProjectBudgetStep;