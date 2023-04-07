import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Card from '../Card/Card';

const About = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            <h4>Here is about of my </h4>
            <div>
                {
                    tshirts.map(shirt=><Tshirt shirt={shirt} key={shirt._id}></Tshirt>)
                }
            </div>
            <div>
                <Card></Card>
            </div>
        </div>
    );
};

export default About;