import React ,{ useState } from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import './_project.scss';

const ProjectCrewStep = () => {
  const [director, setDirector] = useState('');
  const [screenwriter, setScreenwriter] = useState('');
  const [producer, setProducer] = useState('');
 
  return (
      <div className='pc-project-step-content'>
        <div className="pc-project-step-title">Crew</div>  
       <InputText className="pc-project-field" placeholder="Director" id="director" type="text" size="30" value={director} onChange={(e) => setDirector(e.target.value)} />
       <InputText className="pc-project-field" placeholder="Screenwriter" id="screenwriter" type="text" size="30" value={screenwriter} onChange={(e) => setScreenwriter(e.target.value)} />
       <InputText className="pc-project-field" placeholder="Producer" id="producer" type="text" size="30" value={producer} onChange={(e) => setProducer(e.target.value)} />
       <div className="pc-project-field">
        <Button label="Cast"  />
        <Button label="Production"  />
        <Button label="Art"  />
        <Button label="Camera & Sound"  />
       </div>
      </div>
  )
};

export default ProjectCrewStep;