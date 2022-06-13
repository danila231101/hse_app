import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './schedule.module.css';
import useWindowSize from '../../hooks/useWindowSize';

const Schedule = () => {
    const width = useWindowSize().width

    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to='timetable' className={({ isActive }) => isActive ? styles.headlineActive : styles.headline}>
                        Timetable
                </NavLink>
                <NavLink to='assignments' className={({ isActive }) => isActive ? styles.headlineActive : styles.headline}>
                        Assignments
                </NavLink>
            </nav>

            <div className={width > 1024 ? styles.scrollWide : styles.scrollNarrow}>
                <Outlet />
            </div>
        </>
    );
};

export default Schedule;