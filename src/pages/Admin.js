import React from 'react'
import User from '../components/User'
import Order from '../components/Order';
import ProductTable from '../components/ProductTable';
import AdminSideBar from '../components/AdminSideBar';
import AdminNavBar from '../components/AdminNavBar';

class Admin extends React.Component {
    render(){
        return (
            <div className="admin-page">
                <AdminNavBar />
                <div className="admin-main-container">
                    <div>
                        <AdminSideBar />
                    </div>
                    <div className='data-table-container'>
                        <User />
                        <Order />
                        <ProductTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;