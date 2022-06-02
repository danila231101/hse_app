import React from 'react';
import Options from '../../components/UI/options/Options';
import SubjectMenu from '../../components/UI/subjectMenu/SubjectMenu';
import Table from '../../components/UI/table/Table';
import styles from './grades.module.css';

const Grades = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <h1>Grades</h1>
            </nav>
            <div className={styles.scroll}>
                <div className={styles.content}>
                    <Options />
                    <Table />
                </div>
                <div className={styles.rightMenu}>
                    <SubjectMenu />
                </div>
            </div>
        </>
    );
};

export default Grades;