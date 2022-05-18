
const useDebounce = () => {
    let timer
    return (func, time)=>{
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func()
        },100)
    }
};

export default useDebounce;