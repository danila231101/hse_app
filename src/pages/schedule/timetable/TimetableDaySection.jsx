import React from 'react';
import TimetableEvent from './TimetableEvent';
import styles from './timetableDaySection.module.css';

const TimetableDaySection = () => {
    return (
        <div className={styles.daySection}>
            <div className={styles.date}>
                <h3 className={styles.dateText}>
                    MONDAY, JANUARY 10
                </h3>
            </div>
            <TimetableEvent />
            <TimetableEvent />
            <TimetableEvent />
            <TimetableEvent />
        </div>
    );
};

export default TimetableDaySection;