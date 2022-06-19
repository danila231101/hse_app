import React from 'react';
import styles from './descriptionSection.module.css';

const DescriptionSection = (props) => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>

            <div>
                <h4 style={{color:'var(--secondary)', whiteSpace: "pre-wrap"}}>{props.description}</h4>
            </div>
        </div>
    );
};

export default DescriptionSection;