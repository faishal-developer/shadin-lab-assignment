import React, { useContext } from 'react';
import { RangeSlider } from 'rsuite'
import "rsuite/dist/rsuite.min.css";
import { ThemeContext } from '../hooks/Context';

const PriceSlider = ({setValue}) => {
    let {priceSlider} = useContext(ThemeContext)
    
    return (
        <div className='price-slider'>
            <RangeSlider
                max={250}
                min={100} 
                defaultValue={[100, 250]}
                style={{ color:'#42535F'}}
                value={priceSlider}
                constraint={([start, end]) => start <= 250 && end >= 100}
                onChange={(v)=>setValue(v)}
            />
        </div>
    );
};

export default PriceSlider;