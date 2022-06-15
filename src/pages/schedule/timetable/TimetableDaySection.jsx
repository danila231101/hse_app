import React from 'react';
import TimetableEvent from './TimetableEvent';
import styles from './timetableDaySection.module.css';

const TimetableDaySection = ({date, events}) => {
    return (
        <div className={styles.daySection}>
            <div className={styles.date}>
                <h3 className={styles.dateText}>
                    {date}
                </h3>
            </div>
            {events.map((event, key) =>
                <TimetableEvent 
                    key={key}
                    timeStart={event.timeStart} 
                    timeEnd={event.timeEnd} 
                    type={event.lessonType} 
                    name={event.lessonName} 
                    presenter={null} 
                    isOnline={event.isOnline} 
                    address={event.address}
                />
            )}
        </div>
    );
};

export default TimetableDaySection;