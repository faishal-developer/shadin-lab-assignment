import React, { useState } from 'react';
import PriceSlider from './PriceSlider';
import './Products.css'

const PriceFilter = () => {
    const [value, setValue] = useState([10,50])

    return (
        <div className='p-aside-common-bg '>
            <h3 className='orange-color p-aside-common-h3'>Price Filter</h3>
            <PriceSlider setValue={setValue}/>
            <p className='p-aside-pFilter-p ash-color'>
                From 
                <span className='p-aside-price'>{value[0]*10}</span> 
                To
                <span className='p-aside-price'>{value[1]*10}</span> 
            </p>
        </div>
    );
};

export default PriceFilter;