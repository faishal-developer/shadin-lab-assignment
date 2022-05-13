import useForm from '../hooks/useForm';

const Input = ({type,place,name,icon,data,setData,required,file}) => {
    const { handleBlur} = useForm()

    return (
        <>
            {icon ? <span className='input-icon'>{icon}</span>:''}
            <input 
                required={required} 
                onChange={(e)=>handleBlur(e,data,setData,file)} 
                type={type} 
                placeholder={place} 
                // value={data[name]}
                name={name}
            />
            <br/>
        </>
    )
};

export default Input;