
const useDebounce = () => {
    const debounce=(func,time)=>{
        let timerId ;
        return (slider)=>{
            console.log(slider);
            if(timerId){
                clearTimeout(timerId)
            }
            timerId = setTimeout(()=>{func()},time)
        }
    }

    return {
        debounce
    }
};

export default useDebounce;