import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../components/fakeData';
import NewsLetter from '../components/home/NewsLetter';
import ProductShow from '../components/ProductShow/ProductShow';
import Products from '../components/shared/Products'
import LayOut from '../components/Layout/LayOut';
import { ThemeContext } from '../components/hooks/Context';

const SingleProduct = () => {
    let {id} = useParams()
    let {data:products} =useContext(ThemeContext)

    const product = products?.data?.find((v, i) => v?.id == id) || fakeData.find((v, i) => v?.id == id)
    const data={
        head1:'RELATED',
        head2:'PRODUCTS',
        shortDes:'lorem ipsum dummy text goes here.lorem ipsum dummy text goes here.'
    }
    return (
        <>
            <ProductShow product={product}/>
            <Products data={data}/>
            <NewsLetter/>
        </>
    );
};

export default SingleProduct;