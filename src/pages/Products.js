import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/hooks/Context';
import useRequest from '../components/hooks/useRequest';
import ProductsAll from '../components/Products/ProductsAll';

const Products = () => {
    const { requestFunc,getUrl} = useRequest('kk')
    const {page,size,brand,priceSlider,setPage,setQuantity} = useContext(ThemeContext)
    const navigate=useNavigate()
    const { search } = useLocation();
    const limit = new URLSearchParams(search).get('limit');
    const pageNum = new URLSearchParams(search).get('page');


    useEffect(() => {
        requestFunc(limit,page)
        navigate(getUrl(limit,page))
    }, [page,size, brand])
    useEffect(() => {
        if (pageNum === null || limit === null) return
        setPage(Number(pageNum));
        setQuantity(Number(limit))
    }, [pageNum, limit])

    return (
        <>
            <ProductsAll/>
        </>
    );
};

export default Products;