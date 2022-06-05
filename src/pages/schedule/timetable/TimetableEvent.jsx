import React from 'react';
import {ReactComponent as VideoIcon} from '../../../assets/icons/video.svg';
// import {ReactComponent as IconRecording} from './recording.svg';
import styles from './timetableEvent.module.css';

const TimetableEvent = () => {
    return (
        <div className={styles.event}>
            <div className={styles.contentLeft}>
                <h3 className={styles.timeStart}>11:10</h3>
                <h5 className={styles.timeEnd}>12:30</h5>
            </div>
            <div className={styles.contentSeparator}>
            </div>
            <div className={styles.contentRight}>
                <h5 className={styles.type}>
                    LECTURE
                </h5>
                <h3 className={styles.name}>
                    Бизнес аналитика и финансовый инжиниринг (анг)
                </h3>
                <div className={styles.presenter}>
                    <div className={styles.presenterPhoto}/>
                    <h4 className={styles.presenterName}>
                        Асриев Артем Владимирович
                    </h4>
                </div>
                <h4 className={styles.meetingLink}>
                    Online
                </h4>
                <VideoIcon style={{color: 'var(--secondary)'}}/>
            </div>
        </div>
    );
};

export default TimetableEvent;