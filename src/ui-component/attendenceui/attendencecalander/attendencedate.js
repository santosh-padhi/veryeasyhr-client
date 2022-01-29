import React, { useState, useEffect } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './attandancedate.css';
import { DataView } from 'primereact/dataview';
import { Calendar } from '@fullcalendar/core';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useDispatch, useSelector } from 'react-redux';
import { myEmployeeAttendence } from 'store/actions/attendenceAction';
import { useParams } from 'react-router';

export default function Calander() {
    const fullCalendarOptions = {
        plugins: [dayGridPlugin],
        defaultView: 'dayGridMonth'
    };
    const params = useParams();

    const dispatch = useDispatch();
    const { error, attend } = useSelector((state) => state.getSingleEmployeeAttendence);
    const [year, setyear] = useState(2021);
    const [month, setmonth] = useState(1);
    const [dateclick, setdateclick] = useState(false);

    const handleDateClick = (arg) => {
        console.log(arg);
        setdateclick(arg.dateStr);
    };

    const calendarRef = React.createRef();

    React.useEffect(() => {
        dispatch(myEmployeeAttendence(params.id, month, year));
    }, [month, year]);

    const [display, setDisplay] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/events.json')
            .then((response) => response.json())
            .then((data) => data.sort((a, b) => new Date(a.start) - new Date(b.start)))
            .then((data) => setEvents(data))
            .then((data) => console.log(data));

        const monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        if (document.getElementById('fc-dom-1') != null) {
            const x = document.getElementById('fc-dom-1').innerText.split(' ');
            setmonth(monthNames.indexOf(x[0]));
            setyear(x[1]);
        }

        /* eslint no-plusplus: "error" */
        if (attend) {
            for (let i = 0; i < document.getElementsByClassName('fc-daygrid-day').length; i += 1) {
                const temp = new Date(document.getElementsByClassName('fc-daygrid-day')[i].getAttribute('data-date'));
                for (let j = 0; j < attend?.employeeAttendance?.length; j += 1) {
                    if (temp.getDate() === attend?.employeeAttendance[j].date && temp.getMonth() + 1 === attend?.attendanceMonth) {
                        if (attend?.employeeAttendance[j]?.attendance === true) {
                            console.log('ff');
                            document.getElementsByClassName('fc-daygrid-day')[i].classList.add('green');
                        } else {
                            document.getElementsByClassName('fc-daygrid-day')[i].classList.add('red');
                        }
                    }
                }
            }
        }
    }, [attend, calendarRef, dateclick]);
    console.log(attend);
    return (
        <>
            <div
                role="button"
                tabIndex={-1}
                onKeyDown={() => {
                    setdateclick(!dateclick);
                }}
                onClick={() => {
                    setdateclick(!dateclick);
                }}
            >
                <FullCalendar
                    dateClick={handleDateClick}
                    className="p-mx-3 p-mt-6 p-mb-3 p-mx-md-6"
                    options={fullCalendarOptions}
                    events={events}
                    ref={calendarRef}
                />
            </div>
        </>
    );
}
