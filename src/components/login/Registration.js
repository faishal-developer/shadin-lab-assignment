import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

const Registration = () => {
    
    const icon1 = <i className="fa-solid fa-user"></i>
    const icon2 = <i className="fa-solid fa-key"></i>
    const icon3 = <i className="fa-solid fa-envelope"></i>
    return (
        <>
            <Input icon={icon1} type='text' place='Your name' name='name' />
            <Input icon={icon3} type='email' place='Your Email' name='email' />
            <Input icon={icon2} type='password' place='Password' name='password' />
            <Input icon={icon2} type='password' place='Retype Password' name='password2' />
            <input type='submit' /> 
            <p>
                <Link to='/login'>Already Registered? Please go to login page</Link >
            </p>
        </>
    );
};

export default Registration;