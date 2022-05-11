import React, { useEffect } from 'react';
import {Outlet, useLocation, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';

const LoginLayOut = (props) => {
    let navigate = useNavigate();
    const location = useLocation()
    const { handleSubmit} = useForm()
    
    console.log(props.location);
    const logOrRegister = location?.pathname
    // useEffect(()=>{
    //     if (logOrRegister === '/auth') {
    //         navigate('/auth/login')
    //     }
    // },[logOrRegister,navigate])
    
    return (
        <div className='flex a-i-center j-c-center login h-100vh'>
            <div className='form'>
                <h2>Please {logOrRegister ==='/register'?'Register':'Login'}</h2>
                <form onSubmit={(e) => handleSubmit(e,location,navigate)} className='log-form'>
                    <Outlet/>
                </form>
            </div>
        </div>
    );
};

export default LoginLayOut;