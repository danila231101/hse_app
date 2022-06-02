import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Courses from '../pages/courses/Courses';
import Grades from '../pages/grades/Grades';
import Login from '../pages/login/Login';
import Main from '../pages/Main';
import Assignments from '../pages/schedule/assignments/Assignments';
import Schedule from '../pages/schedule/Schedule';
import Timetable from '../pages/schedule/timetable/Timetable';
import Settings from '../pages/settings/Settings';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='/' element={<Main />}>
                <Route path='/schedule' element={<Schedule />} >
                    <Route path='timetable' element={<Timetable />} /> 
                    <Route path='assignments' element={<Assignments />} />
                    {/* <Route index path='timetable' element={<Timetable />} /> */}
                </Route>
                <Route path='courses' element={<Courses />} />
                <Route path='grades' element={<Grades/>}/>
                <Route path='settings' element={<Settings/>}/>
                <Route index path='schedule' element={<Schedule />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;