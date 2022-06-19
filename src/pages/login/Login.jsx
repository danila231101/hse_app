import React from 'react';
import LoginForm from '../../components/UI/loginForm/LoginForm';
import styles from './login.module.css';

const Login = () => {
    return (
        <>
            <div className={styles.loginPage}>
                <LoginForm/>
            </div>
            {/* <LoginForm /> */}
        </>
    );
};

export default Login;