import React from 'react';
import { Calendar } from 'react-calendar';
import TimetableDaySection from './TimetableDaySection';
import styles from './timetable.module.css';
import useWindowSize from '../../../hooks/useWindowSize';

const Timetable = () => {
    const width = useWindowSize().width

    return (
        <>
            <div className={styles.scroll}>
                <TimetableDaySection />
                <TimetableDaySection />
                <TimetableDaySection />
                <TimetableDaySection />
                <TimetableDaySection />
            </div>

            {width > 800 ? <div className={styles.rightMenu}>
                <Calendar
                    className='calendar'
                />
            </div> : null}
        </>
    );
};

export default Timetable;