import axios from 'axios'
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './Context';

const useRequest = () => {
    const {setData,quantity,setDataLoading,page,size,brand,priceSlider} = useContext(ThemeContext)
    const navigate = useNavigate()

    const getUrl=()=>{
        return `?page=${page || 1}&limit=${quantity}&size=${size}&brand=${brand}&price=${priceSlider}`
    }

    const requestFunc=()=>{
        // console.log('from useRequest');
        setDataLoading(true)
         navigate(getUrl())
        axios.get(`http://localhost:5000/products${getUrl()}`)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => setDataLoading(false))
    }

    
    return {
        requestFunc
    }
};

export default useRequest;