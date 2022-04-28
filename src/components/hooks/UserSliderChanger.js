
const UserSliderChanger = () => {

    const handleClick = (setDataNum,dataNum,max) => {
        const interval = setInterval(() => {
            clearInterval(interval)
            if (dataNum < max) {
                setDataNum(dataNum + 1);
            } else {
                setDataNum(0)
            }
        //     console.log('working,interval');
        //     setDataNum(prev=>{
        //         if(prev<max){
        //             return prev+1
        //         }else{
        //             return 0
        //         }
        }, 3000);
        // return interval
    }

    
    return { 
        handleClick
    }
};

export default UserSliderChanger;