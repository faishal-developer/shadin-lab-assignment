import React from 'react';
import './home.css'
import image from '../../images/bannerController.png'

const Banner = () => {
    return (
        <div className='Banner'>
            <div className='container banner-d-flex'>
                <figure className='figure mr-2'>
                    <img src={image} alt='banner' />
                </figure>
                <div className='ash-color'>
                    <h1 className='orange-color'>FULL WINTER KIT</h1>
                    <p className='big-banner-p'>Half jacket + Skinny Trousers + Boot Leather </p>
                    <p style={{ color: '#69727D' }}>The tough-skinned larva of a large crane fly. It lives in the soil.</p>
                    <div className='banner-flex' style={{ marginTop: '3em' }} >
                        <p style={{ marginRight: '30px' }} className='big-banner-p'>Price : 120$</p>
                        <p style={{marginTop:'0px'}} className='orange-color big-banner-p'>
                            <i style={{marginRight:'10px'}} className="fa-solid fa-cart-shopping"></i>
                            Order Now
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;