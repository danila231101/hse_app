import React from 'react';
import ChatUnit from '../../../components/UI/chat/ChatUnit';
import styles from './chatSection.module.css';

const ChatSection = (props) => {
    return (
        <div className={styles.section}>
            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={styles.chats}>
                <ChatUnit
                photo={require("./notion-avatar-1654242914584.png")}
                title='Important'
                lastSender='Me'
                messageText='Aaaa'
                messageTime='· 9 min'
                messageCounter={376}
                />
                <ChatUnit
                photo={require("./notion-avatar-1654242914584.png")}
                title='Important'
                lastSender='Me'
                messageText='Aaaa'
                messageTime='· 9 min'
                messageCounter={376}
                />
                <ChatUnit
                photo={require("./notion-avatar-1654242914584.png")}
                title='Important'
                lastSender='Me'
                messageText='Aaa'
                messageTime='· 9 min'
                messageCounter={376}
                />
            </div>
        </div>
    );
};

export default ChatSection;