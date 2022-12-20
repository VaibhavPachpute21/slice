import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../actions/userAction'

const NavBar = () => {
    const dispatch = useDispatch()
    const cartstate = useSelector((state) => state.cartReducer)
    const userState = useSelector(state => state.userLoginReducer);
    const { currentUser } = userState;


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
                            {
                                currentUser ? (
                                    <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => { dispatch(logoutUser()) }}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                )
                                    : (
                                        <>
                                            <Nav.Link as={Link} to={"/register"} >Register</Nav.Link>
                                            <Nav.Link as={Link} to={"/login"}  >Login</Nav.Link>
                                        </>
                                    )
                            }

                            <Nav.Link as={Link} to={"/cart"}  >Cart {cartstate.cartItems.length}</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar