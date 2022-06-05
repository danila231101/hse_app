import React from 'react';
import Options from '../../components/UI/options/Options';
import SubjectMenu from '../../components/UI/subjectMenu/SubjectMenu';
import Table from '../../components/UI/table/Table';
import styles from './grades.module.css';
import useWindowSize from '../../hooks/useWindowSize';

const Grades = () => {
    const width = useWindowSize().width

    return (
        <>
            <nav className={styles.navbar}>
                <h1>Grades</h1>
            </nav>
            <div className={styles.content}>
                <div className={styles.scroll}>
                    <Options />
                    <Table />
                </div>
                {/* {width > 800 ? 
                <div className={styles.rightMenu}>
                    <SubjectMenu />
                </div> : null} */}
            </div>
        </>
    );
};

export default Grades;