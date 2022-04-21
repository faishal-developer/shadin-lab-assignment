import React from 'react';
import Navbar from '../components/home/Navbar'
import Banner from '../components/home/Banner'
import Products from '../components/shared/Products'
import Footer from '../components/shared/Footer'
import Discount from '../components/home/Discount'
import NewsLetter from '../components/home/NewsLetter'
import BestSales from '../components/home/BestSales/BestSales'
import Topbar from '../components/home/Topbar'

const Home = () => {
    const data = {
        head1: 'NEW',
        head2: 'ARRIVAL',
        shortDes: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes here.'
    }
    return (
        <>
            <Topbar/>
            <Navbar from='home'/>
            <Banner/>
            <Products data={data}>
                <div className='dot-dot'>
                    ...
                </div>
            </Products>
            <Discount/>
            <BestSales/>
            <NewsLetter/>
            <Footer/>
        </>
    );
};

export default Home;