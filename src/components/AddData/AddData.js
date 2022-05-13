import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/Context';
import useForm from '../hooks/useForm';
import Input from '../login/Input';
import './addData.css'

const AddData = () => {
    const {newProduct,setNewProduct,error} = useContext(ThemeContext)
    const { handleAddNewProduct, handleBlur} = useForm()
    
    return (
        <div className='flex j-c-center a-i-center my-10vh'>
            <div>
                <h2>Add Data</h2>
                <form onSubmit={(e)=>handleAddNewProduct(e)}>
                    <Input 
                        data={newProduct} 
                        setData={setNewProduct} 
                        required={true} 
                        type="text" 
                        place="product Name" 
                        name="name"
                    />
                    {error?.name ? <p className='err-color'>{error?.name}</p> : ''} 
                    <br />
                    <Input 
                        data={newProduct} 
                        setData={setNewProduct} 
                        required={true} 
                        type="number" 
                        place="product id" 
                        name="id"
                    />
                    <br />
                    <Input 
                        data={newProduct} 
                        setData={setNewProduct} 
                        required={true} 
                        type="number" 
                        place="product price" 
                        name="price"
                    />
                    {error?.price ? <p className='err-color'>{error?.price}</p> : ''} 

                    <br />
                    <Input 
                        data={newProduct} 
                        setData={setNewProduct} 
                        required={true} 
                        type="text" 
                        place="shortDes" 
                        name="shortDes"
                    />
                    {error?.shortDes ? <p className='err-color'>{error?.shortDes}</p> : ''} 
                    <br />
                    <textarea 
                        required={true} 
                        onBlur={(e) => handleBlur(e,newProduct,setNewProduct)}
                        type="text" 
                        placeholder="description" 
                        name="des"
                    />
                    {error?.des ? <p className='err-color'>{error?.des}</p> : ''} 
                    <br />
                    <Input 
                        data={newProduct} 
                        setData={setNewProduct} 
                        required={true} 
                        type="file" 
                        file={true}
                        place="product Name" 
                        name="image"
                    />
                    {error?.image ? <p className='err-color'>{error?.image}</p> : ''} 

                    <br />
                    <Input 
                        data={newProduct} 
                        required={true}
                        setData={setNewProduct}
                        type="file" 
                        file={true}
                        place="product Name" 
                        name="image1"
                    /><br />
                    <Input 
                        data={newProduct} 
                        setData={setNewProduct} 
                        type="file" 
                        file={true}
                        place="product Name" 
                        name="image2"
                    /><br />
                    <Input 
                        data={newProduct} 
                        setData={setNewProduct} 
                        type="file" 
                        file={true}
                        place="product Name" 
                        name="image3"
                    /><br />
                    <input type='submit' className='bg-orange' />
                </form>
            </div>
        </div>
    );
};

export default AddData;