import React from 'react';

const SingleSale = ({ product }) => {
    return (
        <div className='single-sale'>
            <figure className='figure'>
                <img width='100%' src={product?.image} alt="product" />
            </figure>
            <div className='single-sale-info'>
                <h3 className='ash-color'>{product?.name}</h3>
                <div className='orange-color d-flex-center sales-d-show'>
                    <div className='single-sale-star'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="ash-star fa-solid fa-star"></i>
                    </div>
                    <p>price: {product?.price}</p>
                </div>
                <div className='orange-color d-flex-center sales-d-none'>
                    <i className="fa-solid fa-cart-plus"></i>
                    <p>add to cart</p>
                </div>
            </div>
        </div>
    );
};

export default SingleSale;