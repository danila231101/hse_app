import React from 'react';
import { Calendar } from 'react-calendar';
import AssignmentDailySection from './content/AssignmentDailySection';
import 'react-calendar/dist/Calendar.css';

const Assignments = () => {
    return (
        <>
            <div className='content'>
                <AssignmentDailySection />
                <AssignmentDailySection />
                <AssignmentDailySection />
                <AssignmentDailySection /> 
            </div>
            <div className='right--menu'>
                <Calendar className='calendar'
                
                />
            </div>
        </>
    );
};

export default Assignments;