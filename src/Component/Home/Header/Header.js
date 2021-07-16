import React from 'react';
import ManuSection from '../ManuSection/ManuSection';
import NavBar from '../NavBar/NavBar';
import './Header.scss'

const Header = () => {
    return (
        <header className='header-one'>
            <div className="container">
                <NavBar></NavBar>
                <ManuSection></ManuSection>
            </div>
        </header>
    );
};

export default Header;