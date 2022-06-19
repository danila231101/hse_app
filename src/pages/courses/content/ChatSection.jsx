import React from 'react';
import ChatUnit from '../../../components/UI/chat/ChatUnit';
import styles from './chatSection.module.css';

const ChatSection = ({title, chatList}) => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <h3>{title}</h3>
            </div>
            <div className={styles.chats}>
                {chatList.map((value) => {
                        return (
                            <ChatUnit
                                photo={value.photo}
                                title={value.title}
                                lastSender={value.lastSender}
                                messageText={value.messageText}
                                messageTime={value.messageTime}
                                messageCounter={value.messageCounter}
                            />
                        )
                    }
                )}
            </div>
        </div>
    );
};

export default ChatSection;