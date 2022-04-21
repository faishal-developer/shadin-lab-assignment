import React from 'react';
import Navbar from '../components/home/Navbar';
import Topbar from '../components/home/Topbar';
import ProductsAll from '../components/Products/ProductsAll';
import Footer from '../components/shared/Footer';

const Products = () => {
    return (
        <div>
            <Topbar/>
            <Navbar from='products'/>
            <ProductsAll/>
            <Footer/>
        </div>
    );
};

export default Products;