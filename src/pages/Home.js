import React from 'react';
import Banner from '../components/home/Banner/Banner'
import Products from '../components/shared/Products'
import Discount from '../components/home/Discount'
import NewsLetter from '../components/home/NewsLetter'
import BestSales from '../components/home/BestSales/BestSales'
import LayOut from '../components/Layout/LayOut';

const Home = () => {
    const data = {
        head1: 'NEW',
        head2: 'ARRIVAL',
        shortDes: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes here.'
    }
    return (
        <>
            <Banner />
            <Products sdata={data}>
                <div className='dot-dot'>
                    ...
                </div>
            </Products>
            <Discount />
            <BestSales />
            <NewsLetter />
        </>
    );
};

export default Home;