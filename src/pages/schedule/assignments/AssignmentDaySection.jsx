import React from 'react';
import styles from './assignmentDaySection.module.css';
import { AssignmentUnit } from './AssignmentUnit';


const AssignmentDailySection = ({date, assignments}) => {
    return (
        <div className={styles.daySection}>
            <div className={styles.date}>
                <h3 className={styles.dateText}>
                    {date}
                </h3>
            </div>
            {console.log(assignments)}
            {Object.values(assignments).map((assignment) => {
                return (
                    <AssignmentUnit
                        courseName={assignment.courseName}
                        assignmentName={assignment.assignmentName}
                        deadlineTime={assignment.deadlineTime}
                        submissionTime={assignment.submissionTime}
                    />
                )
            })}
        </div>
    );
};

export default AssignmentDailySection;