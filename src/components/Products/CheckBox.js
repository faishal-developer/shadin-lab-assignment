import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/Context';

const CheckBox = ({ label,value,handleCheck,head }) => {
    let { size,brand} = useContext(ThemeContext)
    const isSizes = head === 'Sizes' ?true : false
    const isChecked = (value,array)=>{
        return array.includes(value)
    }
    return (
        <div className='d-flex'>
            <label  htmlFor={value} className='ash-color'>
                <input checked={isChecked(value,isSizes?size:brand)} onChange={(e) => handleCheck(isSizes,e)} className='checkbox' type='checkbox' value={value} id={value} />
                <span className='styled-checkbox'><span className='s-cbox-opacity'></span></span>
                <span className='orange-checked'>{label}</span>
            </label>
        </div>
    );
};

export default CheckBox;