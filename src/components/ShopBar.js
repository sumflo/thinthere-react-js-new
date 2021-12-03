import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

function ShopBar(){
    return(
        <div className="body-shop-navbar">
            
            <Navbar expand="lg" >
                <Container>
                <FontAwesomeIcon icon={faListUl} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown className="dropdown-section" title="Short By" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">A - z</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Z - a</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Price ascending</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Price decreasing</NavDropdown.Item>
                        </NavDropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default ShopBar