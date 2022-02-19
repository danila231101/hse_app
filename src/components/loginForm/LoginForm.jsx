import React from 'react';
import './loginForm.css'

const LogInForm = () => {
    return (
        <div className='loginCard'>
            <text className='header'>
                HSE Connect
            </text>

            <input 
                type='text' 
                placeholder='Email' 
                className='emailInput'
            />

            <input 
                type='text'
                placeholder='Password' className='passwordInput'
            />

            <button className='primaryButton'>
                Log in
            </button>

            <button className='tertiaryButton'>
                Can't log in?
            </button>
        </div>
    );
};

export default LogInForm;