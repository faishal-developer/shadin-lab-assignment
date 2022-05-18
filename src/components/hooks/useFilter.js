import { useContext } from "react";
import { ThemeContext } from "./Context";

const useFilter = () => {
    const { setPage, page, pagiBtnValue, setPagiBtnValue} = useContext(ThemeContext)

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

    let defaultPagi = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, t: 2,dot1:false,dot2:false }

    const dotExistOrNot = (pagiBtn)=>{
        console.log(pagiBtn);
        if (pagiBtn[2] - pagiBtn[1] > 1) {
            pagiBtn.dot1 = true
        }else{
            pagiBtn.dot1 = false
        }
        if(pagiBtn[5]-pagiBtn[4]>1) pagiBtn.dot2= true
        else pagiBtn.dot2 =false
        return pagiBtn
    }

    const nextOrPrev = (isNext,v) =>{
        let pagiBtn = { ...pagiBtnValue }
        if (isNext) {
            pagiBtn[2] = pagiBtn[2]+v
            pagiBtn[3] = pagiBtn[3]+v
            pagiBtn[4] = pagiBtn[4] + v
        }else{
            pagiBtn[2] = pagiBtn[2] - v
            pagiBtn[3] = pagiBtn[3] - v
            pagiBtn[4] = pagiBtn[4] - v
        }
        
        setPagiBtnValue(dotExistOrNot(pagiBtn))
    }

    const handleDot=(isNext)=>{
        console.log('log from handle dot');
        let differ =isNext? pagiBtnValue[5]-pagiBtnValue[4] : pagiBtnValue[2]-pagiBtnValue[1]
        console.log(differ);
        if(differ<2){
            return
        }else if(differ<3){
            nextOrPrev(isNext,1)
            return
        }else {
            nextOrPrev(isNext,2)
            return
        }
        // else{
        //     nextOrPrev(isNext,3)
        // }

    }

    const handlePagiByData = (pagi,page)=>{
        let pagiBtn= {...pagi}
        defaultPagi.t = pagiBtn.t
        if(defaultPagi.t<=6){
             setPagiBtnValue(defaultPagi)
            return
        }
        let pageSetByUrl = page && pagiBtn.t-page>5 
        pagiBtn[2] =pageSetByUrl && page!==1 ?page: 2
        pagiBtn[3] = pageSetByUrl && page!==1?page+1:3
        pagiBtn[4] =pageSetByUrl && page!==1? page+2:4
        pagiBtn[5] = pagiBtn.t-1
        pagiBtn[6] = pagiBtn.t
        if(!pageSetByUrl) handleLastButton(pagiBtn)
        let newPagi = dotExistOrNot(pagiBtn)
        console.log(dotExistOrNot(pagiBtn));
        setPagiBtnValue(newPagi)
    }
    let handleLastButton=(pagi,t)=>{
        let pagiBtn={...pagi}
        pagiBtn[2] = t-2
        pagiBtn[3] = t-1
        pagiBtn[4] = t
        let newPagi = dotExistOrNot(pagiBtn)
        setPagiBtnValue(newPagi)
        return newPagi
    }
    
    return {
        handlePagiByData,
        handleDot,
        nextOrPrev,
        handleLastButton
    }

};

export default useFilter;