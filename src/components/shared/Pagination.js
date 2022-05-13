import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import useRequest from '../hooks/useRequest';
import PaginationBtn from './PaginationBtn';

const Pagination = () => {
    const { data,setQuantity, pagiBtnValue,setPage, page,setPagiBtnValue} =useContext(ThemeContext)
    const { handlePagiByData, handleDot, nextOrPrev} = useFilter()
    const { search } = useLocation();
    const { requestFunc} = useRequest()
    const quantity = new URLSearchParams(search).get('limit') ;
    const pageNum = new URLSearchParams(search).get('page');

    
    useEffect(() => {
        let newPagi = {...pagiBtnValue}
        newPagi.t = Math.ceil(data.total/Number(quantity))||1
        setPagiBtnValue(newPagi)
        handlePagiByData(newPagi)
        setQuantity(Number(quantity))
    }, [data.total,quantity])
    useEffect(()=>{
         setPage(Number(pageNum));
    },[pageNum])

    const nextDisable = pagiBtnValue[4] <= pagiBtnValue[3] + 1 || page === pagiBtnValue.t
    return (
        <div className='flex a-i-center mt-10vh j-c-center'>
            <button
                onClick={() => nextOrPrev(false, 1)}
                disabled={pagiBtnValue[1] < 2}
                className={pagiBtnValue[1] < 2 ? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'}
            >
                {`<`}
            </button>
            <PaginationBtn page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[1]}/>
            <PaginationBtn page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[2]}/>
            <PaginationBtn page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[3]}/>
            <button onClick={handleDot} className={pagiBtnValue.dot ? 'c-pointer bg-light' :'d-none'}> ...... </button>
            <PaginationBtn page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[4]}/>
            <PaginationBtn page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[5]}/>
            <PaginationBtn page={page} setPage={setPage} totalPage={pagiBtnValue.t} value={pagiBtnValue[6]}/>
            <button
                onClick={() => nextOrPrev(true, 1)}
                disabled={nextDisable}
                className={nextDisable ? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'}
            >
                {`>`}
            </button>
        </div>
    );
};

export default Pagination;