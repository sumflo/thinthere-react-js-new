import React from 'react'
import Login from '../components/Login';

class SignIn extends React.Component {
    render(){
        return (
            <div className="login-form-container">
                <Login {...this.props}/>
            </div>
        );
    }
}

export default SignIn;