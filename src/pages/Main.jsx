import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './main.module.css';
import Sidebar from '../components/UI/sideBar/Sidebar';

const Main = () => {
    return (
        <div className={styles.page}>
            <Sidebar />
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    );
}

export default Main;