import React from 'react';
import { RangeSlider } from 'rsuite'
import "rsuite/dist/rsuite.min.css";

const PriceSlider = ({setValue}) => {
    
    return (
        <div className='price-slider'>
            <RangeSlider
                max={50}
                defaultValue={[10, 40]}
                style={{ color:'#42535F'}}
                constraint={([start, end]) => start <= 25 && end >= 35}
                onChange={(v)=>setValue(v)}
            />
        </div>
    );
};

export default PriceSlider;