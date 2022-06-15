import { axios } from 'axios';
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { useEffect } from 'react/cjs/react.development';
import useWindowSize from '../../../hooks/useWindowSize';
import { dateMonthHandler } from '../../../utils/dateHandler';
import styles from './timetable.module.css';
import TimetableDaySection from './TimetableDaySection';

const Timetable = () => {
    const width = useWindowSize().width

    const [timetableJSON, setTimetableJSON] = useState({'pageNum':0, 'timeTable':{}}) 
    const baseURLget = "https://hse-backend-test.herokuapp.com/schedule/?page=1"

    async function fetchTimetable() {
        // const response = await axios.get(baseURLget)
        // setTimetableJSON(response.data);
        // console.log(response.data)
        setTimetableJSON(
            {
                "pageNum": 1,
                "timeTable": {
                        "2022-06-18": [
                            {
                                "id": 13,
                                "lessonType": "Lecture",
                                "isOnline": true,
                                "lessonName": "History",
                                "zoomLink": "gaylesbingaylesbiangaylesbiangaylesbian",
                                "address": null,
                                "dayDate": "2022-06-18",
                                "timeStart": "2022-06-18T16:30:00.000Z",
                                "timeEnd": "2022-06-18T18:00:00.000Z",
                                "createdAt": "2022-06-06T12:40:52.034Z",
                                "updatedAt": "2022-06-06T12:40:52.034Z"
                            }, 
                            {
                                "id": 13,
                                "lessonType": "Lecture",
                                "isOnline": true,
                                "lessonName": "History",
                                "zoomLink": "gaylesbingaylesbiangaylesbiangaylesbian",
                                "address": null,
                                "dayDate": "2022-06-18",
                                "timeStart": "2022-06-18T16:30:00.000Z",
                                "timeEnd": "2022-06-18T18:00:00.000Z",
                                "createdAt": "2022-06-06T12:40:52.034Z",
                                "updatedAt": "2022-06-06T12:40:52.034Z"
                            },
                            {
                                "id": 13,
                                "lessonType": "Lecture",
                                "isOnline": true,
                                "lessonName": "History",
                                "zoomLink": "gaylesbingaylesbiangaylesbiangaylesbian",
                                "address": null,
                                "dayDate": "2022-06-18",
                                "timeStart": "2022-06-18T16:30:00.000Z",
                                "timeEnd": "2022-06-18T18:00:00.000Z",
                                "createdAt": "2022-06-06T12:40:52.034Z",
                                "updatedAt": "2022-06-06T12:40:52.034Z"
                            }
                        ],
                        "2022-06-19": [
                            {
                                "id": 14,
                                "lessonType": "Lecture",
                                "isOnline": true,
                                "lessonName": "History",
                                "zoomLink": "gaylesbingaylesbiangaylesbiangaylesbian",
                                "address": null,
                                "dayDate": "2022-06-19",
                                "timeStart": "2022-06-19T16:30:00.000Z",
                                "timeEnd": "2022-06-19T18:00:00.000Z",
                                "createdAt": "2022-06-06T12:41:00.486Z",
                                "updatedAt": "2022-06-06T12:41:00.486Z"
                            }
                        ],
                        "2022-06-20": [
                            {
                                "id": 15,
                                "lessonType": "Lecture",
                                "isOnline": true,
                                "lessonName": "History",
                                "zoomLink": "gaylesbingaylesbiangaylesbiangaylesbian",
                                "address": null,
                                "dayDate": "2022-06-20",
                                "timeStart": "2022-06-20T16:30:00.000Z",
                                "timeEnd": "2022-06-20T18:00:00.000Z",
                                "createdAt": "2022-06-06T12:41:10.519Z",
                                "updatedAt": "2022-06-06T12:41:10.519Z"
                            }
                        ]
                    }
            }
        )
    }

    useEffect(() => {fetchTimetable()}, [])
    return (
        <>  
            <div className={styles.content}>
                {Object.keys(timetableJSON.timeTable).map((key) => 
                    <TimetableDaySection
                        date={dateMonthHandler(key)}
                        events={timetableJSON.timeTable[key]}
                    />
                )}
            </div>

            {width > 1024 ? <div className={styles.rightMenu}>
                <Calendar
                    className={styles.calendar}
                />
            </div> : null}
        </>
    );
};

export default Timetable;