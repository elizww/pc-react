import React from 'react';
import inDream from './data/inDream';
import boundKiss from './data/boundKiss';
import {Chart} from 'primereact/chart';
import {Link} from "react-router-dom";
import './_home.scss';

const HomePage = () => {
  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Budget: Planned vs Actual'
    },
    tooltips: {
      mode: 'index',
      intersect: true
    }

  };

  const pieOptions = {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Budget Distribution'
    },
    layout: {
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }
  };

  return (
      <div className="home-page">
        <h1>Active Projects</h1>
        <div className='pc-home__project'>
          <h2>In Dream</h2>
          <div className="p-grid">
            <div className="p-col-5">
              <Chart type='bar' data={inDream.bar} options={options}/>
            </div>
            <div className="p-col-5">
              <Chart type='pie' data={inDream.pie} options={pieOptions}/>
            </div>
            <div className="p-col-2">
              <div>
                <Link to='/'>Alerts: 2</Link>
              </div>
              <div>
                <Link to='/'>Messages: 3</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='pc-home__project'>
          <h2>Bound Kiss</h2>
          <div className="p-grid">
            <div className="p-col-5">
              <Chart type='bar' data={boundKiss.bar} options={options}/>
            </div>
            <div className="p-col-5">
              <Chart type='pie' data={boundKiss.pie} options={pieOptions}/>
            </div>
            <div className="p-col-2">
              <div>
                <Link to='/'>Alerts: 5</Link>
              </div>
              <div>
                <Link to='/'>Messages: 12</Link>
              </div>
              <div>
                <Link to='/'>Events: 4</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default HomePage;