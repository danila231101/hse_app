import React from 'react';
import { Calendar } from 'react-calendar';
import AssignmentDaySection from './AssignmentDaySection';
import styles from './assignments.module.css';
import 'react-calendar/dist/Calendar.css';
import useWindowSize from '../../../hooks/useWindowSize';

const Assignments = () => {
    const width = useWindowSize().width

    return (
        <>
            <div className={styles.scroll}>
                <AssignmentDaySection />
                <AssignmentDaySection />
                <AssignmentDaySection />
                <AssignmentDaySection /> 
            </div>
            {width > 1024 ? <div className={styles.rightMenu}>
                <Calendar
                    className='calendar'
                />
            </div> : null}
        </>
    );
};

export default Assignments;