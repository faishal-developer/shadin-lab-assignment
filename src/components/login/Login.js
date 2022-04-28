import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import './login.css'

const Login = () => {

    
    const icon1 = <i className="fa-solid fa-user"></i>
    const icon2 = <i className="fa-solid fa-key"></i>
    return (  
        <>                    
            <Input icon={icon1} type='text' place='Your Name' name='name' />
            <Input icon={icon2} type='password' place='Password' name='password' />
            <input type='submit' />
            <p>
                <Link to='/auth/register'>Not Registered Yet? Please go to Register page</Link >
            </p>
        </>             
    );
};

export default Login;