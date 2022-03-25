import React from 'react';
import { useState } from 'react';
import './sidebar.css';
import { ReactComponent as IconArrow } from './icons/arrow-right.svg';
import { SidebarMiddleData, SidebarBottomData } from './SidebarData';

const Sidebar = () => {

    const [sideBar, setSideBar] = useState(true)
    const showSideBar = () => setSideBar(!sideBar)

    return (
        <>
            <div className= {sideBar ? 'side-bar' : 'side-bar inactive'}>
                <div className='top-section'>
                    <div className='row'>
                        <div id='picture'>

                        </div>
                        <div className='stack'>
                            <text id='name'> 
                                Danila Kokin
                            </text>
                            <text id='status'>
                                student
                            </text>
                        </div>
                        <div id='toggle-btn'>
                            <IconArrow
                                onClick={showSideBar}
                            />  
                        </div> 
                    </div>
                </div>
                <ul className='middle-section'>
                    {SidebarMiddleData.map((val, key) => {
                        return(
                            <li 
                                key={key} 
                                className='row'
                                onClick={() => {window.location.pathname = val.path}}>
                                <div 
                                    className='container' 
                                    id={window.location.pathname === val.path ? 'active' : ''}>
                                    <div id='icon'>
                                        {val.icon}
                                    </div>
                                    <div id='title'>
                                        {val.title}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul >
                <ul className='bottom-section'>
                    {SidebarBottomData.map((val, key) => {
                        return(
                            <li 
                                key={key} 
                                className='row'
                                onClick={() => {window.location.pathname = val.path}}>
                                <div 
                                    className='container'
                                    id={window.location.pathname === val.path ? 'active' : ''}>
                                    <div id='icon'>
                                        {val.icon}
                                    </div>
                                    <div id='title'>
                                        {val.title}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;