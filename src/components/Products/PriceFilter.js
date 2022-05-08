import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/Context';
import PriceSlider from './PriceSlider';
import './Products.css'

const PriceFilter = () => {
    const {priceSlider,setPriceSlider} = useContext(ThemeContext)
    return (
        <div className='p-aside-common-bg '>
            <h3 className='orange-color p-aside-common-h3'>Price Filter</h3>
            <PriceSlider setValue={setPriceSlider}/>
            <p className='p-aside-pFilter-p ash-color'>
                From 
                <span className='p-aside-price'>{priceSlider[0]}</span> 
                To
                <span className='p-aside-price'>{priceSlider[1]}</span> 
            </p>
        </div>
    );
};

export default PriceFilter;