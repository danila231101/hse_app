import React from 'react';
import styles from './subjectMenu.module.css';
import useWindowSize from '../../../hooks/useWindowSize';

const SubjectMenu = () => {
    const width = useWindowSize().width

    return (
        <div className={width > 1024 ? styles.menuWide : styles.menuNarrow}>
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