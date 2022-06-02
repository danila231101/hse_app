import React from 'react';
import styles from './subjectMenu.module.css';

const SubjectMenu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.item}> 
                Linear Algebra 
            </div>
            <div className={styles.item}> 
                Time Series 
            </div>
            <div className={styles.item}> 
                Econometrics 
            </div>
            <div className={styles.item}> 
                Differential Equations 
            </div>
            <div className={styles.item}> 
                Databases 
            </div>
        </div>
    );
};

export default SubjectMenu;