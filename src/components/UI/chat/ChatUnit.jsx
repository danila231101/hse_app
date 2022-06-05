import React from 'react';
import styles from './chatUnit.module.css';

const ChatUnit = (props) => {
    return (
        <div className={styles.chat}>
            <img src={props.photo} alt="chatPhoto" className={styles.photo}/>
            <div className={styles.info}>
                <div className={styles.title}>
                    <h3>{props.title}</h3>
                </div>
                <h4>{props.lastSender}</h4>
                <div className={styles.message}>
                    <h4 className={styles.messageContent}>{props.messageText}</h4>
                    <h4 className={styles.time}>{props.messageTime}</h4>
                </div>
            </div>
            <div className={styles.messageCounter}>
                <h5 style={{color:'var(--secondary)'}}>{props.messageCounter}</h5>
            </div>
        </div>
    );
};

export default ChatUnit;