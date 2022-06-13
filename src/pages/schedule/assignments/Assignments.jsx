import React from 'react';
import { Calendar } from 'react-calendar';
import AssignmentDaySection from './AssignmentDaySection';
import styles from './assignments.module.css';
import 'react-calendar/dist/Calendar.css';
import useWindowSize from '../../../hooks/useWindowSize';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { dateMonthHandler } from '../../../utils/dateHandler';
import OptionMenu from '../../../components/UI/optionMenu/OptionMenu';
import Modal from '../../../components/modal/Modal';

const Assignments = () => {
    const width = useWindowSize().width
    const [option, setOption] = useState(0)

    const [assignmentJSON, setAssignmentJSON] = useState({'pageNum':0, 'assignments':{}}) 
    const baseURLget = "https://hse-backend-test.herokuapp.com/assignments/?page=1"

    async function fetchAssignments() {
        // const response = await axios.get(baseURLget)
        // setAssignmentJSON(response.data);
        // console.log(response.data)
        setAssignmentJSON({ 'pageNum':0, 
                            'assignments':
                                {
                                    '2022-06-10T16:30:00.000Z':[
                                        {
                                            'id':1,
                                            'deadlineType':'hw',
                                            'courseName':'Discrete Math',
                                            'assignmentName':'Venus and Pinus',
                                            'deadlineTime':'2022-06-10T16:30:00.000Z',
                                            'submissionTime':'2022-06-10T16:30:00.000Z',

                                        },
                                        {
                                            'id':1,
                                            'deadlineType':'hw',
                                            'courseName':'Discrete Math',
                                            'assignmentName':'Venus and Pinus',
                                            'deadlineTime':'2022-06-10T16:30:00.000Z',
                                            'submissionTime':'2022-06-10T16:30:00.000Z',

                                        }
                                    ]
                                }
                            })
    }

    useEffect(() => {fetchAssignments()}, [])

    return (
        <>
            {/* <Modal visible={modal} setVisible={setModal}>
                <h1>hello</h1>
            </Modal> */}
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