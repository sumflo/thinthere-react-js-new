import React from 'react'
import Product from '../components/Product'
import ShopBar from '../components/ShopBar';
import Example from '../components/ShopSideBar';

class BodyShop extends React.Component {
    render(){
        return (
            <div className="shop-container">
                <ShopBar />
                <div className="shop-main-container">
                    <Example/>
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
 *      shopBar -- rendezés - kész
 *      div --main container
 *          sidebar
 *          products - "kész"
 *      div --main container
 * div -container
 * 
 */