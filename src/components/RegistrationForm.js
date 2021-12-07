import React from "react";

import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class RegistrationForm extends React.Component {
    render(){
        return(
            <div>
                <div className="join-us-title-holder">
                    <h2 className="join-us-title">Join Us</h2>
                </div>
                <div className="registration-form-holder">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email (username)</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Main St" />
                        </Form.Group>

                        

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridHouseNumber">
                            <Form.Label>Housenumber</Form.Label>
                            <Form.Control placeholder="1245" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control placeholder="+36 30 123-4567" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridSubscribe">
                            <Form.Check type="checkbox" label="Subscribe to our newsletter" />
                        </Form.Group>

                        <div className="form-submit-button-holder">
                        <Button id="form-submit-button" type="submit">
                            Submit
                        </Button>
                        </div>
                    </Form>
                </div>

            </div>
        );

    }
}

export default RegistrationForm