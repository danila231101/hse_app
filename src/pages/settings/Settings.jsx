import React from 'react';
import { Outlet } from 'react-router-dom';

const Settings = () => {
    return (
        <>
        <h1>
            SETTINGS
        </h1>
        <Outlet/>
        </>
    );
};

export default Settings;
