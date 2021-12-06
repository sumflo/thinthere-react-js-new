import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

function ShopBar(){
    return(
        <div className="body-shop-navbar">
            
            <Navbar expand="lg" id="body-shop-navbar-nav">
                <Container>
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <FontAwesomeIcon id="list-icon" icon={faListUl} />
                        <NavDropdown className="dropdown-section" title="Sort By" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">A - z</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Z - a</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Price ascending</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Price decreasing</NavDropdown.Item>
                        </NavDropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default ShopBar