import React from 'react';
import Table from 'react-bootstrap/Table'

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
                {/* <td key={item.id}>{item.product}</td> */}
                <td key={item.id}>{item.status}</td>
                <td key={item.id}>{item.typeOfPayment}</td>
                <td key={item.id}>{item.totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</td>
            </tr>
        )

        return(
            <Table striped bordered hover size="sm" className='data-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        {/* <th>Products</th> */}
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList}
                </tbody>
            </Table>
        );
    }

    componentDidMount(){
        console.log('Itt vagyok!!!!')
        fetch('http://localhost:8080/orders', {headers: {Accept: 'application/json'}})
        .then(response => response.json())
        .then(data => this.setState({order: data}))
    }

}

export default Order;