import React from 'react';
import { Outlet } from 'react-router-dom';

const Grades = () => {
    return (
        <>
            <h1>
                GRADES
            </h1>
            <Outlet/>
        </>
    );
};

export default Grades;