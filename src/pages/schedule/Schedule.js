import React from 'react';
import Event from './assignments/Event';
import './schedule.css';
import DaySection from './assignments/DaySection';

const Schedule = () => {
    return (
        <div className='body'>
            <nav className='navbar'>
                <a className='headline' id='active'> Assignments</a>
                <a className='headline' id='inactive'> Deadlines</a>
            </nav>
            <body className='scroll'>
                <DaySection/>
                <DaySection/>
                <DaySection/>
            </body>
        </div>
    );
};

export default Schedule;