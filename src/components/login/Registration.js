import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import Input from './Input';

const Registration = () => {
    const {lUser,setLUser} = useContext(ThemeContext)
    
    const icon1 = <i className="fa-solid fa-user"></i>
    const icon2 = <i className="fa-solid fa-key"></i>
    const icon3 = <i className="fa-solid fa-envelope"></i>
    return (
        <>
            <Input 
                data={lUser}
                required={true}
                setData={setLUser} 
                icon={icon1} 
                type='text' 
                place='Your name'
                name='name' 
            />
            <Input
                data={lUser}
                required={true}
                setData={setLUser} 
                icon={icon3} 
                type='email' 
                place='Your Email'
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
            <Input
                data={lUser}
                required={true}
                setData={setLUser} 
                icon={icon2} 
                type='password' 
                place='Retype Password'
                name='password2' 
            />
            <input type='submit' /> 
            <p>
                <Link to='/login'>Already Registered? Please go to login page</Link >
            </p>
        </>
    );
};

export default Registration;