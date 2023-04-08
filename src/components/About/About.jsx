import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Card from '../Card/Card';


const About = () => {
    const tshirts = useLoaderData()
    const [Shirt, setShirt] = useState([])

    const handleAddBtn = shirt => {
        const exist = Shirt.find(Ts => Ts._id === shirt._id)
        if (exist) {
            toast('Abar add koren kan')
        }
        else {
            const newShirt = [...Shirt, shirt]
            setShirt(newShirt)

        }
    }

    const handleRemove = id => {
        console.log(id)
        const remaining = Shirt.filter(ts => ts._id !== id)
        setShirt(remaining)
    }
    

    return (
        <div className='grid md:grid-cols-3 '>
            <h4>Here is about of my </h4>
            <div className='grid md:grid-cols-3 gap-4 border p-10'>
                {
                    tshirts.map(shirt => <Tshirt shirt={shirt} key={shirt._id} handleAddBtn={handleAddBtn}></Tshirt>)
                }
            </div>
            <div className='ml-20'>
                <Card Shirt={Shirt} handleRemove={handleRemove}></Card>
            </div>
        </div>
    );
};

export default About;