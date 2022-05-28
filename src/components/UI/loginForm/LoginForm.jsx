import React from 'react';
import './loginForm.css';

const LogInForm = () => {
    // const {loading, request} = useHttp()
    // const [form, setForm] = useState({email:'', password:''})

    // const changeHandler = event => {
    //     setForm({...form, [event.target.name]: event.target.value})
    // }

    // const requestHandler = async () => {
    //     try {
    //         const data = await request('/', 'POST', {...form})
    //     } catch (e) {}
    // }


    return (
        <div className='loginCard'>
            <text className='header'>HSE Connect</text>

            <div className='segmentedControl'>
                <button className='selectorButton'>Student</button>
                <button className='selectorButton'>Assistant</button>
                <button className='selectorButton'>Professor</button>
            </div>

            <input 
                className='emailInput'
                type='email' 
                name='email' 
                placeholder='Email'
                // onChange={changeHandler}
            />
            <input 
                className='emailInput'
                type='password'
                name='password'
                placeholder='Password'
                // onChange={changeHandler}
            />
            <button 
                className='primaryButton'
                onClick={() => {window.location.pathname = 'main'}}
                // disabled={loading}
            >
                Log in
            </button>
            <button className='tertiaryButton'>Can't log in</button>
        </div>
    );
};

export default LogInForm;