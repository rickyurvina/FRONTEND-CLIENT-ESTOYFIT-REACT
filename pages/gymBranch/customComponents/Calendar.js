import React, { Component } from 'react';
import { ScheduleComponent, Inject, Day, Week, Month, Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule'

import Link from 'next/link';

const localData = {
    dataSource: [{
        Id: 2,
        Subject: 'Clase Yoga',
        EndTime: new Date(2020, 9, 27, 12, 0),
        StartTime: new Date(2020, 9, 27, 10, 0),
        Summary: "Prueba de agenda",
        IsAllDay: false,
        IsReadonly: true,
        Description: "Prueba"
    }]
};

const myEventsList = [
    {
        title: 'Estoy fit - Trx',
        allDay: true,
        start: new Date(2019, 10, 0),
        end: new Date(2019, 10, 1),
    },
    {
        title: '',
        start: new Date(2019, 10, 7),
        end: new Date(2019, 10, 10),
    },

    {
        title: 'HIIT45 - Aeróbicas',
        start: new Date(2019, 9, 110, 0, 0, 0),
        end: new Date(2019, 9, 20, 0, 0, 0),
    },

    {
        title: 'HIIT45 - Crossfit',
        start: new Date(2019, 10, 6, 0, 0, 0),
        end: new Date(2019, 10, 10, 0, 0, 0),
    },

    {
        title: 'Delta Fitness Club - Pilates',
        start: new Date(2019, 10, 9, 0, 0, 0),
        end: new Date(2019, 10, 9, 0, 0, 0),
    },
    {
        title: 'Knockout - Box',
        start: new Date(2019, 10, 11),
        end: new Date(2019, 10, 13),
        desc: 'Big conference for important people',
    },
    {
        title: 'Evolution Functional Fitness - Cardio',
        start: new Date(2019, 10, 12, 10, 30, 0, 0),
        end: new Date(2019, 10, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        title: 'Shantaya Yoga Pilates - Entrenamiento funcional',
        start: new Date(2019, 10, 12, 12, 0, 0, 0),
        end: new Date(2019, 10, 12, 110, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        title: 'Gym Poder Loja - Trx',
        start: new Date(2019, 10, 12, 14, 0, 0, 0),
        end: new Date(2019, 10, 12, 15, 0, 0, 0),
    },
    {
        title: 'Gym Poder Loja - Spinning',
        start: new Date(2019, 10, 12, 17, 0, 0, 0),
        end: new Date(2019, 10, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        title: 'Exerzone - Bailoterapia',
        start: new Date(2019, 10, 12, 20, 0, 0, 0),
        end: new Date(2019, 10, 12, 21, 0, 0, 0),
    },
    {
        title: 'Evolution Functional Fitness - Cardio',
        start: new Date(2019, 10, 10, 7, 0, 0),
        end: new Date(2019, 10, 10, 10, 30, 0),
    },
    {
        title: 'Exerzone - Spinning',
        start: new Date(2019, 10, 10, 7, 0, 0),
        end: new Date(2019, 10, 10, 10, 30, 0),
    },
    {
        title: 'Lift Gym - Cardio',
        start: new Date(2019, 10, 10, 7, 0, 0),
        end: new Date(2019, 10, 10, 10, 30, 0),
    },
    {
        title: 'Lift Gym - Spinning',
        start: new Date(2019, 10, 17, 19, 30, 0),
        end: new Date(2019, 10, 18, 9, 0, 0),
    },
    {
        title: 'Lift Gym - Cardio',
        start: new Date(2019, 10, 20, 19, 30, 0),
        end: new Date(2019, 10, 22, 9, 0, 0),
    },
];


class CalendarComp extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ padding: 0 }}>
                <div className="row-calendar ptb-60" id="calendar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 calendar-title">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                                <h1>CALENDARIO DE NUESTRAS ACTIVIDADES</h1>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ScheduleComponent height='550px' eventSettings={localData} firstDayOfWeek={1} >
                                            <ViewsDirective>
                                                <ViewDirective option='Week' startHour='05:00' endHour='23:00' />
                                                <ViewDirective option='Month' />
                                                <ViewDirective option='Day' />
                                            </ViewsDirective>
                                            <Inject services={[Day, Week, Month, Agenda]} />
                                        </ScheduleComponent>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CalendarComp;
