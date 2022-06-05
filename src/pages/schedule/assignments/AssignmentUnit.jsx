import React from 'react';
import styles from './assignmentUnit.module.css';

const AssignmentUnit = () => {
    return (
        <div className={styles.assignment}>
            <div className={styles.separator}></div>
            <div className={styles.content}>
                <h5 className={styles.subjectName}>
                    MACHINE LEARNING 1 (ENG)
                </h5>
                <h3>
                    HW 14: Venus and Mars
                </h3>
                <div className={styles.rows}>
                    <li className={styles.beige}>
                        <h4>
                            Till 23:59
                        </h4>
                    </li>
                    <li className={styles.beige}>
                        <h4>
                            Submitted at 00:00
                        </h4>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default AssignmentUnit;