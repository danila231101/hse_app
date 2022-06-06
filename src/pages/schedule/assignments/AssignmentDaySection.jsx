import React from 'react';
import AssignmentUnit from './AssignmentUnit';
import styles from './assignmentDaySection.module.css';

const AssignmentDailySection = () => {
    return (
        <div className={styles.daySection}>
            <div className={styles.date}>
                <h3 className={styles.dateText}>
                    MONDAY, JANUARY 10
                </h3>
            </div>
            <AssignmentUnit />
            <AssignmentUnit />
            <AssignmentUnit />
            <AssignmentUnit />
            <AssignmentUnit />
        </div>
    );
};

export default AssignmentDailySection;