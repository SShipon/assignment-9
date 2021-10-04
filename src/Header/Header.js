import React from 'react';
import {  Col, Container, Nav, Navbar, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header-style">
              <Navbar variant="dark">
                 <Container>
                    <Row>
                        <Col>
                                               <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
                       
                        </Col>
                        <Col>
                         <Nav className="me-auto">
                        <Nav.Link as={Link} to="/services" >Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" >About</Nav.Link>
                         <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                      </Nav> 
                        </Col>
</Row>
                </Container>
            </Navbar>
           </div>
    );
};

export default Header;