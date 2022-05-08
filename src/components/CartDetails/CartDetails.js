import React, { useContext } from 'react';
import './CartDetails.css'
import { ThemeContext } from '../hooks/Context';
import SingleCart from './SingleCart';

const CartDetail = () => {
    const { cart } = useContext(ThemeContext) 

    if(cart.length<1){
        return <h1>There is no product in cart</h1>
    }

    return (
        <div>
            <h1>Products added in cart</h1>
            <div className='cart-details '>
                {
                    cart?.map((v,i)=><SingleCart product={v} key={i}/>)
                }
            </div>
        </div>
    );
};

export default CartDetail;