import { getAuth, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import initializeFirebaseApp from "./firebaseInitialize";
import { ThemeContext } from "./Context";

initializeFirebaseApp()

//code started here
const auth = getAuth();

const useFirebase=()=>{
    const {user,setUser,lUser,setLUser,setIsLoading,isLoading} = useContext(ThemeContext)

    const update=(navigate)=>{
        updateProfile(auth.currentUser, {
            displayName: lUser.name
        }).then(() => {
            setUser(auth.currentUser);
            setIsLoading(false)
            navigate(-2)
        }).catch((error) => {
            alert(error.message)
            setIsLoading(false)
        });
    }

    const registerWithPass = (navigate)=>{
        setIsLoading(true)
        if (lUser.password !== lUser.password2){
            alert(`two password doesn't matched`)
            return 
        }
        createUserWithEmailAndPassword(auth, lUser.email, lUser.password)
            .then((userCredential) => {
                const RegisterdUser = userCredential.user;
                update(navigate)
            })
            .catch((error) => {
                alert(error.message)
                setIsLoading(false)
            })
    }

    const logInWithPass=(navigate)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, lUser.email, lUser.password)
            .then((userCredential) => {
                const loggedInUser = userCredential.user;
                setUser(loggedInUser)
                setIsLoading(false)
                navigate(-1)
            })
            .catch((error) => {
                alert(error.message)
                setIsLoading(false)
            });
    }

    const logOut=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            alert('logout successfull')
            setUser({})
            setIsLoading(false)
        }).catch((error) => {
            alert(error.message)
            setIsLoading(false)
        });     
    }
    useEffect(()=>{
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        });
    },[])

    return {
        registerWithPass,
        logInWithPass,
        logOut
    }
}
export default useFirebase;