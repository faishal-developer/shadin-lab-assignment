import React, { memo, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/hooks/Context';
import useDebounce from '../components/hooks/useDebounce';
import useRequest from '../components/hooks/useRequest';
import ProductsAll from '../components/Products/ProductsAll';
// import { timer } from '../components/hooks/useRequest';

const Products = () => {
    const { requestFunc,getUrl} = useRequest('kk')
    const { page, windowBack,setWindowBack, size, setSize, brand,quantity, setBrand,priceSlider, setPriceSlider,setPage,setQuantity} = useContext(ThemeContext)
    const navigate=useNavigate()
    const { search } = useLocation();
    let debounce = useDebounce()
    const limit = new URLSearchParams(search).get('limit');
    const pageNum = new URLSearchParams(search).get('page');
    const urlSize = new URLSearchParams(search).get('size');
    const urlBrand = new URLSearchParams(search).get('brand');
    const urlPrice = new URLSearchParams(search).get('price');
    let newWindowBack = windowBack
    window.addEventListener('popstate',()=>{
        newWindowBack = true
        setWindowBack(true)
    })

    useEffect(() => {
        if (!newWindowBack) return
        if (pageNum !== null) setPage(Number(pageNum));
        if (limit !== null) setQuantity(Number(limit))
        if (urlSize !== null && urlSize !== '') setSize(urlSize?.split(','))
        if (urlBrand !== null && urlBrand !== '') setBrand(urlBrand?.split(','))
        if (urlPrice !== null && urlPrice !== '') setPriceSlider(urlPrice?.split(',').map(v=>Number(v)))
        setWindowBack(false)
    }, [pageNum,limit,urlBrand,urlSize,urlPrice])
    useEffect(() => {
        // if (timer) clearTimeout(timer)
        // requestFunc(limit,page)
        if(newWindowBack){
            console.log(newWindowBack);
            // debounce(() => { navigate(getUrl(limit,pageNum,urlSize,urlBrand,urlPrice)) }, 100)
            // navigate(getUrl(limit, pageNum, urlSize, urlBrand, urlPrice))
            return 
        }else{
            // debounce(() => { navigate(getUrl()) }, 100)
            navigate(getUrl())
        }
        
    }, [page, size, brand, priceSlider,quantity])

    return (
        <>
            <ProductsAll/>
        </>
    );
};

export default Products;