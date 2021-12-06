import React from "react";
import {Dropdown} from 'react-bootstrap'

function AdminSideBar(){
  return(
    <div className="side-bar-container">
      
        <Dropdown.Menu show id="side-bar-dropdown-admin">
          <Dropdown.Header id='side-bar-dropdown-header-1'>Database</Dropdown.Header>
          <hr/>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">All data</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Users</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Orders</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Products</Dropdown.Item>
        </Dropdown.Menu>

    </div>
  )
}

export default AdminSideBar