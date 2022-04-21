import React, { useState } from 'react';
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [inputTrue,setInputTrue] = useState(false)
    const [shownavbar,setShowNavbar] = useState(false)

    const myfunction=()=>{
        setShowNavbar(!shownavbar)
    }
    const barAndCancel=()=>{
        if (shownavbar) return <i style={{fontSize:'21px'}} className="fa-solid fa-xmark"></i>
        else return <i style={{fontSize:'18px'}} className="fa-solid fa-bars"></i>
    }
    const activePageClass=(v)=>{
        if (v === props.from) return 'active ash-color'
        else return 'ash-color'
    }
    return (
        <div style={{ borderBottom: '1px solid #3333331e', backgroundColor: '#fff'}}>
            <nav className="container nav">
                <div className="navbar">
                    <figure className="figure figure-logo ">
                        <img src={logo} alt="logo" />
                    </figure>
                    <div onClick={()=>myfunction()} className="bar-icon">{barAndCancel()}</div>
                    <div className={shownavbar? 'responsive' : 'menubar'}>
                        <div className="menu-item"><Link to='/'  className={activePageClass('home')}>Home</Link></div>
                        <div className="menu-item"><Link to='/products'  className={activePageClass('products')}>Products</Link></div>
                        <div className="menu-item"><Link to='/hotdeals'  className={activePageClass()}>Hot Deals</Link></div>
                        <div className="menu-item"><Link to='/about'  className={activePageClass()}>About</Link></div>
                        <div className="menu-item"><Link to='/contact'  className={activePageClass()}>Contact</Link></div>
                    </div>
                </div>
                <div className="nav-icons">
                    <div className="icons ash-color">
                        <div className={inputTrue? 'border': ''}>
                            {inputTrue && <input className='input' type="text" name="" id=""/>}
                            <i onClick={()=>setInputTrue(!inputTrue)} className="search fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="icons ash-color">
                        <a className="ash-color" href="#"><i className="fa-solid fa-user"></i></a>
                    </div>
                    <div className="icons top-cart-num ash-color">
                        <p>5</p>
                        <a className="ash-color" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;