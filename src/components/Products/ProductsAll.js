import React from 'react';
import ProductsAsideBAr from './ProductsAsideBAr';
import './Products.css'
import FilteredProduct from './FilteredProduct';
import { useLocation } from 'react-router-dom';

const ProductsAll = () => {
    
    return (
        <div className='container mt-10vh'>
            <div className='p-aside-grid'>
                <ProductsAsideBAr/>
                <FilteredProduct/>
            </div>
        </div>
    );
};

export default ProductsAll;