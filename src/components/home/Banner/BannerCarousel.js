import React from 'react';
import useFunc from '../../hooks/useFunc';
import './Banner.css'

const BannerCarousel = ({ data }) => {
    const { updateCart, isCarted } = useFunc()

    return (
        <>
            <h1 className='orange-color '>{data?.name}</h1>
            <p className='big-banner-p'>{data?.shortDes}</p>
            <p className='b-c-para ash-2'>{data?.des}</p>
            <div className='banner-flex' style={{ marginTop: '3em' }} >
                <p className='big-banner-p mr-30'>Price : {data?.price}$</p>
                <button disabled={isCarted(data)[1]} onClick={() => updateCart(data)} className='orange-color bg-tparent big-banner-p mr-30 c-pointer'>
                    <i className={isCarted(data)[0]}></i>
                    {
                        isCarted(data)[1] ? <span className='ash-color'>Ordered</span> : <span>Order Now</span>
                    }
                </button>
            </div>
        </>
    );
};

export default React.memo(BannerCarousel);