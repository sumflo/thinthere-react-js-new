import React from 'react'
import RegistrationForm from '../components/RegistrationForm';

class JoinUs extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div className="registration-form-container">
                <RegistrationForm  history={this.props.history} />
                
            </div>
        );
    }
}

export default JoinUs;