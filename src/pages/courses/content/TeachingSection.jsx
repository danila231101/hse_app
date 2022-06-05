import React from 'react';
import TeacherUnit from '../../../components/UI/teacher/TeacherUnit';
import styles from './teachingSection.module.css';

const TeachingSection = (props) => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>

            <div className={styles.teachers}>
                <TeacherUnit 
                    teacherPhoto={require("./notion-avatar-1654242901443.png")}
                    teacherName='Andrey'
                    teacherSurname='Mazhuga'
                    teacherRole='Seminarist'
                    teacherGroup='193'
                />
                <TeacherUnit 
                    teacherPhoto={require("./notion-avatar-1654242901443.png")}
                    teacherName='Andrey'
                    teacherSurname='Mazhuga'
                    teacherRole='Seminarist'
                    teacherGroup='193'
                />
                <TeacherUnit 
                    teacherPhoto={require("./notion-avatar-1654242901443.png")}
                    teacherName='Andrey'
                    teacherSurname='Mazhuga'
                    teacherRole='Seminarist'
                    teacherGroup='193'
                />
                <TeacherUnit 
                    teacherPhoto={require("./notion-avatar-1654242901443.png")}
                    teacherName='Andrey'
                    teacherSurname='Mazhuga'
                    teacherRole='Seminarist'
                    teacherGroup='193'
                />
                <TeacherUnit 
                    teacherPhoto={require("./notion-avatar-1654242901443.png")}
                    teacherName='Andrey'
                    teacherSurname='Mazhuga'
                    teacherRole='Seminarist'
                    teacherGroup='193'
                />
                <TeacherUnit 
                    teacherPhoto={require("./notion-avatar-1654242901443.png")}
                    teacherName='Andrey'
                    teacherSurname='Mazhuga'
                    teacherRole='Seminarist'
                    teacherGroup='193'
                />
            </div>
        </div>
    );
};

export default TeachingSection;