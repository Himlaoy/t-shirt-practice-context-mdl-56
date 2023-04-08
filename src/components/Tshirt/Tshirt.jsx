import React from 'react';

const Tshirt = ({shirt, handleAddBtn}) => {
    // console.log(shirt)
    const {_id,price,picture,name,gender} = shirt
    return (
        <div className='border border-b-green-400 rounded  px-4'>
            <img className='rounded ' src={picture} alt="" />
            <p className='text-xs'>Name : {name}</p>
            <p className='text-xs'>Price : {price}</p>
            <button onClick={()=>handleAddBtn(shirt)} className='text-xs bg-yellow-200 w-16 rounded h-5'>Buy Now</button>
        </div>
    );
};

export default Tshirt;