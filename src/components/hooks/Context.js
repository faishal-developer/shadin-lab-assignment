import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData';

export const ThemeContext = React.createContext();
const Context = ({children}) => {
    const [data,setData] = useState([])
    const [cart,setCart] = useState([])
    const [size, setSize] = useState([])
    const [brand, setBrand] = useState([])
    const [priceSlider, setPriceSlider] = useState([10,40]) 
    const [page,setPage] = useState(1)
    const [pagiBtnValue, setPagiBtnValue] = useState({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6,t:2,dot:false})
    // 
    useEffect(() => {
        setData(fakeData)  
    }, []) 
    //  kklll
    return (
        <ThemeContext.Provider 
            value={{
                 pagiBtnValue,
                 setPagiBtnValue,
                 page,
                 setPage,
                 data, 
                 setData,
                 cart,
                 setCart,
                 size,
                 setSize,
                 brand,
                 setBrand,
                 priceSlider,
                 setPriceSlider
                }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default Context;