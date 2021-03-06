import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData';
import useLStorage from './useLStorage';

export const ThemeContext = React.createContext();
const Context = ({ children }) => {
    const [windowBack,setWindowBack] = useState(true)
    const [user, setUser] = useState({})
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [size, setSize] = useState([])
    const [brand, setBrand] = useState([])
    const [priceSlider, setPriceSlider] = useState([100, 250])
    const [page, setPage] = useState(1)
    const [lUser, setLUser] = useState({})
    const [newProduct, setNewProduct] = useState({})
    const [dataLoading, setDataLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [quantity, setQuantity] = useState(2)
    const [error, setError] = useState({})
    const [pagiBtnValue, setPagiBtnValue] = useState({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, t: 2, dot1: false,dot2:false })
    const { getItem } = useLStorage()

    useEffect(() => {
        let prev = getItem('cart')
        if (prev === undefined) return
        let newCart = []
        fakeData.forEach((v, i) => {
            if (prev?.includes(v.id)) {
                newCart.push(v)
            }
        })
        setCart(newCart);
    }, [])

    // useEffect(() => {
    //     setPage(1)
    //     // setSize([])
    //     // setBrand([])
    //     // setPriceSlider([100,250])
    // }, [priceSlider, size, brand])
    return (
        <ThemeContext.Provider
            value={{
                windowBack,
                setWindowBack,
                error,
                setError,
                newProduct,
                setNewProduct,
                quantity,
                setQuantity,
                dataLoading,
                setDataLoading,
                isLoading,
                setIsLoading,
                lUser,
                setLUser,
                user,
                setUser,
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