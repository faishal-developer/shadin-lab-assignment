import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useRequest from '../hooks/useRequest';
import Pagination from '../shared/Pagination';
import SingleCard from '../shared/SingleCard';

const FilteredProduct = () => {
    const { data, dataLoading,size,page, setPage,brand,priceSlider, setPriceSlider,setSize,setBrand} = useContext(ThemeContext)
    const location = useLocation()
    const navigate = useNavigate()
    const { search } = useLocation();
    const {requestFunc,getUrl} = useRequest()
    const limit = new URLSearchParams(search).get('limit');
    const pageNum = new URLSearchParams(search).get('page');
    const urlSize = new URLSearchParams(search).get('size');
    const urlBrand = new URLSearchParams(search).get('brand');
    const urlPrice = new URLSearchParams(search).get('price');

    // useEffect(() => {
    //     sizeFilter()
    //     setPage(1)
    // }, [size, brand,priceSlider])                               
        useEffect(()=>{
            requestFunc(limit, pageNum, urlSize, urlBrand, urlPrice)
            // navigate(getUrl(limit, page, [], [], [100, 250]))
        },[location.pathname,limit,pageNum,urlSize,urlBrand,urlPrice])
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