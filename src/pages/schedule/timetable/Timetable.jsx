import { axios } from 'axios';
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { useEffect } from 'react/cjs/react.development';
import useWindowSize from '../../../hooks/useWindowSize';
import { dateMonthHandler } from '../../../utils/dateHandler';
import styles from './timetable.module.css';
import TimetableDaySection from './TimetableDaySection';
import { TimetableData } from '../../../data/TimetableJSON';

const Timetable = () => {
    const width = useWindowSize().width

    const [timetableJSON, setTimetableJSON] = useState({'pageNum':0, 'timeTable':{}}) 
    // const baseURLget = "https://hse-backend-test.herokuapp.com/schedule/?page=1"

    async function fetchTimetable() {
        // const response = await axios.get(baseURLget)
        // setTimetableJSON(response.data);
        // console.log(response.data)
        setTimetableJSON(TimetableData)
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