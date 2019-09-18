import React from 'react';
import {Fieldset} from "primereact/fieldset";
import Timeline from "antd/es/timeline";

const SheetPreface = ({sheet}) => {
  return (
      <div className="p-grid shooting-preface">
        <div className="p-col-6">
          <Fieldset legend="Key People" toggleable>
            {sheet.keyPeople.map((kp, idx) => (
                <div className="p-grid">
                  <span className="p-col-6" key={idx}><strong>{kp.role} :</strong></span>
                  <span className="p-col-6">{kp.name}</span>
                </div>))}
          </Fieldset>
        </div>
        <div className="p-col-6">
          <Fieldset legend="Key Times" toggleable>
            <Timeline>
              {sheet.keyTimes.map((time, idx) => <Timeline.Item key={idx}>{time.event}: {time.time}</Timeline.Item>)}
            </Timeline>
          </Fieldset>
        </div>
      </div>
  );
};

export default SheetPreface;