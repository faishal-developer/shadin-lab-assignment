import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import PaginationBtn from './PaginationBtn';

const Pagination = () => {
    const { data, pagiBtnValue, setPagiBtnValue} =useContext(ThemeContext)
    const { handlePagiByData, handleDot, nextOrPrev} = useFilter()
    const { search } = useLocation();
    const quantity = new URLSearchParams(search).get('quantity') || 3;
    console.log(quantity);

    
    useEffect(() => {
        let newPagi = {...pagiBtnValue}
        newPagi.t= Math.ceil(data.length/Number(quantity))
        console.log(newPagi.t);
        setPagiBtnValue(newPagi)
        handlePagiByData(newPagi)
    }, [data,quantity])
    return (
        <div className='flex a-i-center mt-10vh j-c-center'>
            <button
                onClick={() => nextOrPrev(false, 1)}
                disabled={pagiBtnValue[1] < 2}
                className={pagiBtnValue[1] < 2 ? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'}
            >
                {`<`}
            </button>
            <PaginationBtn totalPage={pagiBtnValue.t} value={pagiBtnValue[1]}/>
            <PaginationBtn totalPage={pagiBtnValue.t} value={pagiBtnValue[2]}/>
            <PaginationBtn totalPage={pagiBtnValue.t} value={pagiBtnValue[3]}/>
            <button onClick={handleDot} className={pagiBtnValue.dot ? 'c-pointer bg-light' :'d-none'}> ...... </button>
            <PaginationBtn totalPage={pagiBtnValue.t} value={pagiBtnValue[4]}/>
            <PaginationBtn totalPage={pagiBtnValue.t} value={pagiBtnValue[5]}/>
            <PaginationBtn totalPage={pagiBtnValue.t} value={pagiBtnValue[6]}/>
            <button
                onClick={() => nextOrPrev(true, 1)}
                disabled={pagiBtnValue[4]<=pagiBtnValue[3]+1}
                className={pagiBtnValue[4] <= pagiBtnValue[3]+1 ? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'}
            >
                {`>`}
            </button>
        </div>
    );
};

export default Pagination;