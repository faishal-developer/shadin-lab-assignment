import React from 'react';
import image from '../../images/logo.png'
import image2 from '../../images/Payment.png'
import './footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container footer-flex'>
            <div>
                <figure className='figure'>
                    <img width='120px' src={image} alt='logo'/>
                </figure>
                <p className='footer-p'>shopy © 2015. all right reserves</p>
            </div>
            <div>
                <ul>
                    <li><Link to='/about'>about us</Link></li>
                    <li><Link to='/contact'>contact us</Link></li>
                    <li><Link to='/support'>support</Link></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><Link to='/feed'>our feed</Link></li>
                    <li><Link to='/terms'>terms & condition</Link></li>
                    <li><Link to='/privacy'>privacy policy</Link></li>
                </ul>
            </div>
            <div> 
                <ul>
                    <li><Link to='/join'>join us</Link></li>
                    <li><Link to='/live'>live support</Link></li>
                </ul>
            </div>
            <div>
                <p className='orange-color footer-payment-p'>Payment method</p>
                <figure className='figure'>
                    <img width='80%' src={image2} alt='payment gateway' />
                </figure>
            </div>
            </div>
        </div>
    );
};

export default Footer;