import React from 'react';
import styles from './teacherUnit.module.css';

const TeacherUnit = (props) => {
    return (
        <div className={styles.cell}>
            <img src={props.teacherPhoto} alt="TP" className={styles.photo}/>
            <div className={styles.info}>
                <h3>{props.teacherName} {props.teacherSurname}</h3>
                {props.teacherGroup === null 
                    ?
                    <h5>{props.teacherRole} · {props.teacherGroup}</h5>
                    :
                    <h5>{props.teacherRole}</h5>
                }
            </div>
        </div>
    );
};

export default TeacherUnit;