import React, { useEffect } from 'react';
import {Outlet, useLocation, useNavigate } from 'react-router-dom';

const LoginLayOut = () => {
    let navigate = useNavigate();
    const location = useLocation()
    
    
    const logOrRegister = location?.pathname
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }
    useEffect(()=>{
        if (logOrRegister === '/auth') {
            console.log('ggg');
            navigate('/auth/login')
        }
    },[logOrRegister,navigate])
    
    return (
        <div className='flex a-i-center j-c-center login h-100vh'>
            <div className='form'>
                <h2>Please {logOrRegister ==='/auth/register'?'Register':'Login'}</h2>
                <form onSubmit={(e) => handleSubmit(e)} className='log-form'>
                    <Outlet/>
                </form>
            </div>
        </div>
    );
};

export default LoginLayOut;