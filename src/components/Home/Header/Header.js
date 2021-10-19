
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, handleLogout } = useAuth();

    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home"> <img
                    src="https://i.ibb.co/c2z25Pz/eye1-removebg-preview.png"
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Brand className="fw-bolder brand" href="#home"><span style={{ color: 'red' }}>EyeCare</span> Hospital</Navbar.Brand>
                <Nav className="menu" expand="lg">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/doctor">Doctors</Link>
                    <Link to="/testimonial">Testimonial</Link>
                    <Link to="/contact">Contact Us</Link>
                    <span className="user-name">{user.displayName}</span> <br />
                    {user.email ?
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                        :
                        <Link to='/login'><button className="btn btn-success ms-1"> Login</button> </Link>
                    }
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;