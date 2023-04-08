import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='space-x-6 bg-red-300 p-6'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/review'}>Review</Link>
            <Link to={'/grandpa'}>GrandPa</Link>
        </nav>
    );
};

export default Header;