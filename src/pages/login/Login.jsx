import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginForm from '../../components/UI/loginForm/LoginForm';
import styles from './login.module.css';

const Login = () => {
    return (
        <>
            <div className={styles.loginPage}>
                <LoginForm/>
            </div>
        </>
    );
};

export default Login;