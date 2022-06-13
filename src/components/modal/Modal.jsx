import React from 'react';
import styles from './modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    // const rootClasses = [styles.modal]
    // if (visible) {
    //     rootClasses.push(styles.active)
    // }

    return (
        <div className={visible ? styles.modalActive : styles.modalHidden} onClick={() => setVisible(false)}>
            <div className={styles.content} 
            // onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;