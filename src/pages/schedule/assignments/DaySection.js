import React from 'react';
import Event from './Event';
import './daySection.css';

const DaySection = () => {
    return (
        <div className='day__section'>
            <h3 className='date'>MONDAY, JANUARY 10</h3>
            <Event/>
            <Event/>
            <Event/>
        </div>
    );
};

export default DaySection;