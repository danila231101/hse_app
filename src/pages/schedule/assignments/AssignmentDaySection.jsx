import React from 'react';
import AssignmentUnit from './AssignmentUnit';
import styles from './assignmentDaySection.module.css';

const AssignmentDailySection = () => {
    return (
        <div className={styles.daySection}>
            <h3 className={styles.date}>
                MONDAY, JANUARY 10
            </h3>
            <AssignmentUnit />
            <AssignmentUnit />
            <AssignmentUnit />
            <AssignmentUnit />
            <AssignmentUnit />
        </div>
    );
};

export default AssignmentDailySection;