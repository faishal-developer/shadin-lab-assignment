import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import PaginationBtn from './PaginationBtn';

const Pagination = () => {
    const { data, pagiBtnValue} =useContext(ThemeContext)
    const { handlePagiByData, handleDot, nextOrPrev} = useFilter()
    
    useEffect(() => {
        handlePagiByData(pagiBtnValue.t)
    }, [data])
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