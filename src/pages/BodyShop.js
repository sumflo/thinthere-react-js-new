import React from 'react'
import Product from '../components/Product'

class BodyShop extends React.Component {
    render(){
        return (
            <div>
                <Product />
            </div>
        );
    }
}

export default BodyShop;

/**
 * 
 * div -container
 *      shopBar -- rendezés
 *      div --main container
 *          sidebar
 *          products
 *      div --main container
 * div -container
 * 
 */