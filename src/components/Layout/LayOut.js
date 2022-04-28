import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../home/Navbar';
import Topbar from '../home/Topbar';
import Footer from '../shared/Footer';

const LayOut = ({children,from}) => {

    return (
        <div>
            <Topbar/>
            <Navbar from={from}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default LayOut;