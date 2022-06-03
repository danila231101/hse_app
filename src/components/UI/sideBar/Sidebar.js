import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css';
import { SidebarBottomData, SidebarMiddleData } from './SidebarData';
import useWindowSize from '../../../hooks/useWindowSize';

const Sidebar = () => {
    const width = useWindowSize().width

    return (
        <>
            <div className={width > 800 ? styles.sideBarWide : styles.sideBarNarrow}>
                <ul className={styles.middleSection}>
                    {SidebarMiddleData.map((val, key) => {
                        return (
                            <NavLink
                                key={key}
                                className={({ isActive }) => isActive ? val.cNameActive : val.cName }
                                to={val.path}
                                >
                                    <div
                                        className={val.cNameContainer}
                                        >
                                            <div id={styles.icon}>{val.icon}</div>
                                            { width > 800 ? <div id={styles.title}>{val.title}</div> : null }
                                    </div>
                            </NavLink>
                        )
                    })}
                </ul>
                <ul className={styles.bottomSection}>
                    {SidebarBottomData.map((val, key) => {
                        return (
                            <NavLink
                                key={key}
                                className={({ isActive }) => isActive ? val.cNameActive : val.cName }
                                to={val.path}
                                >
                                    <div
                                        className={val.cNameContainer}
                                        >
                                            <div id={styles.icon}>{val.icon}</div>
                                            { width > 800 ? <div id={styles.title}>{val.title}</div> : null }
                                    </div>
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;