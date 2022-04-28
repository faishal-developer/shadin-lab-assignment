import React from 'react';
import './home.css'

const Topbar = () => {

    return (
        <div className=" top-shadow ash-color">
            <div className="container topbar">
                <div className="top-contact-info">
                    <div className="contact-info">
                        <i className="pr-2 orange-color fa-solid fa-envelope"></i>
                        <small>info@shopy.com</small>
                    </div>
                    <div className="contact-info">
                        <i className="pr-2 orange-color fa-solid fa-mobile-retro"></i>
                        <small>453-5553-996</small>
                    </div>
                </div>
                <div>
                    <a className="social-link ash-color" href="http://facebook.com/"><i
                        className="fa-brands fa-facebook-f"></i></a>
                    <a className="social-link ash-color" href="http://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a className="social-link ash-color" href="http://google.com/"><i
                        className="fa-brands fa-google-plus-g"></i></a>
                    <a className="social-link ash-color" href="http://instagram.com/"><i
                        className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;