import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import Pagination from '../shared/Pagination';
import SingleCard from '../shared/SingleCard';

const FilteredProduct = () => {
    const {data,size,brand,setPage,page,priceSlider} = useContext(ThemeContext)
    const {sizeFilter} = useFilter()
    const { search } = useLocation();
    const quantity = new URLSearchParams(search).get('quantity') ||3 ;
    const [filterdData,setFilteredData] = useState([])

    useEffect(() => {
        sizeFilter()
        setPage(1)
    }, [size, brand,priceSlider])
        
    useEffect(()=>{
         let newData = data.slice(((page - 1) * quantity), (page * quantity))
         setFilteredData(newData)
    },[quantity,data,page])
    if (filterdData.length < 1) {
        return <h1>No Product found</h1>
    }
    return (
        <div className='find-product'>
        <div className='filtered-product'>
            {
                filterdData?.map((v,i)=><SingleCard product={v} key={i}/>)
            }
        </div>
            <Pagination/>
        </div>
    );
};

export default FilteredProduct;