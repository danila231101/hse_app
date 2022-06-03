import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginForm from '../../components/UI/loginForm/LoginForm';
import './login.css';

const Login = () => {
    return (
        <>
            <div className='loginPage'>
                <LoginForm/>
            </div>
        </>
    );
};

export default Login;