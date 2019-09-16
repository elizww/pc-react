import React, {useState, useEffect} from 'react';
import {ProgressSpinner} from "primereact/progressspinner";
import {getCallSheet} from "../../api/budgetApi";

const ShootingPage = () => {
  const [sheet, setSheet] = useState(null);

  useEffect(() => {
    if (!sheet) {
      getCallSheet().then(
          _sheet => setSheet(_sheet)
      )
    }
  }, [sheet]);

  return !sheet ?
      (
          <ProgressSpinner/>
      ) : (
          <>
            <div className="p-grid">
              <h1 className="p-col">{sheet.title}</h1>
              <div className="p-col"/>
              <div className="p-col">
                {sheet.date}
                <br/>
                <h1>Day {sheet.day} of {sheet.totalDays}</h1>
              </div>

            </div>

          </>
      )
};

export default ShootingPage;