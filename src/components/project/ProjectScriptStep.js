import React ,{ useState } from 'react';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';

const ProjectScriptStep = () => {
  const [growl, setGrowl] = useState(null);

  const onUpload = () => {
    growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }

  return (
      <div className='pc-project-step-content'>
        <div className="pc-project-step-title">Script</div>
          <FileUpload 
            name="demo[]" 
            url="./upload.php" 
            onUpload={onUpload} 
            multiple={true} 
            maxFileSize={10000000} />
            <Growl ref={(el) => setGrowl(el)}></Growl>
      </div>
  )
};

export default ProjectScriptStep;