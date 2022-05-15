import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../hooks/Context';
import useRequest from '../hooks/useRequest';
import './footer.css'

const PaginationBtn = ({page,setPage,value,totalPage}) => {
     const {quantity} = useContext(ThemeContext)
     const navigate = useNavigate()
     const {requestFunc,getUrl} = useRequest()
    const isDisable = totalPage<value || typeof value === 'string'
    let clsName = isDisable? 'pagi-btn p-btn-disable' : 'pagi-btn p-btn-active'
    const cls2 = typeof value === 'string' &&  'pagi-btn p-btn-disable';
    if (value === page){
        clsName += ` bg-orange`
    }
    const handleClick = ()=>{
        console.log('from handleClick function',cls2);
        setPage(value)
        requestFunc(quantity, value)
        navigate(getUrl(quantity, value))
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