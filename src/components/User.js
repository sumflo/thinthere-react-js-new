import React from 'react';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

class User extends React.Component {

    constructor(){
        super()
        this.state = {
            user : []
        }
    }

    render(){
        let userList = this.state.user.map(
            item => 
            <tr className='user-detail'>
                <td key={item.id}>{item.id}</td>
                <td key={item.id}>{item.firstName}</td>
                <td key={item.id}>{item.lastName}</td>
                <td key={item.id}>{item.username}</td>
                <td key={item.id}>{item.registrationDate}</td>
                <td key={item.id}>{item.country}</td>
                <td key={item.id}>{item.postalCode}</td>
                <td key={item.id}>{item.city}</td>
                <td key={item.id}>{item.address}</td>
                <td key={item.id}>{item.houseNumber}</td>
                <td key={item.id}>{item.phoneNumber}</td>
                <td key={item.id}>{item.role}</td>
                <td className="data-table-icon-holder edit-table"><FontAwesomeIcon icon={faPencilAlt}/></td>
                <td className="data-table-icon-holder delete-table"><FontAwesomeIcon icon={faTrash}/></td>
            </tr>
        )

        return(
            <div>
                <Table striped bordered hover size="sm" className='data-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Registration Date</th>
                            <th>Country</th>
                            <th>Postal Code</th>
                            <th>City</th>
                            <th>Address</th>
                            <th>House Number</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </Table>
                <div className="add-new-button-holder">
                    <Button as="input" type="submit" value="Add new" variant="outline-secondary"/>{' '}
                </div>
            </div>
        );
    }

    componentDidMount(){
        console.log('Itt vagyok!!!!')
        fetch('http://localhost:8080/users', {headers: {Accept: 'application/json'}})
        .then(response => response.json())
        .then(data => this.setState({user: data}))
    }

    componentDidUpdate(){
        console.log('Updated.')
        console.log(this.state.user)
    }

}

export default User;