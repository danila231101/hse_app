import React from 'react';
import TimetableEvent from './TimetableEvent';
import './timetableDailySection.css';

const TimetableDailySection = () => {
    return (
        <div className='day__section'>
            <h3 className='date'>
                MONDAY, JANUARY 10
            </h3>
            <TimetableEvent />
            <TimetableEvent />
            <TimetableEvent />
            <TimetableEvent />
        </div>
    );
};

export default TimetableDailySection;