import React from 'react';
import { AuthContext } from '../context/AuthContext';

class UserAccount extends React.Component {



    constructor(props){
        super(props)
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
            phoneNumber: ""
        }
    }

    render(){
        
        return(
            <div>
                <h2>Welcome {this.state.firstName} {this.state.lastName}</h2>
            </div>
        );
    }

    componentDidMount(){

        fetch(`http://localhost:8080/users/21`, {headers: {Accept: 'application/json'}})
        .then(response => response.json())
        .then(data => this.setState(data))
    }

}

UserAccount.contextType = AuthContext



export default UserAccount;