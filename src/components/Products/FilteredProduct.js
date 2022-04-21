import React from 'react';
import fakeData from '../fakeData'
import SingleCard from '../shared/SingleCard';

const FilteredProduct = () => {
    return (
        <div className='find-product'>
        <div className='filtered-product'>
            {
                fakeData?.map((v,i)=><SingleCard product={v} key={i}/>)
            }
        </div>
            <div className='dot-dot'>
                ...
            </div>
        </div>
    );
};

export default FilteredProduct;