import React from 'react';
import {  Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import './NavBar.scss'

const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand as={Link} className='menu' to='/'>Desing World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto' >
                <Nav.Link as={Link} className=' menu-1' to='/home'>Home</Nav.Link>
                <Nav.Link className='menu-1' href="#pricing">About us</Nav.Link>
                <Nav.Link as={Link} className='menu-1' to='/admin'>Admin</Nav.Link>
                <Nav.Link className='menu-1'  href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} className='menu-2' to='/singup'>Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        
    </Navbar>
    );
};

export default NavBar;