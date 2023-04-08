import React from 'react';

const Card = ({ Shirt, handleRemove }) => {
    // console.log(Shirt)

    let massage;
    if(Shirt.length===0){
        massage = 'Apni ki fokit?'
    }
    else{
        massage = 'Apni ei shirt tao nan apnake manabe?'
    }

    return (
        <div>
            <h2 className={`text-sky-600 ${Shirt.length> 4 ? "bg-purple-50" : 'text-amber-500'}`}>This is the best fashion design market in dhaka</h2>
            <h2>Total Order : {Shirt.length}</h2>
            {massage}

            {
                Shirt.map(shirt => <div>
                    <p key={shirt._id}>{shirt.name}
                        <button onClick={() => handleRemove(shirt._id)}
                            className='bg-pink-300 w-4 ml-2'>X</button>
                    </p>
                </div>)
            }

        </div>
    );
};

export default Card;