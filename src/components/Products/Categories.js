import React from 'react';

const Categories = () => {

    const categorie = ['Man','Woman','Children','Hot Deals']
    return (
        <div className='p-aside-common-bg'>
            <h3 className='orange-color p-aside-common-h3'>Categories</h3>
            <div className='res-grid'>
                {
                    categorie?.map((v, i) => <p className='p-aside-cat-p ash-color' key={i} id={i}>{v}</p>)
                }
            </div>
        </div>
    );
};

export default Categories;