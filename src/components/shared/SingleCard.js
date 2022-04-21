import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCard = ({product}) => {
    let navigate = useNavigate();
    

    const goToSingleProduct=(id)=>{
        navigate(`/singleProduct/${product?.id}`)
    }
    return (
        <div onClick={goToSingleProduct} className="single-card">
            <figure>
                <img 
                    className='card-image' 
                    width='100%'
                    src={product?.image} 
                    alt="product"
                />
            </figure>
            <p className='ash-color2'>{product?.name}</p>
            <p className='price'>{product?.price}</p>
            <p className='card-p-none' style={{padding:'0px 0 10px'}}>sizes: {product?.sizes?.join('-')}</p>
            <div className='card-p-none'>
            <div className='color-flex'>
                {
                    product?.color.map((v, i) => (
                        <div key={i} style={{ background: v }} className='circle'></div>
                    ))
                }
            </div>
            </div>
            <div className='product-icon card-p-none'>
                <i className="fa-solid fa-globe"></i>
                <i className="fa-solid fa-cart-plus" style={{color:'#FF7013'}}></i>
                <i className="fa-solid fa-heart"></i>
            </div>
        </div>
    );
};

export default SingleCard;