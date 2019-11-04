import React ,{ useState } from 'react';
import { Calendar } from 'primereact/calendar';
import './_project.scss';


const ProjectTimelineStep = () => {
  const [dates, setDates] = useState('');
 
  return (
      <div className='pc-project-step-content'>
        <div className="pc-project-step-title">Project Timeline</div>  
        <div className="pc-project-input">      
          <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readonlyInput={true} size="30" />  
        </div>
      </div>
  )
};

export default ProjectTimelineStep;