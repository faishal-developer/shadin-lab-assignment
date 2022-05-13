import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components/hooks/Context';
import useRequest from '../components/hooks/useRequest';
import LayOut from '../components/Layout/LayOut';
import ProductsAll from '../components/Products/ProductsAll';

const Products = () => {
    const { requestFunc,getUrl} = useRequest('kk')
    const {page,size,brand,priceSlider} = useContext(ThemeContext)
    const navigate=useNavigate()
    const { search } = useLocation();
    const pageNum = new URLSearchParams(search).get('page');


    useEffect(() => {
        console.log('from products page');
        requestFunc()
        navigate(getUrl())
    }, [page,size, brand, priceSlider])

    return (
        <>
            <ProductsAll/>
        </>
    );
};

export default Products;