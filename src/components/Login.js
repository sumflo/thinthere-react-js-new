import React from "react";
import {AuthContext} from '../context/AuthContext'

import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          email: "",
          password: ""
        }
      }

    handleSubmit = () => {
        

        const data = {
            username: this.state.email,
            password: this.state.password
        }

        this.context.setUser(data)

        fetch("http://localhost:8080/login", {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
            }
        )
        .then(response => response.json())
        .then(tokenData => {
            /* this.context.setUser({token: tokenData.token}) */
            if(data.username == 'admin@admin.com'){
                    this.props.history.replace('/admin')
                }else{
                    this.props.history.replace('/account')
                }
            }
        )

        /* .then(data => {
            if(data.status == 200 && role == 'ROLE_USER'){
                this.props.history.replace("/userAccount")
            } else if(data.status == 200 && role == 'ROLE_ADMIN'){
                this.props.history.replace("/admin")
                }
        }
            */

        /* console.log(this.context)
        

        alert(42) */
    }

    render(){
        return(
            <div className="login-form-container">
                <div className="login-title-holder">
                    <h4>Log In</h4>
                </div>
                <hr/>
                <Form onSubmit={(e)=> 
                    {
                        e.preventDefault()
                        this.handleSubmit();
                    }
                    }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRemember">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className="login-button-holder">
                        <Button  id="login-button" type="submit">
                            Log in
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

Login.contextType = AuthContext

export default Login