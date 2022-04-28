import React from 'react';

const CheckBox = ({ label,value,handleCheck,head }) => {

    const isSizes = head === 'Sizes' ?true : false
    return (
        <div className='d-flex'>
            <label  htmlFor={value} className='ash-color'>
                <input onClick={(e) => handleCheck(isSizes,e)} className='checkbox' type='checkbox' value={value} id={value} />
                <span className='styled-checkbox'><span className='s-cbox-opacity'></span></span>
                <span className='orange-checked'>{label}</span>
            </label>
        </div>
    );
};

export default CheckBox;