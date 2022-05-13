import axios from 'axios'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './Context';

const useRequest = () => {
    const { setData, quantity,setNewProduct,newProduct, setDataLoading,page,size,brand,priceSlider} = useContext(ThemeContext)
    const navigate = useNavigate()

    const getUrl=()=>{
        return `?page=${page || 1}&limit=${quantity}&size=${size}&brand=${brand}&price=${priceSlider}`
    }

    const requestFunc=()=>{
        // console.log('from useRequest');
        setDataLoading(true)
        //  navigate(getUrl())
        console.log(`http://localhost:5000/products${getUrl()}`);
        axios.get(`http://localhost:5000/products${getUrl()}`)
            .then(function (response) {
                console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) { 
                console.log(error);
            })
            .finally(() => setDataLoading(false))
    }

    const requestAdd=(e)=>{
        const formData = new FormData()
        let newOne = {...newProduct}
        newOne.id = Number(newOne.id)
        newOne.price = Number(newOne.price)
        for (let x in newOne) {
            formData.append(x, newOne[x])
        } 
        console.log(formData);
        axios({
            method: "post",
            url: 'http://localhost:5000/products',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                if(response.data.insertedId){
                    alert('wow,successfully you added a new Product')
                    setNewProduct({})
                    e.target.reset()
                }else{
                    throw new Error()
                }
            })
            .catch(function (error) {
               alert('error occurred');
            })
    }

    
    return {
        requestFunc,
        getUrl,
        requestAdd
    }
};

export default useRequest;