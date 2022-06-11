import React from 'react';
import styles from './segmentedControl.module.css';

const SegmentedControl = ({role, setNewRole}) => {

    return (
        <div className={styles.segmentedControl}>
            <button 
                onClick={() => {setNewRole('STUDENT')}}
                className= {role === 'STUDENT' ? styles.buttonActive : styles.buttonInactive}>
                    Student
            </button>
            <button 
                onClick={() => {setNewRole('TA')}}
                className= {role === 'TA' ? styles.buttonActive : styles.buttonInactive}
            >
                    Assistant
            </button>
            <button
                onClick={() => {setNewRole('PROFESSOR')}}
                className= {role === 'PROFESSOR' ? styles.buttonActive : styles.buttonInactive}>
                    Professor
            </button>
        </div>
    );
};

export default SegmentedControl;