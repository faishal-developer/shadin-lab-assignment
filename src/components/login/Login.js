import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import Input from './Input';
import './login.css'

const Login = () => {
    const {lUser,setLUser} = useContext(ThemeContext)

    
    const icon1 = <i className="fa-solid fa-user"></i>
    const icon2 = <i className="fa-solid fa-key"></i>
    return (  
        <>                    
            <Input 
                data={lUser}
                required={true} 
                setData={setLUser} 
                icon={icon1} 
                type='email' 
                place='Your email'
                name='email' 
            />
            <Input 
                data={lUser}
                required={true} 
                setData={setLUser} 
                icon={icon2} 
                type='password' 
                place='Password' 
                name='password' 
            />
            <input type='submit' />
            <p>
                <Link to='/register'>Not Registered Yet? Please go to Register page</Link >
            </p>
        </>             
    );
};

export default Login;