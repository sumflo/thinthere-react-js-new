import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

function AdminNavBar(){
    return(
        <div className="admin-navbar">
            
            <Navbar expand="lg" id="admin-navbar-nav">
                <Container>
                
                    <Navbar.Toggle aria-controls="admin-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <NavDropdown className="dropdown-section" title="Search for" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Order</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Product</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className="dropdown-section" title="Data By" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">Id</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Username</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Product name</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">Product category</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">Product type</NavDropdown.Item>
                        </NavDropdown>

                        <Form className="admin-search">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-secondary">Search!</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default AdminNavBar