import React from 'react';
import { Calendar } from 'react-calendar';
import TimetableDailySection from './content/TimetableDailySection';

const Timetable = () => {
    return (
        <>
            <div className='content'>
                <TimetableDailySection />
                <TimetableDailySection />
                <TimetableDailySection />
                <TimetableDailySection />
                <TimetableDailySection />
            </div>
            <div className='right--menu'>
                <Calendar
                    className='calendar'
                />
            </div>
        </>
    );
};

export default Timetable;