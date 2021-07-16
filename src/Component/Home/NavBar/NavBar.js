import React from 'react';
import {  Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.scss'

const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" >
        
        <Navbar.Brand className='menu' href="#home">Desing World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto' >
                <Nav.Link className=' menu-1' href="#features">Home</Nav.Link>
                <Nav.Link className='menu-1' href="#pricing">About us</Nav.Link>
                <Nav.Link className='menu-1' href="#pricing">Admin</Nav.Link>
                <Nav.Link className='menu-1' href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link className='menu-2' href="#deets">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
    </Navbar>
    );
};

export default NavBar;