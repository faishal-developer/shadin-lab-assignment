import React from 'react';
import useFunc from '../../hooks/useFunc';

const SingleSale = ({ product }) => {
    const { updateCart, isCarted } = useFunc()

    return (
        <div className='single-sale'>
            <figure className='figure'>
                <img width='100%' src={product?.image} alt="product" />
            </figure>
            <div className='single-sale-info'>
                <h3 className='ash-color t-overflow'>{product?.name}</h3>
                <div className='orange-color d-flex-center sales-d-show'>
                    <div className='single-sale-star'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="ash-star fa-solid fa-star"></i>
                    </div>
                    <p>price: {product?.price}$</p>
                </div>
                <div onClick={()=>updateCart(product)} className='orange-color sales-d-none c-pointer'>
                    <button disabled={isCarted(product)[1]} className='bg-tparent d-flex-center'>
                        <i className={isCarted(product)[0]}></i>
                        {
                            isCarted(product)[1] ? <p className='ash-color'>added in cart</p> : <p>add to cart</p>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleSale;