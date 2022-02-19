import React from 'react';
import SvgSelector from '../SvgSelector';
import './sideMenu.css';

const SideMenu = () => {
    return (
        <div className='sideMenu inactive'>
            <div className='topSection' >
                <SvgSelector 
                    id='award'
                    fill='#1F4EC7'
                />
            </div>
            <div className='middleSection'>
                <button className='menuButton'>
                    Schedule
                </button>
                <button className='menuButton'>
                    Courses
                </button>
                <button className='menuButton'>
                    Grades
                </button>
            </div>
            <div className='bottomSection'>
                <button className='menuButton'>
                    Log out
                </button>
                <button className='menuButton'>
                    Settings
                </button>

            </div>
            
        </div>
    );
};

export default SideMenu;