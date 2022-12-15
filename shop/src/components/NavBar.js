import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <Navbar bg={"light"} variant={"light"} expand="lg">
                <Container >
                    <Navbar.Brand as={Link} to={"/"} ><img src="./images/logo.png" width={'300px'} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto mx-2"
                            style={{ maxHeight: '100px' }}
                            navbarScroll >
                            <Nav.Link as={Link} to={"/login"}  >Login</Nav.Link>
                            <Nav.Link as={Link} to={"/cart"}  >Cart</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar