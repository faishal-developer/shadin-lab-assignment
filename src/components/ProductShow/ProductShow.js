import React, { useState } from 'react';
import './productShow.css'

const ProductShow = ({product}) => {
    const [moreImage,setMoreImage] = useState(0)
    const [size,setSize] = useState(1)
    const [quantity,setQuantity] =useState(1)

    const quantityhandle=(isIncrease)=>{
        if(isIncrease){
            setQuantity(quantity+1)
        }else if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    return (
        <div style={{background:'white'}}>
        <div className='container product-show'>
            <div>
                <figure className='figure'>
                    <img width='90%' src={product?.moreImage[moreImage]} alt='product'/>
                </figure>
                <div className='d-flex-al-center'>
                    {
                        product?.moreImage.map((img,i)=>(
                            <figure onClick={()=>setMoreImage(i)} key={i} className='figure p-show-flex-figure'>
                                <img width='60px' height='60px' src={img} alt='product'/>
                                <div className={moreImage === i ?'p-show-image-blend':''}></div>
                            </figure>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='p-show-h1 orange-color'>{product?.name}</h1>
                <h3 className='ash-color p-show-short-des'>{product?.shortDes}</h3>
                <p className='p-show-des'>{product?.des}</p>
                <div className='p-show-choose ash-color d-flex-al-center'>
                    <div className='d-flex-al-center'>
                        <h3 >Choose Size</h3>
                        {
                            product?.sizes?.map((v,i)=>{
                                if(i===product.sizes.length-1){
                                    return <h3 
                                                className={size===i?'orange-color':''}
                                                onClick={()=>setSize(i)}
                                            >
                                               {v}
                                            </h3>
                                }else{
                                    return <>
                                        <h3
                                            className={size === i ? 'orange-color' : ''}
                                            onClick={() => setSize(i)}
                                        >
                                            {v}
                                        </h3>
                                        <h3>-</h3>
                                    </>
                                } 
                            })
                        }
                    </div>
                    <div className='d-flex-al-center'>
                        <h3>Choose Quantity</h3>
                        <h3 onClick={()=>quantityhandle(true)}>+</h3>
                        <h3 className='orange-color'>{quantity}</h3>
                        <h3 onClick={() => quantityhandle(false)}>-</h3>
                    </div>
                </div>
                <div style={{justifyContent:'space-between',marginTop:'8vh'}} className='d-flex-al-center'>
                    <h3 style={{fontSize:'20px'}} className='ash-color'>Price:{product?.price}</h3>
                    <div className='p-show-icon'>
                        <i className="fa-solid fa-globe"></i>
                        <i className="fa-solid fa-cart-plus" ></i>
                        <i className="fa-solid fa-heart"></i>
                        <span className='p-show-order-btn'>Order Now</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProductShow;