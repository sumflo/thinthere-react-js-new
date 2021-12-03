import React from 'react'
import User from '../components/User'
import Order from '../components/Order';
import ProductTable from '../components/ProductTable';

class Admin extends React.Component {
    render(){
        return (
            <div>
                <User />
                <Order />
                <ProductTable />
            </div>
        );
    }
}

export default Admin;