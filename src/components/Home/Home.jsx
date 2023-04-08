import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header/Header';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Home;