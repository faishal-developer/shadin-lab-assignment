import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../fakeData';
import UserSliderChanger from '../hooks/UserSliderChanger';
import SingleCard from './SingleCard';

const Products = ({sdata,children}) => {
    const [dataNum, setDataNum] = useState(0)
    const [pasued,setPasued] = useState(false)
    const { handleClick } = UserSliderChanger()

    useEffect(() => {
         if(!pasued){
             handleClick(setDataNum, dataNum, 2)
         }
    },[dataNum])

    return (
        <div className='bg-light mt-20' >
            <div className='container products'>
                <h1><span className='orange-color'>{sdata?.head1}</span> {sdata?.head2}</h1>
                <p className='ash-2 mb-32'>{sdata?.shortDes}</p>
                <div className='products-grid fade'>
                    {
                        fakeData?.slice(dataNum*4,(dataNum+1)*4)?.map((v,i)=><SingleCard pause={setPasued} key={i} product={v} />)
                    }
                </div>
                <div style={{marginBottom:'3em'}}>
                    <Link to='/products'>{children}</Link>
                </div>
            </div>
        </div>
    );
};

export default Products;