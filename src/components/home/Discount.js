import React from 'react';
import fakeData from '../fakeData';
import useFunc from '../hooks/useFunc';

const Discount = () => {
    const { updateCart } = useFunc()

    const data = fakeData[0]
    return (
        <div style={{ background: '#F7F8F9' }}>
            <div className='container discount'>
                <div className='discount-half discount-grid'>
                    <div className='safe'>
                        <p>Safe</p>
                        <h5>50%</h5>
                    </div>
                    <div className='discount-kit'>
                        <h3>{data.name}</h3>
                        <p>{data.shortDes}</p>
                    </div>
                    <div className='orange-color discount-price'>
                        <i onClick={()=>updateCart(data)} className="fa-solid fa-cart-plus c-pointer mr-10 orange-color fs-20"></i>
                        <h3>{data.price}$</h3>
                    </div>
                </div>
                <div className='discount-half adv-area'>
                    <div>
                        <p>adv <span className='orange-color'>area</span></p>
                        <p className='letter-spacing ash-3'>470x100</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;