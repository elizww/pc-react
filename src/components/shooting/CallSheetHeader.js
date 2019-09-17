import React from 'react'

const CallSheetHeader = ({header}) => {
  return (
      <div className="p-grid">
        <h1 className="p-col">{header.title}</h1>
        <div className="p-col">
          <small>Call Crew</small>
          <div className="crew-call">{header.crewCall}</div>
        </div>
        <div className="p-col">
          {header.date}
          <br/>
          <h1>Day {header.day} of {header.totalDays}</h1>
        </div>
      </div>
  )
};

export default CallSheetHeader;