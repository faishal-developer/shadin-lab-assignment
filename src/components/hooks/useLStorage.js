import { useContext } from "react";
import { ThemeContext } from "./Context";

const useLStorage = () => {
    const context =useContext(ThemeContext)

    const getItem=(cart)=>{
       return JSON.parse(localStorage.getItem(cart)) || []
    }

    const setItem = (obj,cart)=>{
        localStorage.setItem(cart, JSON.stringify(obj))
    }

    const addNewItem=(id)=>{
        let prev= getItem('cart')
        if (!prev.includes(id)){
            prev.push(id)
        }
        setItem(prev,'cart')
    }

    const deleteItem=(id)=>{
        const prev= getItem('cart')
        let newLCart= prev.filter(v=>v!==id)
        let newCart = context?.cart?.filter((v)=>v.id !== id)
        context?.setCart(newCart)
        setItem(newLCart,'cart')
    }

    return{
        addNewItem,
        deleteItem,
        getItem
    }
};

export default useLStorage;