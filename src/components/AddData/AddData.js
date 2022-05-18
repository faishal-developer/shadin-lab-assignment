import React, { useContext, useState } from 'react';
import { ThemeContext } from '../hooks/Context';
import useForm from '../hooks/useForm';
import Input from '../login/Input';
import './addData.css'
import { useFormik } from 'formik';
import validate from './validation';
import useRequest from '../hooks/useRequest';
import {Loader} from 'rsuite'

let initialValues = {
    name: '',
    price: '',
    shortDes: '',
    des: '',
    sizes:[],
    Brand:'',
    im: '',
    im1: '',
    im2: '',
}
const AddData = () => {
    let [onProcess,setOnProcess] = useState(false)
    // const {newProduct,setNewProduct,error} = useContext(ThemeContext)
    // const { handleAddNewProduct, handleBlur} = useForm()
    const { requestAdd} = useRequest()
    const formik = useFormik({
        initialValues:initialValues
         ,validate,
        onSubmit: (values,{resetForm}) => {
         },
    });

    const handleCheck=(v)=>{
        let values = formik.values.sizes
        let newValue = values.filter((x) => x !== v)
        if(values.includes(v)){
            formik.setFieldValue('sizes',newValue)
        }else{
            newValue = [...values]
            newValue.push(v)
            console.log(values, newValue);
            formik.setFieldValue('sizes',newValue)
        }
    }
    
    return (
        <div className='flex j-c-center a-i-center my-10vh'>
            <div>
                <h2>Add Data</h2>
                <form onSubmit={(e) => requestAdd(formik.values, formik.setValues, initialValues, e, setOnProcess, formik.errors,formik.handleSubmit)}>
                    <label htmlFor='name'>Enter Name:</label>
                    <input  
                        onChange={formik.handleChange}
                        type="text" 
                        placeholder="product Name" 
                        name="name"
                        id="name"
                        value={formik.values.name}
                    />
                    {formik.errors.name ? <div className="err-color">{formik.errors.name}</div> : null}
                    <br />
                    <label htmlFor='price'>Enter price:</label>
                    <input  
                        onChange={formik.handleChange}
                        type="number" 
                        placeholder="product price" 
                        name="price"
                        id="price"
                        value={formik.values.price}
                    />
                    {formik.errors.price ? <div className="err-color">{formik.errors.price}</div> : null}
                    <br />
                    <label htmlFor='shortDes'>short description:</label>
                    <input  
                        onChange={formik.handleChange}
                        type="text" 
                        placeholder="shortDes" 
                        name="shortDes"
                        id="shortDes"
                        value={formik.values.shortDes}
                    />
                    {formik.errors.shortDes ? <div className="err-color">{formik.errors.shortDes}</div> : null}
                    <br />
                    <div className='flex'>
                        <label htmlFor='des'>Enter description:</label>
                        <textarea
                            onChange={formik.handleChange}
                            type="text"
                            placeholder="description"
                            name="des"
                            id="des"
                            value={formik.values.des}
                        />
                    </div>
                    {formik.errors.des ? <div className="err-color">{formik.errors.des}</div> : null}
                    <br />
                    <label htmlFor='image'>Enter image:</label>
                    <input  
                        type="file"
                        accept="image/png, image/jpeg" 
                        onChange={(event) => {
                            formik.setFieldValue("image", event.currentTarget.files[0]);
                        }}
                        placeholder="product Name" 
                        name="image"
                        id="image"
                        // value={formik.values.image}
                    />
                    {formik.errors.image ? <div className="err-color">{formik.errors.image}</div> : null}
                    <br />
                    <label htmlFor='image1'>more image:</label>
                    <input  
                        type="file"
                        accept="image/png, image/jpeg" 
                        onChange={(event) => {
                            formik.setFieldValue("image1", event.currentTarget.files[0]);
                        }}
                        placeholder="product Name" 
                        name="image1"
                        id="image1"
                        // value={formik.values.image1}
                    />
                    {formik.errors.image1 ? <div className="err-color">{formik.errors.image1}</div> : null}<br />
                    <label htmlFor='image2'>more image:</label>
                    <input  
                        type="file"
                        accept="image/png, image/jpeg" 
                        onChange={(event) => {
                            formik.setFieldValue("image2", event.currentTarget.files[0]);
                        }}
                        placeholder="product Name" 
                        name="image2"
                        id="image2"
                        // value={formik.values.image2}
                    />
                    {formik.errors.image2 ? <div className="err-color">{formik.errors.image2}</div> : null}<br />
                    <div>
                        <h3>select sizes</h3>
                        <label>
                            <input type='checkbox' onChange={() => handleCheck('s')} value='s' /> small
                        </label><br/>
                        <label>
                            <input type='checkbox' onChange={() => handleCheck('m')} value='m' /> medium
                        </label><br/>
                        <label>
                            <input type='checkbox' onChange={() => handleCheck('l')} value='l' /> large
                        </label><br/>
                        <label>
                            <input type='checkbox' onChange={() => handleCheck('xl')} value='xl' /> extra large
                        </label><br/>
                        {formik.errors.sizes ? <div className="err-color">{formik.errors.sizes}</div> : null}
                    </div>
                    <div>
                        <h3>select Brand</h3>
                        <select name="Brand" id="brand" onChange={formik.handleChange}>
                            <option>Select Brand</option>
                            <option value="Addidas">Addidas</option>
                            <option value="Nike">Nike</option>
                            <option value="Reebok">Reebok</option>
                            <option value="Active">Active</option>
                        </select>
                        {formik.errors.Brand ? <div className="err-color">{formik.errors.Brand}</div> : null}<br />
                    </div>

                    {
                        onProcess ? <button className='flex a-i-center'>processing<Loader/></button> :(
                        <input disabled={onProcess} type='submit' className='bg-orange' value={onProcess ? <Loader /> : 'submit'} />
                        )
                    }
                </form>
            </div>
        </div>
    );
};

export default AddData;