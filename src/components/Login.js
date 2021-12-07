import React from "react";

import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class Login extends React.Component {
    render(){
        return(
            <div className="login-form-container">
                <div className="login-title-holder">
                    <h4>Log In</h4>
                </div>
                <hr/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRemember">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className="login-button-holder">
                        <Button id="login-button" type="submit">
                            Log in
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Login