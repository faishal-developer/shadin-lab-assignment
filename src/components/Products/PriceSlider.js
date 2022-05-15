import React from 'react';
import { RangeSlider } from 'rsuite'
import "rsuite/dist/rsuite.min.css";

const PriceSlider = ({setValue}) => {
    
    return (
        <div className='price-slider'>
            <RangeSlider
                max={250}
                min={100} 
                defaultValue={[100, 250]}
                style={{ color:'#42535F'}}
                constraint={([start, end]) => start <= 167 && end >= 177}
                onChange={(v)=>setValue(v)}
            />
        </div>
    );
};

export default PriceSlider;