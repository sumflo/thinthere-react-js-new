import React from "react";

import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class RegistrationForm extends React.Component {

    constructor(){
        super()
        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            country: "",
            postalCode: "",
            city: "",
            address: "",
            houseNumber: "",
            phoneNumber: "",
            isSubscribed: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

/*     handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    } */

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checked" ? this.setState({ [name]: checked }) : this.setState ({ [name]: value })
    }

    handleSubmit(event){
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <div className="join-us-title-holder">
                    <h2 className="join-us-title">Join Us</h2>
                </div>
                <div className="registration-form-holder">
                    <Form onSubmit={this.handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email (username)</Form.Label>
                            <Form.Control name="username" value={this.state.username} onChange={this.handleChange} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="address" value={this.state.address} onChange={this.handleChange} placeholder="Main St" />
                        </Form.Group>

                        

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridHouseNumber">
                            <Form.Label>Housenumber</Form.Label>
                            <Form.Control name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange} placeholder="1245" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="+36 30 123-4567" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" value={this.state.city} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Select name="country" value={this.state.country} onChange={this.handleChange}>
                                <option>Choose country...</option>
                                <option value="Magyarország">Hungary</option>
                                <option value="England">England</option>
                                <option value="Deutschland">Germany</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="postalCode" value={this.state.postalCode} onChange={this.handleChange} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridSubscribe">
                            <Form.Check type="checkbox" name="isSubscribed" checked={this.state.isSubscribed} onChange={this.handleChange} label="Subscribe to our newsletter" />
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