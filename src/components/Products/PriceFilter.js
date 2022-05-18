import React, { useCallback, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useDebounce from '../hooks/useDebounce';
import useRequest from '../hooks/useRequest';
import PriceSlider from './PriceSlider';
import './Products.css'

const PriceFilter = () => {
    const {priceSlider,page,setPriceSlider,size,brand} = useContext(ThemeContext)
    // const {requestFunc,getUrl} = useRequest()
    // const { search } = useLocation();
    // const {debounce} = useDebounce()
    // const navigate = useNavigate()
    // const limit = new URLSearchParams(search).get('limit');

    // const request = useCallback((()=>{
    //     let timerId;
    //     return (slider) => {
    //         if (timerId) {
    //             clearTimeout(timerId)
    //         }
    //         timerId = setTimeout(() => { 
    //             requestFunc(limit,page,size,brand,slider)
    //             // navigate(getUrl(limit, page, size, brand, slider))
    //          }, 1000)
    //     }})(),[]);
    // useEffect(()=>{
    //     if(priceSlider[0] === 100 && priceSlider[1]===250)return
    //     request(priceSlider)
    // },[priceSlider,request])
    return (
        <div className='p-aside-common-bg '>
            <h3 className='orange-color p-aside-common-h3'>Price Filter</h3>
            <PriceSlider setValue={setPriceSlider}/>
            <p className='p-aside-pFilter-p ash-color'>
                From 
                <span className='p-aside-price'>{priceSlider[0]}</span> 
                To
                <span className='p-aside-price'>{priceSlider[1]}</span> 
            </p>
        </div>
    );
};

export default PriceFilter;