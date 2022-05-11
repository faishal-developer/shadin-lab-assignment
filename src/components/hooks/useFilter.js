import { useContext } from "react";
import { ThemeContext } from "./Context";
import fakeData from "../fakeData";
import useFunc from "./useFunc";

const useFilter = () => {
    const { setData,setPage, page,data, priceSlider, pagiBtnValue, setPagiBtnValue, size, brand } = useContext(ThemeContext)
    const { findP } = useFunc()

    // const priceFilter=(Data)=>{
    //     let newData = Data.filter(v=>{
    //         return v.price <= priceSlider[1] && v.price >= priceSlider[0]
    //     })
    //     setData(newData);
    // }

    // const brandFilter = (fData) => {
        
    //     if (brand?.length < 1) {
    //         priceFilter(fData)
    //         return
    //     }
    //     let newData = []
    //     brand?.forEach(v => {
    //       fData?.forEach(p => {
    //             if (findP(p, newData)) return
    //             p?.Brand === v && newData.push(p)
    //         })
    //     })
    //     setData(newData)
    //     priceFilter(newData)
    // }


    // const sizeFilter = () => {
        
    //     if (size?.length < 1){
    //         setData(fakeData)
    //         brandFilter(fakeData)
    //         return
    //     }
    //     let newData = []
    //     size?.forEach(v => {
    //         fakeData?.forEach(p => {
    //             if(findP(p,newData))return
    //             p?.sizes?.includes(v) && newData.push(p)    
    //         })
    //     })
    //     setData(newData)
    //     brandFilter(newData)
        
    // }

    let defaultPagi = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, t: 2,dot:false }

    const dotExistOrNot = (pagiBtn)=>{
        if (pagiBtn.t - pagiBtn[3] <= 3) {
            pagiBtn.dot = false
        }else{
            pagiBtn.dot = true
        }
        return pagiBtn
    }

    const nextOrPrev = (isNext,v,dot) =>{
        let pagiBtn = { ...pagiBtnValue }
        if (isNext) {
            pagiBtn[1] = pagiBtn[1]+v
            pagiBtn[2] = pagiBtn[2]+v
            pagiBtn[3] = pagiBtn[3]+v
            if(dot){
                setPage(pagiBtn[1])
            }else{
                setPage(page + 1)
            }
        }else{
            if(page-1<=3){
                pagiBtn[1] = 1
                pagiBtn[2] = 2
                pagiBtn[3] =3
            }else if(page-1<pagiBtn[4] && page-1>pagiBtn[3]){
                pagiBtn[1] = pagiBtn[4]-3
                pagiBtn[2] = pagiBtn[4]-2
                pagiBtn[3] = pagiBtn[4]-1
            }
            setPage(page-1)
        }
        
        setPagiBtnValue(dotExistOrNot(pagiBtn))
    }

    const handleDot=()=>{
        let differ = pagiBtnValue[4]-pagiBtnValue[3]
        if(differ<2){
            return
        }else if(differ<3){
            nextOrPrev(true,1,'dot')
            return
        }else if(differ<4){
            nextOrPrev(true,2,'dot')
            return
        }else{
            nextOrPrev(true,3,'dot')
        }

    }

    const handlePagiByData = (pagi)=>{
        let pagiBtn= {...pagi}
        dotExistOrNot(pagiBtn)
        defaultPagi.t = pagiBtn.t
        if(pagiBtn.dot===false){
            setPagiBtnValue(defaultPagi)
            return
        }
        pagiBtn[1] = 1
        // setPage(pagiBtn[1])
        pagiBtn[2] = 2
        pagiBtn[3] = 3
        pagiBtn[4] = pagiBtn.t-2 
        pagiBtn[5] = pagiBtn.t-1
        pagiBtn[6] = pagiBtn.t
        pagiBtn.dot= true
        setPagiBtnValue(pagiBtn)
    }
    
    return {
        handlePagiByData,
        handleDot,
        nextOrPrev
    }

};

export default useFilter;