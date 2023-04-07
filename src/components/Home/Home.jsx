import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>This is my Home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;