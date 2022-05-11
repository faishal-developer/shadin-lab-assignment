import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../components/hooks/Context';
import useRequest from '../components/hooks/useRequest';
import LayOut from '../components/Layout/LayOut';
import ProductsAll from '../components/Products/ProductsAll';

const Products = () => {
    const { requestFunc} = useRequest('kk')
    const {page,setPage,size,brand,priceSlider} = useContext(ThemeContext)
    const { search } = useLocation();
    const pageNum = new URLSearchParams(search).get('page');


    useEffect(() => {
        requestFunc()
        console.log(page,size,brand,priceSlider);
    }, [page,size, brand, priceSlider])

    return (
        <>
            <ProductsAll/>
        </>
    );
};

export default Products;