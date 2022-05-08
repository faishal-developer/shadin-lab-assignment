
const UserSliderChanger = () => {

    const handleClick = (setDataNum,dataNum,max) => {
        const interval = setInterval(() => {
            clearInterval(interval)
            if (dataNum < max) {
                setDataNum(dataNum + 1);
            } else {
                setDataNum(0)
            }
        
        }, 3000);
    }

    
    return { 
        handleClick
    }
};

export default UserSliderChanger;