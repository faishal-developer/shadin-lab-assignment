import React, { useEffect, useState } from 'react';
import '../home.css'
import fakedata from '../../fakeData'
import BannerCarousel from './BannerCarousel';
import CButtons from './CButtons';
import UserSliderChanger from '../../hooks/UserSliderChanger';

let data = fakedata.slice(0, 3)
const Banner = () => {
    const [dataNum,setDataNum] = useState(0)
    const {handleClick} = UserSliderChanger()

    
    useEffect(()=>{
        handleClick(setDataNum,dataNum,2) 
    },[dataNum])
    return (
        <div className='Banner'>
            <div className='container banner-d-flex'>
                <div className='mr-2 mt-10'>
                    <CButtons num={dataNum} />
                </div>
                <div className='ash-color b-carousel'>
                    <BannerCarousel data={data[dataNum]}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;