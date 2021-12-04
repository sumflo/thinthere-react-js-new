import React from 'react';
import biobeef from '../assets/images/biobeef.png'

class Product extends React.Component {

    constructor(){
        super()
        this.state = {
            product : []
        }
    }

    render(){
        let productsItems = this.state.product.map(
            item => 
            <div className='product'>
                <img key={item.id} /* src={item.imageUrl} */ src={biobeef} alt={item.productName} className='product-detail-image' />
                <div className='product-detail'>
                    <h4 key={item.id} className='product-detail-name'>{item.productName}</h4>
                    {/* <p key={item.id} className=''>{item.description}</p> */}
                    <p key={item.id} className='product-detail-price'>{item.unitPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                </div>
            </div>
        )

        return(
            <div className='product-container'>
                {productsItems}
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


export default Product;