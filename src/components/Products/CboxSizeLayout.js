import React from 'react';
import CheckBox from './CheckBox';

const CboxSizeLayout = ({sizes,head,handleCheck}) => {

    
    return (
        <div className='p-aside-common-bg'>
            <h3 className='p-aside-common-h3 orange-color'>{head}</h3>
            <div className='res-grid'>
            {
                sizes.map((v,i)=><CheckBox head={head} handleCheck={handleCheck} label={v[0]} value={v[1]} key={i}/>)
            }
            </div>
        </div>
    );
};

export default CboxSizeLayout;