import axios from 'axios'
import { useContext } from 'react';
import { ThemeContext } from './Context';

const useRequest = () => {
    const { setData,data, quantity,setNewProduct,newProduct, setDataLoading,page,size,brand,priceSlider} = useContext(ThemeContext)

    const getUrl = (q, p, s, b, pr)=>{
        console.log(pr,priceSlider);
        return `?page=${p || page}&limit=${q|| quantity}&size=${s||size}&brand=${b||brand}&price=${pr||priceSlider}`
    }
    
    const requestFunc=(q,p,s,b,pr)=>{
        let newData= {...data}
        newData.data = [] 
        setData(newData)
        // if(dataLoading) return
        setDataLoading(true)
        console.log('from request func');
        //  navigate(getUrl())
        axios.get(`https://faishal-app.herokuapp.com/products${getUrl(q, p, s, b, pr)}`)
            .then(function (response) {
                console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) { 
                console.log(error);
            })
            .finally(() => setDataLoading(false))
    }

    const requestAdd=(values,func,init)=>{
        const formData = new FormData()
        let newOne = {...values}
        newOne.id = Number(newOne.id)
        newOne.price = Number(newOne.price)
        for (let x in newOne) {
            formData.append(x, newOne[x])
        } 
        console.log(formData);
        axios({
            method: "post",
            url: 'https://faishal-app.herokuapp.com/products',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                if(response.data.insertedId){
                    alert('wow,successfully you added a new Product')
                    setNewProduct({})
                    func(init)
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