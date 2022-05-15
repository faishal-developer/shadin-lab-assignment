import { useContext } from "react";
import { ThemeContext } from "./Context";
import useLStorage from "./useLStorage";

const useFunc = () => {
    const { cart, setCart,setSize,setBrand,size,brand} = useContext(ThemeContext) 
    const { addNewItem,deleteItem} =useLStorage()
    const findP = (product,products) =>{
        return products.find((v, i) => v.id === product.id)
    }

    

    const updateCart=(product)=>{   
        const isExist = findP(product,cart)
        if(isExist){
            alert('This product already added in cart')
        }else{
            setCart([...cart,product])
            addNewItem(product.id)
        }
    }

    const updateQuantity=(product,value)=>{
        const isExist = findP(product,cart)
        if(isExist){
            const newCart = [...cart]
            const newProduct= findP(product,cart)
            newProduct.quantity = value;
            setCart(newCart)
        }else{
            updateCart(product)
        }
    }

    const handleCheck = (isSize,e)=>{
        let func = isSize === true ? [setSize,size] : [setBrand,brand]
        console.log(func);
        if (e.target.checked) {
            let newSize = [...func[1], e.target.value]
            func[0](newSize)
        } else {
            let newSize = func[1].filter(v => v !== e.target.value)
            func[0](newSize)
        }
    }

    let isCarted = (product) => {
        let pro = cart.find((v) => v.id === product.id)
        let className = pro ? 'fa-solid fa-cart-plus cart-i-disable' : 'fa-solid fa-cart-plus orange-color'
        let disabled = pro ? true : false
        return [className, disabled]
    }

    
    return {
        updateCart,
        updateQuantity, 
        handleCheck,
        findP,
        isCarted
    }
};

export default useFunc;