import React from 'react';
import TimetableEvent from './TimetableEvent';
import styles from './timetableDaySection.module.css';

const TimetableDaySection = () => {
    return (
        <div className={styles.daySection}>
            <h3 className={styles.date}>
                MONDAY, JANUARY 10
            </h3>
            <TimetableEvent />
            <TimetableEvent />
            <TimetableEvent />
            <TimetableEvent />
        </div>
    );
};

export default TimetableDaySection;