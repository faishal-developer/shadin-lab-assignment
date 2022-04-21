import React, { useState } from 'react';
import Categories from './Categories';
import CboxSizeLayout from './CboxSizeLayout';
import PriceFilter from './PriceFilter';

const ProductsAsideBAr = () => {
    const [showFlField,setShowFlField] = useState(false)

    const sizes = ['Small', 'Medium', 'Large', 'X Large']
    const brands = ['Reebok', 'Addidas', 'Nike', 'Active']
    return (
        <div className=''>
            <div onClick={()=>setShowFlField(!showFlField)} className='asidebar-icon'>
                <i class="fa-solid fa-filter"></i>
                <span className='orange-color'>{showFlField?'Close Filter':'Filter'}</span>
            </div>
            <div className={showFlField?'aside-bar-cm':'aside-bar-d-none'}>
            <Categories/>
            <PriceFilter/>
            <CboxSizeLayout sizes={sizes} head='Sizes'/>
            <CboxSizeLayout sizes={brands} head='Brands'/>
            </div>
        </div>
    );
};

export default ProductsAsideBAr;