import React from 'react';
import styles from './teacherUnit.module.css';

const TeacherUnit = (props) => {
    return (
        <div className={styles.cell}>
            <img src={props.teacherPhoto} alt="teacherPhoto" className={styles.photo}/>
            <div className={styles.info}>
                <h3>{props.teacherName} {props.teacherSurname}</h3>
                <h5>{props.teacherRole} · {props.teacherGroup}</h5>
            </div>
        </div>
    );
};

export default TeacherUnit;