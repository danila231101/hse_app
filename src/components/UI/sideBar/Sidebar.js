import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                            <Link
                                key={key}
                                className='row'
                                to={val.path}
                                >
                                    <div
                                        className='container'
                                        id={window.location.pathname === val.path ? 'active' : ''}
                                        >
                                            <div id='icon'>{val.icon}</div>
                                            <div id='title'>{val.title}</div>
                                    </div>
                            </Link>
                        )
                    })}
                </ul>
                <ul className='bottom-section'>
                    {SidebarBottomData.map((val, key) => {
                        return (
                            <Link
                                key={key}
                                className='row'
                                to={val.path}
                                >
                                    <div
                                        className='container'
                                        // id={window.location.pathname === val.path ? 'active' : ''}
                                        >
                                            <div id='icon'>{val.icon}</div>
                                            <div id='title'>{val.title}</div>
                                    </div>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;