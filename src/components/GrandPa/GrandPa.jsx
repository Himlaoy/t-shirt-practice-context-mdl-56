import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'

export const MoneyContext = createContext('Photography')

const GrandPa = () => {
    return (
        <div className=' flex grandpa'>
            <h2>GrandPa</h2>
            <MoneyContext.Provider value='Photogrpher'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </MoneyContext.Provider>

        </div>
    );
};

export default GrandPa;