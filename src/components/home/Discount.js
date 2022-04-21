import React from 'react';
import image from '../../images/textBackground.png'

const Discount = () => {
    return (
        <div style={{ background: '#F7F8F9' }}>
            <div className='container discount'>
                <div className='discount-half discount-grid'>
                    <div className='safe'>
                        <p>Safe</p>
                        <h5>50%</h5>
                    </div>
                    <div className='discount-kit'>
                        <h3>FULL WINTER KIT</h3>
                        <p>Half Jacket + Skinny Trousers + Boot Leathers</p>
                    </div>
                    <div className='orange-color discount-price'>
                        <i className="fa-solid fa-cart-plus" style={{fontSize:'20px', color: '#FF7013',marginRight:'10px' }}></i>
                        <h3>120$</h3>
                    </div>
                </div>
                <div className='discount-half adv-area'>
                    <div>
                        <p>adv <span className='orange-color'>area</span></p>
                        <p className='letter-spacing'>470x100</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;