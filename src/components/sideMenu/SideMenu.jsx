import React from 'react';
import SvgSelector from '../SvgSelector';
import './sideMenu.css';

const SideMenu = () => {
    return (
        <div className='sideMenu'>
            <div className='topSection' >
                
            </div>
            <div className='middleSection'>
                <button className='menuButton'>
                    <SvgSelector 
                    id='award'
                    fill='#1F4EC7'
                    />
                    <text>
                        Schedule 
                    </text>
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