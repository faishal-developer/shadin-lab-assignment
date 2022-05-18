
const useDebounce = () => {
    let timer
    return (func, time)=>{
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func()
        },time)
    }
};

export default useDebounce;