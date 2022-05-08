import React from 'react';
import Banner from '../components/home/Banner/Banner'
import '../components/home/home.css'
import '../components/home/home2.css'
import Products from '../components/shared/Products'
import Discount from '../components/home/Discount'
import NewsLetter from '../components/home/NewsLetter'
import BestSales from '../components/home/BestSales/BestSales'

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