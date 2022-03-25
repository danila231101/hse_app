import React from 'react';
import './loginForm.css'

const LogInForm = () => {
    return (
        <div className='loginCard'>
            <text className='header'>
                HSE Connect
            </text>

            <div className='segmentedControl'>
                <button className='selectorButton'> 
                    Student
                </button>
                <button className='selectorButton'> 
                    Assistant
                </button>
                <button className='selectorButton'> 
                    Professor
                </button>
            </div>

            <input 
                className='emailInput'
                type='email' 
                placeholder='Email' 
            />

            <input 
                className='emailInput'
                type='password'
                placeholder='Password'
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