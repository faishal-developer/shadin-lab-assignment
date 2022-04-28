import React, { useState } from 'react';
import useFunc from '../hooks/useFunc';
import Categories from './Categories';
import CboxSizeLayout from './CboxSizeLayout';
import PriceFilter from './PriceFilter';

const ProductsAsideBAr = () => {
    const [showFlField, setShowFlField] = useState(false) 
    const { handleCheck } = useFunc()

    const sizes = [['Small','s'], ['Medium','m'], ['Large','l'],['X Large','xl']]
    const brands = [['Reebok', 'Reebok'], ['Addidas','Addidas'], ['Nike','Nike'], ['Active','Active']]
    return (
        <div className=''>
            <div onClick={() => setShowFlField(!showFlField)} className='asidebar-icon'>
                <i className="fa-solid fa-filter"></i>
                <span className='orange-color'>{showFlField ? 'Close Filter' : 'Filter'}</span>
            </div>
            <div className={showFlField ? 'aside-bar-cm' : 'aside-bar-d-none'}>
                <Categories />
                <PriceFilter />
                <CboxSizeLayout handleCheck={handleCheck} sizes={sizes} head='Sizes' />
                <CboxSizeLayout handleCheck={handleCheck} sizes={brands} head='Brands' />
            </div>
        </div>
    );
};

export default ProductsAsideBAr;