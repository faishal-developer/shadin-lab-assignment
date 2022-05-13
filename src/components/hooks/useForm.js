import { useContext } from "react";
import useFirebase from "../hooks/useFirebase"
import { ThemeContext } from "./Context";
import useRequest from "./useRequest";

const useForm = () => {
    const { registerWithPass, logInWithPass} = useFirebase()
    const {newProduct,setError} = useContext(ThemeContext)
    const {requestAdd} = useRequest()

    const handleBlur=(e,data,setData,file)=>{
        let newUser = { ...data }
       if(file){
           console.log(e.target.files[0]);
            newUser[e.target.name] = e.target.files[0]
           setData(newUser)
           return 
       }
        newUser[e.target.name] = e.target.value
        setData(newUser)
    }

    const validateForm =(product,setErr)=>{
        const err = {}
        if(product?.name.length <=9 || product?.name?.length>= 150){
            err.name ="name should be 10 charecters to 150 charecters"
        }else{
            err.name = null
        }
        if(!product?.image){
            err.image ='please insert an image'
        }else{
            err.image = null
        } 
        if (product?.des.length <= 20 || product?.des?.length >= 500) {
            err.des = "description should be 20 charecters to 500 charecters"
        }else{
            err.des= null
        }
        if (product?.shortDes.length <= 15 || product?.shortDes?.length >= 100) {
            err.shortDes = "short Description should be 20 charecters to 100 charecters"
        }else{
            err.shortDes = null
        }
        if (product?.price?.length >= 4) {
            err.price = "price should be maximum 9999"
        }else{
            err.price = null
        };
        setErr(err);
    }

    const handleSubmit=(e,location,navigate)=>{
        e.preventDefault()
        console.log(location);
        if(location?.pathname==='/login'){
            console.log('from login');
            logInWithPass(navigate)
        }
        else if (location?.pathname === '/register'){
            registerWithPass(navigate)
        }
        else return
    }

    const handleAddNewProduct=(e)=>{
        e.preventDefault()
        validateForm(newProduct,setError)
         requestAdd(e)
    }

    return {
        handleBlur,
        handleSubmit,
        handleAddNewProduct, 
    }
};

export default useForm;