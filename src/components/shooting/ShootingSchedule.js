import React from 'react';
import './_schedule.scss'

const ShootingSchedule = ({schedule}) => {
  function showLocation(row, idx) {
    const shots = row.shots.map( (sh,index) => {
      return (
       <div className="today-schedule__location__shot" key={index}>
         <div className={"today-schedule__span_1 today-schedule__location__shot__" + sh.onTime }>{sh.scene}</div>
         <div className={"today-schedule__span_6 today-schedule__location__shot__" + sh.onTime }>
           <div className="today-schedule__location__shot__set">
             {sh.set}
           </div>
           <div className="today-schedule__location__shot__description">
             {sh.description}
           </div>
         </div>
         <div className="today-schedule__span_1">{sh.cast}</div>
         <div className="today-schedule__span_1">{sh.extras}</div>
         <div className="today-schedule__span_1">{sh.DN}</div>
         <div className="today-schedule__span_1">{sh.pages}</div>
       </div>

      )
    });
    return (
        <div className="today-schedule__location" key={idx}>
          <div className="today-schedule__location__address">
            <div className="today-schedule__location__address__name">{row.location.name}</div>
            <div>{row.location.addressLine1}</div>
            <div>{row.location.addressLine2}</div>
          </div>
          {shots}
        </div>
    );
  }

  function showCommute(row, idx) {
    return (
        <div className="today-schedule__commute" key={idx}>{row.who} , Travel time - {row.time}</div>
    )
  }

  return (
      <>
        <h1>Today's Schedule</h1>
        <div className="today-schedule">
          <div className="today-schedule__header">
            <div className="today-schedule__span_1">Scene</div>
            <div className="today-schedule__span_6">Set and Description</div>
            <div className="today-schedule__span_1">Cast</div>
            <div className="today-schedule__span_1">Extras</div>
            <div className="today-schedule__span_1">D/N</div>
            <div className="today-schedule__span_1">Pages</div>
            <div className="today-schedule__span_2">Locations</div>
          </div>
          { schedule.map((row,idx) => row.type === 'location' ? showLocation(row, idx) : showCommute(row, idx))}
        </div>
      </>
      )
};

export default ShootingSchedule;