import React, {useEffect, useState} from 'react';
import {ProgressSpinner} from "primereact/progressspinner";
import {getCallSheet} from "../../api/budgetApi";
import './shooting.css';
import CallSheetHeader from "./CallSheetHeader";
import 'antd/es/timeline/style/css'
import SheetPreface from "./SheetPreface";


const ShootingPage = () => {
  const [sheet, setSheet] = useState(null);
  const [header, setHeader] = useState({});

  useEffect(() => {
    if (!sheet) {
      getCallSheet().then(
          _sheet => {
            setSheet(_sheet);
            setHeader(_sheet.header);
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
            <SheetPreface sheet={sheet}/>
          </>
      )
};

export default ShootingPage;