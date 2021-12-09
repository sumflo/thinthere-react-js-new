import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function NavBar(){

    let context = React.useContext(AuthContext)
    console.log(context)

    return(
        <Navbar id="navbar" expand="lg" bg="light" variant="light">
            <Container className="navbar-container" >
                <Navbar.Brand>thinThere</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/bodyShop">BodyShop</Nav.Link>
                        <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
                        <Nav.Link as={Link} to="/joinUs">Join Us</Nav.Link>
                        { context.user?.username == "admin@admin.com" && <Nav.Link as={Link} to="/admin">Admin</Nav.Link> }
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
                    <div className="cart-holder">
                    <FontAwesomeIcon id="cart-icon" icon={faShoppingCart}/>
                    <p className="cart-counter">0</p>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar