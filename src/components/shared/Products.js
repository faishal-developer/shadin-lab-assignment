import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../fakeData';
import SingleCard from './SingleCard';

const Products = ({data,children}) => {
    return (
        <div style={{ backgroundColor:'#F7F8F9',marginTop:'20px'}} >
            <div className='container products'>
                <h1><span className='orange-color'>{data?.head1}</span> {data?.head2}</h1>
                <p style={{ color:'#69727D',marginBottom:'2em'}}>{data?.shortDes}</p>
                <div className='products-grid'>
                    {
                        fakeData?.map((v,i)=>{
                            if (i < 4) return <SingleCard key={i} product={v} />
                            else return ''
                        })
                    }
                </div>
                <div style={{marginBottom:'3em'}}>
                    <Link style={{textDecoration:'none'}} to='/products'>{children}</Link>
                </div>
            </div>
        </div>
    );
};

export default Products;