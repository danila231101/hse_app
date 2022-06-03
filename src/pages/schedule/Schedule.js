import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './schedule.css';

const Schedule = () => {

    return (
        <>
            <nav className='navbar'>
                <NavLink to='timetable' className={({ isActive }) => isActive ? 'headline__active' : 'headline'}>
                        Timetable
                </NavLink>
                <NavLink to='assignments' className={({ isActive }) => isActive ? 'headline__active' : 'headline'}>
                        Assignments
                </NavLink>
            </nav>

            <div className='scroll'>
                <Outlet />
            </div>
        </>
    );
};

export default Schedule;