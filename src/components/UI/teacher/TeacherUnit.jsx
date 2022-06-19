import React from 'react';
import styles from './teacherUnit.module.css';

const TeacherUnit = ({photo, name, surname, role, group}) => {
    return (
        <div className={styles.cell}>
            <img src={photo} alt="" className={styles.photo}/>
            <div className={styles.info}>
                <h3>{name} {surname}</h3>
                {group !== null 
                    ?
                    <h5>{role} · {group}</h5>
                    :
                    <h5>{role}</h5>
                }
            </div>
        </div>
    );
};

export default TeacherUnit;