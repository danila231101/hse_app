import React from 'react';
import { Calendar } from 'react-calendar';
import TimetableDailySection from './content/TimetableDailySection';
import useWindowSize from '../../../hooks/useWindowSize';

const Timetable = () => {
    const width = useWindowSize().width

    return (
        <>
            <div className='content'>
                <TimetableDailySection />
                <TimetableDailySection />
                <TimetableDailySection />
                <TimetableDailySection />
                <TimetableDailySection />
            </div>

            {/* <div className='right--menu'>
                <Calendar
                    className='calendar'
                />
            </div> */}
        </>
    );
};

export default Timetable;