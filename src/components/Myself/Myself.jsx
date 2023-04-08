import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Myself = () => {
    const Photography = useContext(MoneyContext)
    return (
        <div>
            <h2>Myself</h2>
            <h3>is a {Photography}</h3>
        </div>
    );
};

export default Myself;