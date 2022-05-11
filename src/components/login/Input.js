import React from 'react';
import useForm from '../hooks/useForm';

const Input = ({type,place,name,icon}) => {
    const { handleBlur} = useForm()
    return (
        <>
            <span className='input-icon'>{icon}</span>
            <input required onBlur={(e)=>handleBlur(e)} type={type} placeholder={place} name={name}/>
            <br/>
        </>
    )
};

export default Input;