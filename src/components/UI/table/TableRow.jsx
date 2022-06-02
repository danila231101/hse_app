import React from 'react';
import styles from './tableRow.module.css';

const TableRow = () => {
    return (
        <div className={styles.cell}>
            <div className={styles.row}>
                <h4 className={styles.mediumText}> HW 16 </h4>
                <div className={styles.vseparator} />  
                <h4 className={styles.mediumText}> 26.01.2022 </h4>
                <div className={styles.vseparator} />  
                <h4 className={styles.smallText}> 10 </h4>
                <div className={styles.vseparator} />  
                <h4 className={styles.mediumText}> Anton Vlasov </h4>
                <div className={styles.vseparator} />  
                <div className={styles.smallText}> * </div>
            </div>
            <div className={styles.hseparator} />    
        </div>
    );
};

export default TableRow;