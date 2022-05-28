import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Courses from '../pages/courses/Courses';
import Grades from '../pages/grades/Grades';
import Login from '../pages/login/Login';
import Assignments from '../pages/schedule/assignments/Assignments';
import Schedule from '../pages/schedule/Schedule';
import Timetable from '../pages/schedule/timetable/Timetable';
import Settings from '../pages/settings/Settings';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='main' element={<Main />}>
                <Route index element={<Schedule />} />
                <Route path='schedule' element={<Schedule />} >
                    <Route index element={<Timetable />} />
                    <Route path='timetable' element={<Timetable />} />
                    <Route path='assignments' element={<Assignments />} />
                </Route>
                <Route path='courses' element={<Courses />} />
                <Route path='grades' element={<Grades/>}/>
                <Route path='settings' element={<Settings/>}/>
                {/* <Route path='*' element={<Navigate to='/' replace />}/> */}
            </Route>
        </Routes>
    );
};

export default AppRouter;