import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../components/fakeData';
import Navbar from '../components/home/Navbar';
import Topbar from '../components/home/Topbar';
import NewsLetter from '../components/home/NewsLetter';
import ProductShow from '../components/ProductShow/ProductShow';
import Footer from '../components/shared/Footer';
import Products from '../components/shared/Products'

const SingleProduct = () => {
    let {id} = useParams()

    const product = fakeData.find((v, i) => v?.id == id)
    const data={
        head1:'RELATED',
        head2:'PRODUCTS',
        shortDes:'lorem ipsum dummy text goes here.lorem ipsum dummy text goes here.'
    }
    return (
        <>
            <Topbar/>
            <Navbar/>
            <ProductShow product={product}/>
            <Products data={data}/>
            <NewsLetter/>
            <Footer/>
        </>
    );
};

export default SingleProduct;