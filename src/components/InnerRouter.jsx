import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Courses from '../pages/courses/Courses';
import Error from '../pages/error/Error';
import Grades from '../pages/grades/Grades';
import Schedule from '../pages/schedule/Schedule';
import Settings from '../pages/settings/Settings';
import Login from '../pages/login/Login';
import Sidebar from './UI/sideMenu/Sidebar';

const InnerRouter = () => {
    return (
        <div className='page'>
            <Routes>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/grades' element={<Grades/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>
    );
};

export default InnerRouter;