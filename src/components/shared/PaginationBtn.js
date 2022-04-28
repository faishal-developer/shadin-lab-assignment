import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/Context';
import './footer.css'

const PaginationBtn = ({value,totalPage}) => {
    const {page,setPage} = useContext(ThemeContext)

    const isDisable = totalPage<value || typeof value === 'string'
    let clsName = isDisable? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'
    const cls2 = typeof value === 'string' &&  'pagi-btn p-btn-disable';
    if (value === page){
        clsName += ` bg-orange`
    }
    
    return (
        <div className='c-pointer'>
            <button 
             onClick={()=>cls2 || setPage(value)}
             disabled={isDisable}
             className={cls2 || clsName}
            >
                {value}
            </button>
        </div>
    );
};

export default PaginationBtn;