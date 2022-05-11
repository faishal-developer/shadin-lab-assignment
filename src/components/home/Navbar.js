import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png'
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from '../hooks/Context';
import useFirebase from '../hooks/useFirebase';


const Navbar = (props) => {
    const [inputTrue,setInputTrue] = useState(false)
    const [shownavbar,setShowNavbar] = useState(false)
    const { logOut} = useFirebase()
    const { cart, user, isLoading } = useContext(ThemeContext)
    const {pathname} = useLocation()


    const myfunction=()=>{
        setShowNavbar(!shownavbar)
    }
    const userOrNot=()=>{
        if(user.email){
            return <>
                <span className='orange-color'>{user.displayName}</span>
                <button onClick={logOut}>Log Out</button>
            </>
        }else{
            return <Link className="ash-color" to='/login'>
                <i className="fa-solid fa-user"></i>
                </Link>
        }
    }
    const barAndCancel=()=>{
        if (shownavbar) return <i style={{fontSize:'21px'}} className="fa-solid fa-xmark"></i>
        else return <i style={{fontSize:'18px'}} className="fa-solid fa-bars"></i>
    }
    const activePageClass=(v)=>{
        if (v=== pathname) return 'active ash-color'
        else return 'ash-color'
    }
    return (
        <div className='b-bottom bg-white'>
            <nav className="container nav">
                <div className="navbar">
                    <figure className="figure figure-logo ">
                        <img src={logo} alt="logo" />
                    </figure>
                    <div onClick={()=>myfunction()} className="bar-icon">{barAndCancel()}</div>
                    <div className={shownavbar? 'responsive' : 'menubar'}>
                        <div className="menu-item"><Link to='/'  className={activePageClass('/')}>Home</Link></div>
                        <div className="menu-item"><Link to='/products'  className={activePageClass('/products')}>Products</Link></div>
                        <div className="menu-item"><Link to='/hotdeals'  className={activePageClass('/hotdeals')}>Hot Deals</Link></div>
                        <div className="menu-item"><Link to='/about'  className={activePageClass('/about')}>About</Link></div>
                        <div className="menu-item"><Link to='/contact'  className={activePageClass('/contact')}>Contact</Link></div>
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
                        {
                          isLoading? 'loading...' :  userOrNot()
                        }
                    </div>
                    <div className="icons top-cart-num ash-color">
                        <p>{cart?.length}</p>
                        <Link className="ash-color" to='/cartDetails'><i className="fa-solid fa-cart-shopping"></i></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default React.memo(Navbar);