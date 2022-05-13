import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFunc from '../hooks/useFunc';

const SingleCard = ({ product, pause}) => {
    let navigate = useNavigate();
    const { updateCart,isCarted } = useFunc()
      
    const goToSingleProduct=(id)=>{
        navigate(`/singleProduct/${product?.id}`)
    } 
    const cartHandler=useCallback((e)=>{ 
        e.stopPropagation()
        updateCart(product)
    },[product,updateCart])

    const src =!product?.isBase64? product?.image : `data:image/png;base64,${product.image}`;
    
    return (
        <div onClick={goToSingleProduct} className="single-card">
            <figure>
                <img 
                    className='card-image max-wd max-ht-100' 
                    src={src} 
                    alt="product"
                />
            </figure>
            <p className='ash-color2'>{product?.name}</p>
            <p className='price'>{product?.price}$</p>
            <p className='card-p-none pb-10'>sizes: {product?.sizes?.join('-')}</p>
            <div className='card-p-none'>
            <div className='color-flex'>
                {
                    product?.color?.map((v, i) => (
                        <div key={i} style={{ background: v }} className='circle'></div>
                    ))
                }
            </div>
            </div>
            <div className='product-icon card-p-none'>
                <i className="fa-solid fa-globe"></i>
                <button className='bg-tparent' disabled={isCarted(product)[1]} onClick={(e) => cartHandler(e)} >
                    <i className={isCarted(product)[0]}></i>
                </button>
                <i className="fa-solid fa-heart"></i>
            </div>
        </div>
    );
};

export default React.memo(SingleCard);