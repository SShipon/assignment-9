import React from 'react';
import {  Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header-style">
              <Navbar variant="dark">
                 <Container>
                        <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/services" >Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" >About</Nav.Link>
                         <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                      </Nav>
                </Container>
            </Navbar>
           </div>
    );
};

export default Header;