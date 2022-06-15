import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import OptionMenu from '../../../components/UI/optionMenu/OptionMenu';
import useWindowSize from '../../../hooks/useWindowSize';
import { dateMonthHandler } from '../../../utils/dateHandler';
import AssignmentDaySection from './AssignmentDaySection';
import styles from './assignments.module.css';

const Assignments = () => {
    const width = useWindowSize().width
    const [option, setOption] = useState(0)

    const [assignmentJSON, setAssignmentJSON] = useState({'pageNum':0, 'assignments':{}}) 
    const baseURLget = "https://hse-backend-test.herokuapp.com/assignments/?page=1"

    async function fetchAssignments() {
        const response = await axios.get(baseURLget)
        setAssignmentJSON(response.data);
    }

    useEffect(() => {fetchAssignments()}, [])

    return (
        <>
            <div className={styles.content}>
                {Object.keys(assignmentJSON.assignments).map((key) => 
                    <AssignmentDaySection
                        date = {dateMonthHandler(key)}
                        assignments = {assignmentJSON.assignments[key]}
                    />
                )}
            </div>
            {width > 1024 
                ? 
                <div className={styles.rightMenuWide}>
                    <Calendar
                        className={styles.calendar}
                    />
                    <OptionMenu 
                        options={['All','HomeWork','Midterm','Exam']}
                        option={option}
                        setOption={setOption}
                    />
                </div> 
                : 
                <div className={styles.rightMenuNarrow}>
                    <OptionMenu 
                    options={['All','HomeWork','Midterm','Exam']}
                    option={option}
                    setOption={setOption}
                    />
                </div>
            }
        </>
    );
};

export default Assignments;