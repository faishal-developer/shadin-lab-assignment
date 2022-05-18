import axios from 'axios'
import React, { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Notification, toaster } from 'rsuite';
import { ThemeContext } from './Context';

export let timer;
const useRequest = () => {
    const { setData, data, quantity, setNewProduct, newProduct, setDataLoading, page, size, brand, priceSlider } = useContext(ThemeContext)
    // const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();

    const getUrl = (q, p, s, b, pr) => {
        return `?page=${p || page}&limit=${q || quantity}&size=${s || size}&brand=${b || brand}&price=${pr || priceSlider}`
    }

    const request = (q, p, s, b, pr) => {
        let newData = { ...data }
        newData.data = []
        setData(newData)
        setDataLoading(true)
        axios.get(`http://localhost:5000/products${getUrl(q, p, s, b, pr)}`)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => setDataLoading(false))
    }

    const requestFunc = (q, p, s, b, pr) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            request(q, p, s, b, pr)
        }, 100)
    }

    const message = (isSuccess) => {
        let text = isSuccess ? 'successfully added a new Product' : 'error occured'
        let type = isSuccess ? 'success' : 'error'
        return <Notification type={type} header={type} closable>
            <p width={320} rows={3}>{text}</p>
        </Notification>
    }

    const postData = (formData, e, func, init, processFunc) => {
        processFunc(true)
        axios({
            method: "post",
            url: 'https://faishal-app.herokuapp.com/products',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    toaster.push(message(true), { placement: 'topEnd' })
                    setNewProduct({})
                    e.target.reset()
                    func(init)
                } else {
                    throw new Error()
                }
            })
            .catch(function (error) {
                toaster.push(message(true), { placement: 'topEnd' })
                alert('error occurred');
            })
            .finally(() => { processFunc(false) })
    }

    const requestAdd = (values, func, init, e, processFunc, errors, formikSubmit) => {
        e.preventDefault()
        formikSubmit()
        if (!values.name || !values.price || !values.image) return
        const formData = new FormData()
        let newOne = { ...values }
        newOne.id = parseInt(Math.random() * 100)
        newOne.price = Number(newOne.price)
        for (let x in newOne) {
            formData.append(x, newOne[x])
        }
        setTimeout(() => {
            console.log(values);
            if (Object.keys(errors).length > 0) return
            // if(errors.name || errors.price || errors.image || error)
            postData(formData, e, func, init, processFunc)
        }, 100)
    }


    return {
        requestFunc,
        getUrl,
        requestAdd
    }
};

export default useRequest;