import { useContext } from "react";
import { ThemeContext } from "./Context";
import fakeData from "../fakeData";
import useFunc from "./useFunc";

const useFilter = () => {
    const { setData,setPage, data, priceSlider, pagiBtnValue, setPagiBtnValue, size, brand } = useContext(ThemeContext)
    const { findP } = useFunc()

    const priceFilter=(Data)=>{
        let newData = Data.filter(v=>{
            return v.price <= priceSlider[1]*5 && v.price >= priceSlider[0]*5
        })
        setData(newData);
    }

    const brandFilter = (fData) => {
        
        if (brand?.length < 1) {
            priceFilter(fData)
            return
        }
        let newData = []
        brand?.forEach(v => {
          fData?.forEach(p => {
                if (findP(p, newData)) return
                p?.Brand === v && newData.push(p)
            })
        })
        setData(newData)
        priceFilter(newData)
    }


    const sizeFilter = () => {
        
        if (size?.length < 1){
            setData(fakeData)
            brandFilter(fakeData)
            return
        }
        let newData = []
        size?.forEach(v => {
            fakeData?.forEach(p => {
                if(findP(p,newData))return
                p?.sizes?.includes(v) && newData.push(p)    
            })
        })
        setData(newData)
        brandFilter(newData)
        
    }

    let defaultPagi = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, t: 2,dot:false }

    const dotExistOrNot = (pagiBtn)=>{
        if (pagiBtn.t - pagiBtn[3] <= 3) {
            pagiBtn.dot = false
        }else{
            pagiBtn.dot = true
        }
        return pagiBtn
    }

    const nextOrPrev = (isNext,v) =>{
        let pagiBtn = { ...pagiBtnValue }
        if (isNext) {
            pagiBtn[1] = pagiBtn[1]+v
            pagiBtn[2] = pagiBtn[2]+v
            pagiBtn[3] = pagiBtn[3]+v
        }else{
            pagiBtn[1] = pagiBtn[1] - 1
            pagiBtn[2] = pagiBtn[2] - 1
            pagiBtn[3] = pagiBtn[3] - 1
        }
        setPage(pagiBtn[1])
        setPagiBtnValue(dotExistOrNot(pagiBtn))
    }

    const handleDot=()=>{
        let differ = pagiBtnValue[4]-pagiBtnValue[3]
        if(differ<2){
            return
        }else if(differ<3){
            nextOrPrev(true,1)
            return
        }else if(differ<4){
            console.log(differ);
            nextOrPrev(true,2)
            return
        }else{
            nextOrPrev(true,3)
        }
    }

    const handlePagiByData = ()=>{
        let pagiBtn= {...pagiBtnValue}
        pagiBtn.t = Math.ceil(data?.length/3)
        dotExistOrNot(pagiBtn)
        defaultPagi.t = pagiBtn.t
        if(pagiBtn.dot===false){
            setPagiBtnValue(defaultPagi)
            return
        }
        pagiBtn[1] = 1
        setPage(pagiBtn[1])
        pagiBtn[2] = 2
        pagiBtn[3] = 3
        pagiBtn[4] = pagiBtn.t-2 
        pagiBtn[5] = pagiBtn.t-1
        pagiBtn[6] = pagiBtn.t
        pagiBtn.dot= true
        setPagiBtnValue(pagiBtn)
    }
    
    return {
        sizeFilter,
        handlePagiByData,
        handleDot,
        nextOrPrev
    }

};

export default useFilter;