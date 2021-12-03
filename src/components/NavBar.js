import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

function NavBar(){
    return(
        <Navbar expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>thinThere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/bodyShop">BodyShop</Nav.Link>
                        <Nav.Link href="">Sign In</Nav.Link>
                        <Nav.Link href="">Join Us</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar