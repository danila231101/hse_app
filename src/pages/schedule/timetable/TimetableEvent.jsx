import React from 'react';
import {ReactComponent as VideoIcon} from '../../../assets/icons/video.svg';
import { dateTimeHandler } from '../../../utils/dateHandler';
// import {ReactComponent as IconRecording} from './recording.svg';
import styles from './timetableEvent.module.css';

const TimetableEvent = ({timeStart, timeEnd, type, name, presenter, isOnline, address}) => {
    return (
        <div className={styles.event}>
            <div className={styles.contentLeft}>
                <h3 className={styles.timeStart}>{dateTimeHandler(timeStart)}</h3>
                <h5 className={styles.timeEnd}>{dateTimeHandler(timeEnd)}</h5>
            </div>
            <div className={styles.contentSeparator}>
            </div>
            <div className={styles.contentRight}>
                <h5 className={styles.type}>
                    {type}
                </h5>
                <h3 className={styles.name}>
                    {name}
                </h3>
                {
                    presenter !== null 
                        ?
                            <div className={styles.presenter}>
                                <div className={styles.presenterPhoto}/>
                                <h4 className={styles.presenterName}>
                                    {presenter}
                                </h4>
                            </div>
                        :   null
                }
                {
                    address !== null 
                        ? <h4 className={styles.meetingLink}>{address}</h4>
                        : null
                }
                {
                    isOnline
                    ? <VideoIcon style={{color: 'var(--secondary)'}}/> 
                    : null
                }
            </div>
        </div>
    );
};

export default TimetableEvent;