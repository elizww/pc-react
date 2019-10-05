import {Chart} from "primereact/chart";
import {Link} from "react-router-dom";
import React from "react";
import * as PropTypes from 'prop-types';
import './_project.scss';

const ProjectDashboard = ({data}) => {
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
      <div className='pc-project'>
        <h2>{data.title}</h2>
        <div className="p-grid">
          <div className="p-col-5">
            <Chart type='bar' data={data.bar} options={options}/>
          </div>
          <div className="p-col-5">
            <Chart type='pie' data={data.pie} options={pieOptions}/>
          </div>
          <div className="p-col-2">
            <div>
              <Link to='/'>Alerts: {data.alerts}</Link>
            </div>
            <div>
              <Link to='/'>Messages: {data.messages}</Link>
            </div>
            <div>
              <Link to='/'>Events: {data.events}</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

ProjectDashboard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectDashboard;