import { useContext } from "react";
import { ThemeContext } from "./Context";
import useFirebase from "../hooks/useFirebase"

const useForm = () => {
    const {lUser,setLUser} = useContext(ThemeContext)
    const { registerWithPass, logInWithPass, logOut} = useFirebase()

    const handleBlur=(e)=>{
        let newUser = { ...lUser }
        newUser[e.target.name] = e.target.value
        setLUser(newUser)
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

    return {
        handleBlur,
        handleSubmit
    }
};

export default useForm;