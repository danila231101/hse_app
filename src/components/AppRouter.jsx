import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from '../pages/courses/Courses';
import Error from '../pages/error/Error';
import Login from '../pages/login/Login';
import Schedule from '../pages/schedule/Schedule';
import Grades from '../pages/grades/Grades';
import Settings from '../pages/settings/Settings';
import Sidebar from './UI/sideMenu/Sidebar';

const AppRouter = (isAuthenficated) => {
    if (isAuthenficated) {
        return (
            <Routes>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/grades' element={<Grades/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='*' element={<Navigate to="/schedule" replace />}/>
            </Routes>
    );
    }
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='*' element={<Navigate to="/" replace />}/>
        </Routes>
    );
};

export default AppRouter;