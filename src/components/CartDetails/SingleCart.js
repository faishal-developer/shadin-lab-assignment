import React from 'react';
import useLStorage from '../hooks/useLStorage';

const SingleCart = ({product}) => {
    const {deleteItem} = useLStorage()

    return (
        <div className='flex a-i-center single-cart'>
            <figure>
                <img className='cart-img' src={product?.image} alt={product?.name}/>
            </figure>
            <div>
                <p>Product Name: {product?.name}</p>
                <p>Product Id: {product?.id}</p>
                <button onClick={()=>deleteItem(product?.id)} className='cart-btn'>delete from cart</button>
            </div>
        </div>
    );
};

export default SingleCart;