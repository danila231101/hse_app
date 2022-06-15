import React from 'react';
import styles from './modal.module.css'
import { useState } from 'react';

const Modal = ({children, visible, setVisible}) => {

    return (
        <div onClick={() => setVisible(false)}
            className={visible ? styles.modalActive : styles.modalHidden}
        >
            <div 
                className={styles.content} 
                onClick={(e) => e.stopPropagation()}
                >
                {children}
            </div>
        </div>
    );
};

export default Modal;