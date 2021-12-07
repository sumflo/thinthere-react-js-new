import React from 'react';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

class Order extends React.Component {

    constructor(){
        super()
        this.state = {
            order : []
        }
    }

    render(){
        let orderList = this.state.order.map(
            item => 
            <tr className='order-detail'>
                <td key={item.id}>{item.id}</td>
                <td key={item.id}>{item.user}</td>
                <td key={item.id}>{item.product.map(prod => prod.productName + ", ")}</td>
                <td key={item.id}>{item.status}</td>
                <td key={item.id}>{item.typeOfPayment}</td>
                <td key={item.id}>{item.totalPrice.toLocaleString("de-DE", {style: "currency", currency: "eur"})}</td>
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
                            <th>User</th>
                            <th>Products</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Total Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList}
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
        fetch('http://localhost:8080/orders', {headers: {Accept: 'application/json'}})
        .then(response => response.json())
        .then(data => this.setState({order: data}))
    }

    componentDidUpdate(){
        console.log('Updated.')
        console.log(this.state.order)
    }

}

export default Order;