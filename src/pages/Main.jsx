import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './main.module.css';
import Sidebar from '../components/UI/sideBar/Sidebar';

const Main = () => {
    return (
        <div className={styles.page}>
            <Sidebar />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default Main;