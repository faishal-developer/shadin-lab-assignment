import React from 'react';
import CarouselButton from './CarouselButton';

const CButtons = ({num}) => {
    return (
        <div>
            <CarouselButton cName={num===0?'c-b-active' : 'c-button'}/>
            <CarouselButton cName={num===1?'c-b-active' : 'c-button'}/>
            <CarouselButton cName={num===2?'c-b-active' : 'c-button'}/>
        </div>
    );
};

export default CButtons;