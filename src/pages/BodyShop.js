import React from 'react'
import Product from '../components/Product'
import ShopBar from '../components/ShopBar';

class BodyShop extends React.Component {
    render(){
        return (
            <div className="shop-container">
                <ShopBar />
                <div className="shop-main-container">
                    <Product />
                </div>
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