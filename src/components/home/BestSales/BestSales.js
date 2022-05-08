import React from 'react';
import './BestSales.css'
import fakeData from '../../fakeData';
import SingleSale from './SingleSale';

const BestSales = () => {
    return (
        <div className='container'>
            <div className='best-sales'>
                <h2 className='ash-color'><span className='orange-color'>Best</span> Sales</h2>
                <p>Lorem ipsum dummy text goes here.Lorem ipsum dummy text goes here</p>
                <div className='best-sale-grid'>
                {
                    fakeData?.map((v,i)=>{
                        if (i < 3) return <SingleSale product={v} key={i}/>
                        else return <span key={i}></span>
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default React.memo(BestSales);