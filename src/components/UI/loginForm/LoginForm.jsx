import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { AuthContext } from '../../../API/AuthContext';
// import { AxiosContext } from '../../../API/AxiosProvider';
import styles from './loginForm.module.css';
import SegmentedControl from './SegmentedControl';


const LogInForm = () => {
    const baseURL = "https://hse-backend-test.herokuapp.com/auth/login";
    const baseURLget = "https://hse-backend-test.herokuapp.com/assignments/?page=1"
    const headers = { 'Content-Type':'application/json'}
    const [post, setPost] = useState(null);

    const [role, setRole] = useState('STUDENT')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const authContext = useContext(AuthContext);
    // const {publicAxios} = useContext(AxiosContext);
    const data = {
        'email': "gelik228@gmail.com",
        'password': "32283228",
        'role': "PROFESSOR"
    }

    const onLogin = async () => {
        createPost()

    };

    function createPost() {
        axios.post(baseURLget, data, headers).then((response) => {
        console.log(response);
        });
    }

    return (
        <div className={styles.loginCard}>
            <text className={styles.header}>HSE Connect</text>

            <SegmentedControl role={role} setNewRole={setRole} />
            <input 
                className={styles.emailInput}
                type='email' 
                name='email' 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className={styles.emailInput}
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <div 
                className={styles.primaryButton}
                // onClick={() => console.log(role, email, password)}
                // onClick={() => {onLogin()}}
                onClick={() => window.location.pathname = '/schedule'}
            >
                Log in
            </div>
            <div className={styles.tertiaryButton}>Can't log in</div>
        </div>
    );
};

export default LogInForm;