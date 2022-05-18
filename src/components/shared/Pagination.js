import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import PaginationBtn from './PaginationBtn';

const Pagination = () => {
    const { data,quantity,setQuantity, pagiBtnValue,setPage, page,setPagiBtnValue} =useContext(ThemeContext)
    const { handlePagiByData, handleDot, nextOrPrev} = useFilter()
    

    
    useEffect(() => {
        let newPagi = {...pagiBtnValue}
        newPagi.t = Math.ceil(data.total/Number(quantity))||1
        // setPagiBtnValue(newPagi)
        handlePagiByData(newPagi,page)
        setQuantity(Number(quantity))
    }, [data.total])
    

    const nextDisable =page>=pagiBtnValue.t
    return (
        <div className='flex a-i-center mt-10vh j-c-center'>
            <button
                onClick={() =>{setPage(page-1);handlePagiByData(pagiBtnValue,page-1)}}
                disabled={page<=1}
                className={page<=1? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'}
            >
                {`<`}
            </button>
            <PaginationBtn p={1} page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={1}/>
            <button className={pagiBtnValue.dot1 ? 'c-pointer bg-light' : 'd-none'}> ...... </button>
            <PaginationBtn p={2} page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[2]}/>
            <PaginationBtn p={3} page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[3]}/>
            <PaginationBtn p={4} page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[4]}/>
            <button className={pagiBtnValue.dot2 ? 'c-pointer bg-light' : 'd-none'}> ...... </button>
            <PaginationBtn p={5} page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[5]}/>
            <PaginationBtn p={6} page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[6]}/>
            <button
                onClick={() => { setPage(page + 1); handlePagiByData(pagiBtnValue, page + 1) }}
                disabled={nextDisable}
                className={nextDisable ? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'}
            >
                {`>`}
            </button>
        </div>
    );
};

export default Pagination;