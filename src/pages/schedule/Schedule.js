import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './schedule.css';

const Schedule = () => {
    return (
        <>
            <nav className='navbar'>
                <Link to='timetable' className='headline__button'>
                    <h1 id='active'>
                        Timetable
                    </h1>
                </Link>
                <Link to='assignments' className='headline__button'>
                    <h1 id='inactive'>
                        Assignments
                    </h1>
                </Link>
            </nav>
            <div className='scroll'>
                <Outlet />
            </div>
        </>
    );
};

export default Schedule;