import React from 'react';
import inDream from './data/inDream';
import boundKiss from './data/boundKiss';
import theSilentValley from './data/theSilentValley';
import './_home.scss';
import ProjectDashboard from "../project/ProjectDashboard";
import {Button} from "primereact/button";

const HomePage = () => {


  return (
      <div className="pc-home">
        <div className='pc-home__header'>
          <span className="pc-home__header__title">
            Active Projects
          </span>
          <Button label="Create New Project" className="p-button-rounded pc-home__header__create" icon='pi pi-plus'/>
        </div>
        <ProjectDashboard data={inDream}/>
        <ProjectDashboard data={boundKiss}/>
        <ProjectDashboard data={theSilentValley}/>
      </div>
  )
};

export default HomePage;