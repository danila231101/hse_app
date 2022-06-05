import React from 'react';
import styles from './gradingSection.module.css';

const GradingSection = (props) => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>

            <div className={styles.formula}>
                <h4 className={styles.formulaText}>{props.formula}</h4>
            </div>
        </div>
    );
};

export default GradingSection;