import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/Context';
import useForm from '../hooks/useForm';
import Input from '../login/Input';
import './addData.css'
import { useFormik } from 'formik';
import validate from './validation';
import useRequest from '../hooks/useRequest';

let initialValues = {
    name: '',
    id: 1,
    price: 1,
    shortDes: '',
    des: '',
    image: '',
    image1: '',
    image2: '',
    image3: ''
}
const AddData = () => {
    // const {newProduct,setNewProduct,error} = useContext(ThemeContext)
    // const { handleAddNewProduct, handleBlur} = useForm()
    const { requestAdd} = useRequest()
    const formik = useFormik({
        initialValues:initialValues
         ,validate,
        onSubmit: (values,e) => {
            requestAdd(values,formik.setValues,initialValues)
         },
    });
    
    return (
        <div className='flex j-c-center a-i-center my-10vh'>
            <div>
                <h2>Add Data</h2>
                <form onSubmit={(e)=>formik.handleSubmit(e)}>
                    <input  
                        onChange={formik.handleChange}
                        type="text" 
                        placeholder="product Name" 
                        name="name"
                        value={formik.values.name}
                    />
                    {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    <br />
                    <input  
                        onChange={formik.handleChange}
                        type="number" 
                        placeholder="product id" 
                        name="id"
                        value={formik.values.id}
                    />
                    {formik.errors.id ? <div>{formik.errors.id}</div> : null}
                    <br />
                    <input  
                        onChange={formik.handleChange}
                        type="number" 
                        placeholder="product price" 
                        name="price"
                        value={formik.values.price}
                    />
                    {formik.errors.price ? <div>{formik.errors.price}</div> : null}
                    <br />
                    <input  
                        onChange={formik.handleChange}
                        type="text" 
                        placeholder="shortDes" 
                        name="shortDes"
                        value={formik.values.shortDes}
                    />
                    {formik.errors.shortDes ? <div>{formik.errors.shortDes}</div> : null}
                    <br />
                    <textarea 
                        onChange={formik.handleChange}
                        type="text" 
                        placeholder="description" 
                        name="des"
                        value={formik.values.des}
                    />
                    {formik.errors.des ? <div>{formik.errors.des}</div> : null}
                    <br />
                    <input  
                        type="file" 
                        onChange={(event) => {
                            formik.setFieldValue("image", event.currentTarget.files[0]);
                        }}
                        file={true}
                        placeholder="product Name" 
                        name="image"
                    />
                    {formik.errors.image ? <div>{formik.errors.image}</div> : null}
                    <br />
                    <input  
                        type="file" 
                        onChange={(event) => {
                            formik.setFieldValue("image1", event.currentTarget.files[0]);
                        }}
                        file={true}
                        placeholder="product Name" 
                        name="image1"
                    />
                    {formik.errors.image1 ? <div>{formik.errors.image1}</div> : null}<br />
                    <input  
                        type="file" 
                        onChange={(event) => {
                            formik.setFieldValue("image2", event.currentTarget.files[0]);
                        }}
                        file={true}
                        placeholder="product Name" 
                        name="image2"
                    /><br />
                    <input  
                        type="file" 
                        onChange={(event) => {
                            formik.setFieldValue("image3", event.currentTarget.files[0]);
                        }}
                        file={true}
                        placeholder="product Name" 
                        name="image3"
                    /><br />
                    <input type='submit' className='bg-orange' />
                </form>
            </div>
        </div>
    );
};

export default AddData;