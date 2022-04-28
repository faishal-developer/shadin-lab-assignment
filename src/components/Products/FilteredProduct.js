import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import Pagination from '../shared/Pagination';
import SingleCard from '../shared/SingleCard';

const FilteredProduct = () => {
    const {data,size,brand,setPage,page,priceSlider} = useContext(ThemeContext)
    const {sizeFilter} = useFilter()

    useEffect(() => {
        sizeFilter()
        setPage(1)
    }, [size, brand,priceSlider])
        
    const newData = data.slice(((page - 1) * 3), (page * 3))
    if (newData.length < 1) {
        return <h1>No Product found</h1>
    }
    return (
        <div className='find-product'>
        <div className='filtered-product'>
            {
                newData?.map((v,i)=><SingleCard product={v} key={i}/>)
            }
        </div>
            <Pagination/>
        </div>
    );
};

export default FilteredProduct;