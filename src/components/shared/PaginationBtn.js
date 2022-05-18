import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useFilter from '../hooks/useFilter';
import useRequest from '../hooks/useRequest';
import './footer.css'

const PaginationBtn = ({p,page,setPage,value,totalPage}) => {
    const { quantity, pagiBtnValue} = useContext(ThemeContext)
     const navigate = useNavigate()
     const {requestFunc,getUrl} = useRequest()
    const { handleDot, handleLastButton} = useFilter()
    const isDisable = totalPage<value || typeof value === 'string'
    let clsName = isDisable? 'pagi-btn d-none' : 'pagi-btn p-btn-active'
    const cls2 = typeof value === 'string' &&  'pagi-btn p-btn-disable';
    if (value === page){
        clsName += ` bg-orange`
    }
    const handleClick = ()=>{
        if (p === 5 || p === 6) {
            handleLastButton(pagiBtnValue,pagiBtnValue.t-2)
        }
        if(p===1){
            handleLastButton(pagiBtnValue,4)
        }
        if(p===4){
            handleDot(true)
        }
        if(p===2){
            handleDot(false)
        }
        setPage(value)
        
        // requestFunc(quantity, value)
        // navigate(getUrl(quantity, value))
    }
    
    return (
        <div className='c-pointer'>
            <button 
             onClick={()=>cls2 || handleClick()}
             disabled={isDisable}
             className={cls2 || clsName}
            >
                {value}
            </button>
        </div>
    );
};

export default PaginationBtn;