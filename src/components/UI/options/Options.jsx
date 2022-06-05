import React from 'react';
import styles from './options.module.css';

const Options = () => {
    // const width = useWindowSize().width

    return (
        <div className={styles.selectors}>
            <select className={styles.select}>
                <option className={styles.option}> Econometrics </option>
                <option> Linear Algebra </option>
                <option> Discrete Maths </option>
            </select>
            <select className={styles.select}>
                <option className={styles.option}> Semester 1 </option>
                <option> Semester 2 </option>
                <option> Semester 1&2 </option>
            </select>
            <select className={styles.select}>
                <option> Module 1 </option>
                <option> Module 2 </option>
                <option> Module 3 </option>
                <option> Module 4 </option>
            </select>
            <select className={styles.select}>
                <option> All </option>
                <option> Homework </option>
                <option> Midterm </option>
                <option> Exam </option>
            </select>
        </div>
    );
};

export default Options;