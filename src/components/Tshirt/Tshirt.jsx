import React from 'react';

const Tshirt = ({shirt}) => {
    console.log(shirt)
    const {_id,price,picture,name,gender} = shirt
    return (
        <div>
            <img src={picture} alt="" />
            {/* <p>Name : {name}</p>
            <p>Price : {price}</p> */}
        </div>
    );
};

export default Tshirt;