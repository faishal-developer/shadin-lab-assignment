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

    // useEffect(() => {
    //     sizeFilter()
    //     setPage(1)
    // }, [size, brand,priceSlider])                               
        useEffect(()=>{
            console.log('from filtered product');
            setPriceSlider([100,250])
        //    setPage(1)
            setBrand([])
            setSize([])
            requestFunc(limit, page, [], [], [100, 250])
            navigate(getUrl(limit, page, [], [], [100, 250]))
        },[location.pathname])
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