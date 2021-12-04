import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function NavBar(){
    return(
        <Navbar expand="lg" bg="light" variant="light">
            <Container className="navbar-container">
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
                    <Form className="flex-margin">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar