import React from 'react';
import TeacherUnit from '../../../components/UI/teacher/TeacherUnit';
import styles from './teachingSection.module.css';

const TeachingSection = ({title, teachers}) => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <h3>{title}</h3>
            </div>

            <div className={styles.teachers}>
                {teachers.map((val) => 
                    <TeacherUnit
                        photo={val.photo}
                        name={val.name}
                        surname={val.surname}
                        role={val.role}
                        group={val.group}
                    />
                )}
            </div>
        </div>
    );
};

export default TeachingSection;