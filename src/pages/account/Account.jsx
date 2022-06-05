import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MonitorIcon } from '../../assets/icons/monitor.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/smartphone.svg';
import { AccountInfo } from './AccountData';
import styles from './account.module.css';

const Account = () => {

    return (
        <>
            <div className={styles.scroll}>
                <img src={require("./notion-avatar-1654242914584.png")} alt="Gigachad" className={styles.photo}/>
                <div className={styles.info}>
                    <div className={styles.infoSection}>
                        <h5 style={{color: 'var(--accent)'}}> {AccountInfo.type.toUpperCase()} </h5>
                        <h1> {AccountInfo.name} {AccountInfo.patronymic} {AccountInfo.surname} </h1>
                        <h3 style={{color: 'var(--secondary)'}}>{AccountInfo.group}</h3>
                    </div>
                    <div className={styles.infoSection}>
                        <h3> Phone </h3>
                        <h4 style={{color: 'var(--secondary)'}}> {AccountInfo.phone} </h4>
                    </div>
                    <div className={styles.infoSection}>
                        <h3> Address </h3>
                        <h4 style={{color: 'var(--secondary)'}}> {AccountInfo.address} </h4>
                    </div>
                    <div className={styles.infoSection}>
                        <h3> Email </h3>
                        <h4 style={{color: 'var(--secondary)'}}> {AccountInfo.email} </h4>
                    </div>
                    <div className={styles.infoSection}>
                        <h3> Date of Birth </h3>
                        <h4 style={{color: 'var(--secondary)'}}> {AccountInfo.dateBirth} </h4>
                    </div>
                    <div className={styles.infoSection}>
                        <h3> Applications </h3>
                        <a 
                            target="_blank" 
                            href="https://testflight.apple.com/join/DOpMcusn" 
                            className={styles.button} rel="noreferrer">
                            <PhoneIcon />
                            <h3>
                                Download IOS App
                            </h3>
                        </a>
                        <a
                            target="_blank" 
                            href="https://www.apple.com/app-store/" 
                            className={styles.button} rel="noreferrer">
                            <PhoneIcon />
                            <h3>
                                Download Android App
                            </h3>
                        </a>
                        <Link 
                            to="./public/files/pres.pdf" 
                            target="_blank" 
                            download 
                            className={styles.button}>
                            <MonitorIcon />
                            <h3>
                                Download MacOS App
                            </h3>
                        </Link>
                        <Link 
                            to="./public/files/pres.pdf" 
                            target="_blank" 
                            download 
                            className={styles.button}>
                            <MonitorIcon />
                            <h3>
                                Download Windows App
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
