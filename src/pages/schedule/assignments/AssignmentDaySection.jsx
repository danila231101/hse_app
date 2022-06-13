import React from 'react';
import AssignmentUnit from './AssignmentUnit';
import styles from './assignmentDaySection.module.css';

const AssignmentDailySection = ({date, assignments, setModal}) => {
    return (
        <div className={styles.daySection}>
            <div className={styles.date}>
                <h3 className={styles.dateText}>
                    {date}
                </h3>
            </div>
            {assignments.map((assignment, key) =>
                <AssignmentUnit 
                    key={key}
                    subject={assignment.courseName} 
                    name={assignment.assignmentName}
                    deadlineTime={assignment.deadlineTime}
                    submissionTime={assignment.submissionTime}
                    setModal={setModal}
                />
            )}
        </div>
    );
};

export default AssignmentDailySection;