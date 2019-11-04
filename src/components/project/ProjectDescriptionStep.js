import React ,{ useState } from 'react';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';
import './_project.scss';

const ProjetDescriptionStep = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const types = [
    {label: 'Commercial Movie', value: 'movie'},
    {label: 'Independent movie', value: 'indy'},
    {label: 'Short Movie', value: 'short'},
    {label: 'Student Film', value: 'student'},
    {label: 'TV Series', value: 'tvSeries'},
    {label: 'Advertisement', value: 'ad'},
    {label: 'Music Clip', value: 'clip'},
    {label: 'Funded Movie', value: 'funds'},
    {label: 'Documentary', value: 'doc'},
    {label: 'Short Documentary', value: 'shortDoc'},
    {label: 'Student Film Documentary', value: 'studentDoc'},
  ];

  return (
      <div className='pc-project-step-content'>
        <div className="pc-project-step-title">Project Definition</div>
          <InputText placeholder="Project Name" id="float-input" type="text" size="30" value={name} onChange={(e) => setName(e.target.value)} />
          <div className='pc-project-description-type'>
            <Dropdown value={type} options={types} onChange={(e) => setType(e.value)}
                className='pc-project-description-type__select'
                              editable={true} size="30" placeholder="Select Project Type"/>
          </div>
          <div className='pc-project-description-country'>
            <ReactFlagsSelect />
          </div>
      </div>
  )
};

export default ProjetDescriptionStep;