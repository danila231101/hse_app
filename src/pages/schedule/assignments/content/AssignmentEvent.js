import React from 'react';
import './assignmentEvent.css';

const AssignmentEvent = () => {
    return (
        <div className='event__content'>
            <div className='content__indicator'></div>
            <div className='content__right'>
                <h5 className='subject'>
                    MACHINE LEARNING 1 (ENG)
                </h5>
                <h3>
                    HW 14: Venus and Mars
                </h3>
                <div className='rows'>
                    <li className='beige'>
                        <h4>
                            Till 23:59
                        </h4>
                    </li>
                    <li className='beige'>
                        <h4>
                            Submitted at 00:00
                        </h4>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default AssignmentEvent;