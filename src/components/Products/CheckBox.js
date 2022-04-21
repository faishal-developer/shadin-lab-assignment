import React from 'react';

const CheckBox = ({ value }) => {
    return (
        <div className='d-flex'>
            <label htmlFor={value} className='ash-color'>
                <input className='checkbox' type='checkbox' value={value} id={value} />
                <span className='styled-checkbox'><span className='s-cbox-opacity'></span></span>
                <span className='orange-checked'>{value}</span></label>
        </div>
    );
};

export default CheckBox;