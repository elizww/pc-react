import React, {useEffect, useState} from 'react';
import {ProgressSpinner} from "primereact/progressspinner";
import {getCallSheet} from "../../api/budgetApi";
import './shooting.css';
import CallSheetHeader from "./CallSheetHeader";
import 'antd/es/timeline/style/css'
import SheetPreface from "./SheetPreface";
import ShootingSchedule from "./ShootingSchedule";
import {Messages} from "primereact/messages"


const ShootingPage = () => {
  const [sheet, setSheet] = useState(null);
  const [header, setHeader] = useState({});
  const [messages, setMessages] = useState(null);

  useEffect(() => {

    if (!sheet) {
      getCallSheet().then(
          _sheet => {
            setSheet(_sheet);
            setHeader(_sheet.header);
          }
      )
    }

    if(messages) {
      messages.clear();
      messages.show({severity: 'error', summary: 'shot extended schedule:', detail: 'shots 11, 16 and 12 exceeds expected time', sticky: true})
    }
  }, [messages, sheet]);



  return !sheet ?
      (
          <ProgressSpinner/>
      ) : (
          <>
            <Messages ref={(el) =>setMessages(el)} />
            <CallSheetHeader header={header} />
            <SheetPreface sheet={sheet}/>
            <ShootingSchedule schedule={sheet.shootingSchedule}/>
          </>
      )
};

export default ShootingPage;