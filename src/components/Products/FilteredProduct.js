import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import Pagination from '../shared/Pagination';
import SingleCard from '../shared/SingleCard';

const FilteredProduct = () => {
    const {data,size,dataLoading,brand,setPage,priceSlider} = useContext(ThemeContext)
    const {sizeFilter} = useFilter()

    // useEffect(() => {
    //     sizeFilter()
    //     setPage(1)
    // }, [size, brand,priceSlider])
        
    // console.log(data);
    if ((!data?.data || data?.data?.length < 1) && dataLoading===false) {
        return <h1>No Product found</h1>
    }
    return (
        <div className='find-product'>
        <div className='filtered-product'>
            {
                    dataLoading ? <h1>loading...</h1> :(
                    data?.data?.map((v, i) => <SingleCard product={v} key={i} />)
                )
            }
        </div>
            <Pagination/>
        </div>
    );
};

export default FilteredProduct;