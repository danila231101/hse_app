import React from 'react';
import styles from './tableTitles.module.css';

const TableTitles = () => {
    return (
        <div className={styles.titleCell}>
            <div className={styles.titleRow}>
                <h5 className={styles.mediumText}> Name </h5>
                <div className={styles.vseparator} />  
                <h5 className={styles.mediumText}> Date </h5>
                <div className={styles.vseparator} />  
                <h5 className={styles.smallText}> Grade </h5>
                <div className={styles.vseparator} />  
                <h5 className={styles.mediumText}> Submitted by </h5>
                <div className={styles.vseparator} />  
                <h5 className={styles.smallText}> See work </h5>
            </div>
        </div>
    );
};

export default TableTitles;