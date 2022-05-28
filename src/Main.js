import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/UI/sideBar/Sidebar';
import './main.css';

const Main = () => {
    return (
        <div className='page'>
            <Sidebar />
            <main className='main'>
                <Outlet />
            </main>
        </div>
    );
};

export default Main;