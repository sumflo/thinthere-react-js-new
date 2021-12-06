import React from "react";
import {Dropdown} from 'react-bootstrap'

function ShopSideBar(){
  return(
    <div className="side-bar-container">
      
        <Dropdown.Menu show id="side-bar-dropdown-1">
          <Dropdown.Header id='side-bar-dropdown-header-1'>Category</Dropdown.Header>
          <hr/>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">All products</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Performance enhancing <br/> supplement</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Protein powders</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Sport equippments</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Vitamins</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Weigh controlling <br/> formulas</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu show id="side-bar-dropdown-2">
          <hr/>
          <Dropdown.Header id='side-bar-dropdown-header-2'>Product types</Dropdown.Header>
          <hr/>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Gluten free</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Lactose free</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Sugar free</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Vegan</Dropdown.Item>
            <Dropdown.Item className='side-bar-dropdown-item' href="#">Other</Dropdown.Item>
        </Dropdown.Menu>

    </div>
  )
}

export default ShopSideBar