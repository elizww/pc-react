import React, {useState, useEffect} from 'react';
import {ProgressSpinner} from "primereact/progressspinner";
import {getCallSheet} from "../../api/budgetApi";
import './shooting.css';
import CallSheetHeader from "./CallSheetHeader";

const ShootingPage = () => {
  const [sheet, setSheet] = useState(null);
  const [header, setHeader] = useState({});

  function parseHeader ({title, crewCall, date, day, totalDays}){
    return {
      title, crewCall, date, day, totalDays
    }
  }

  useEffect(() => {
    if (!sheet) {
      getCallSheet().then(
          _sheet => {
            setSheet(_sheet);
            setHeader(parseHeader(_sheet));
          }
      )
    }
  }, [sheet]);



  return !sheet ?
      (
          <ProgressSpinner/>
      ) : (
          <>
            <CallSheetHeader header={header} />
          </>
      )
};

export default ShootingPage;