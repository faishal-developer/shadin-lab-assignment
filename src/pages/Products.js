import React, { memo, useContext, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../components/hooks/Context';
import useDebounce from '../components/hooks/useDebounce';
import useRequest from '../components/hooks/useRequest';
import ProductsAll from '../components/Products/ProductsAll';
// import { timer } from '../components/hooks/useRequest';

const Products = () => {
    const { requestFunc,getUrl} = useRequest('kk')
    const { page, windowBack,setWindowBack, size, setSize, brand,quantity, setBrand,priceSlider, setPriceSlider,setPage,setQuantity} = useContext(ThemeContext)
    let [searchParams, setSearchParams] = useSearchParams({});
    const navigate=useNavigate()
    const { search } = useLocation();
    let debounce = useDebounce()
    const limit = new URLSearchParams(search).get('limit');
    const pageNum = new URLSearchParams(search).get('page');
    const urlSize = new URLSearchParams(search).get('size');
    const urlBrand = new URLSearchParams(search).get('brand');
    const urlPrice = new URLSearchParams(search).get('price');
    
    let commonFunc=()=>{
        if (pageNum !== null) setPage(Number(pageNum));
        if (limit !== null) setQuantity(Number(limit))
        if (urlSize !== null && urlSize !== '') setSize(urlSize?.split(','))
        if (urlBrand !== null && urlBrand !== '') setBrand(urlBrand?.split(','))
        if (urlPrice !== null && urlPrice !== '') setPriceSlider(urlPrice?.split(',').map(v => Number(v)))
    }
    // if (performance.navigation.type == 2) {
    //     console.log('preeeeeeeeeeeee');
    // }

    useEffect(() => {
        console.log(page,pageNum,searchParams.get('page'));
        commonFunc()
    }, [])
    useEffect(() => {
        navigate(getUrl())
    }, [page, size, brand, priceSlider,quantity])

    return (
        <>
            <ProductsAll/>
        </>
    );
};

export default memo(Products);