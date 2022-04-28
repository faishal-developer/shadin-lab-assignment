import React from 'react';
import './home2.css'

const NewsLetter = () => {
    return (
        <div className='container news-letter'>
            <h3 style={{fontSize:'20px'}} className='orange-color'>NEWS LETTER</h3>
            <p className='ash-color'>join us to get all news and special offer</p>
            <p className='ash-para'>
                <i className="orange-color fa-solid fa-envelope"></i>
                <input type='text' placeholder='type your email here'/>
            </p>
            <div className='news-letter-button'>
                Join Us
            </div>
        </div>
    );
};

export default NewsLetter;