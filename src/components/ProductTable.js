import React from 'react';
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

class ProductTable extends React.Component {

    constructor(){
        super()
        this.state = {
            product : []
        }
    }

    render(){
        let productList = this.state.product.map(
            item => 
                <tr className='product-detail-table'>
                    <td key={item.id}>{item.id}</td>
                    <td key={item.id}>{item.productName}</td>
                    <td key={item.id}>{item.category.split("_").map((word) => word + " ")}</td>
                    <td key={item.id}>
                        {item.typeOfProductList.map((x) =>
                            x.name.split("_").length < 2
                            ? x.name.split("_")[0] + ", "
                            : x.name.split("_")[0] + " " + x.name.split("_")[1] + ", "
                        )}
                    </td>
                    <td key={item.id}>{item.packaging}</td>
                    <td key={item.id}>{item.unitPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</td>
                    <td key={item.id}>{item.description}</td>
                    <td key={item.id}>{item.inStock}</td>
                    <td key={item.id}>{item.createDate.split("T")[0]}</td>
                    <td key={item.id}>{item.lastUpdate.split("T")[0]}</td>
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
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Packaging</th>
                            <th>Unit Price</th>
                            <th>Description</th>
                            <th>In Stock</th>
                            <th>Cerate Date</th>
                            <th>Last Update</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList}
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
        fetch('http://localhost:8080/products', {headers: {Accept: 'application/json'}})
        .then(response => response.json())
        .then(data => this.setState({product: data}))
    }

    componentDidUpdate(){
        console.log('Updated.')
        console.log(this.state.product)
    } 

    componentWillUnmount(){}

}


export default ProductTable;