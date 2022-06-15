import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { AuthContext } from '../../../API/AuthContext';
// import { AxiosContext } from '../../../API/AxiosProvider';
import './loginForm.css';
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
        <div className='loginCard'>
            <text className='header'>HSE Connect</text>

            <SegmentedControl role={role} setNewRole={setRole} />
            <input 
                className='emailInput'
                type='email' 
                name='email' 
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className='emailInput'
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button 
                className='primaryButton'
                // onClick={() => console.log(role, email, password)}
                // onClick={() => {onLogin()}}
                onClick={() => window.location.pathname = '/schedule'}
            >
                Log in
            </button>
            <button className='tertiaryButton'>Can't log in</button>
        </div>
    );
};

export default LogInForm;