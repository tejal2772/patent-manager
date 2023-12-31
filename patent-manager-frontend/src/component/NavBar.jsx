import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Patent Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/properties" >Properties</Nav.Link>
                        <Nav.Link href="/patentsearch">Patent Search</Nav.Link>
                        <Nav.Link href="/trademark" >Trademark</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success"> <Link to="/registration">Publish Patent </Link></Button>
                        <Button variant="outline-success" onClick={handleLogout}>Sign Out</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

};

export default NavBar;