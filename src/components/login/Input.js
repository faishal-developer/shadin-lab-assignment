import React from 'react';

const Input = ({type,place,name,icon}) => {
    return (
        <>
            <span className='input-icon'>{icon}</span>
            <input type={type} placeholder={place} name={name}/>
            <br/>
        </>
    )
};

export default Input;