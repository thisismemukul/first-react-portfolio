import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
    return (
        <>
            <Navbar className="navBar" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home">React Website</Navbar.Brand>
                       <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <NavLink exact className="navbarDiv" activeClassName="active" to='/react-portfolio/home'>Home</NavLink>
                            <NavLink exact className="navbarDiv" activeClassName="active" to='/react-portfolio/service'>Services</NavLink>
                            <NavLink exact className="navbarDiv" activeClassName="active" to='/react-portfolio/about'>About</NavLink>
                            <NavLink exact className="navbarDiv" activeClassName="active" to='/react-portfolio/contact'>Contact</NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 searchbar"
                                aria-label="Search"
                            />
                            <Button className="searchbutton" variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComp;
