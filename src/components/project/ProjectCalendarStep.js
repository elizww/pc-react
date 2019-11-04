import React ,{ useState, useEffect } from 'react';
import {FullCalendar} from 'primereact/fullcalendar';
import {getEvents} from "../../api/eventsApi";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './_project.scss';


const ProjectCalendarStep = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(_events => {
      setEvents(_events.data)
    });
  }, [])

  const options = {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2015-10-10',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
 //getEvents
  return (
      <div className='pc-project-step-calendar-content'>
        <FullCalendar  events={events} options={options} />
      </div>
  )
};

export default ProjectCalendarStep;