import React from 'react';
import AssignmentEvent from './AssignmentEvent';

const AssignmentDailySection = () => {
    return (
        <div className='day__section'>
            <h3 className='date'>
                MONDAY, JANUARY 10
            </h3>
            <AssignmentEvent />
            <AssignmentEvent />
            <AssignmentEvent />
            <AssignmentEvent />
        </div>
    );
};

export default AssignmentDailySection;