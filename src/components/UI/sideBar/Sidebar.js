import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { SidebarBottomData, SidebarMiddleData } from './SidebarData';

const Sidebar = () => {

    const [sideBar, setSideBar] = useState(true)
    const showSideBar = () => setSideBar(!sideBar)

    return (
        <>
            <div className='side-bar'>
                <ul className='middle-section'>
                    {SidebarMiddleData.map((val, key) => {
                        return (
                            <NavLink
                                key={key}
                                className={({ isActive }) => isActive ? 'row_active' : 'row' }
                                to={val.path}
                                >
                                    <div
                                        className='container'
                                        >
                                            <div id='icon'>{val.icon}</div>
                                            <div id='title'>{val.title}</div>
                                    </div>
                            </NavLink>
                        )
                    })}
                </ul>
                <ul className='bottom-section'>
                    {SidebarBottomData.map((val, key) => {
                        return (
                            <NavLink
                                key={key}
                                className={({ isActive }) => isActive ? 'row_active' : 'row' }
                                to={val.path}
                                >
                                    <div
                                        className='container'
                                        >
                                            <div id='icon'>{val.icon}</div>
                                            <div id='title'>{val.title}</div>
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