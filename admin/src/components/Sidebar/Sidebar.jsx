import React from 'react'
import { assets } from '../../assets/assets'
import {NavLink} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/add' className='sidebar-option'>
                    <img src={assets.add_icon} alt="add"></img>
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list'className='sidebar-option'>
                    <img src={assets.order_icon} alt="add"></img>
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className='sidebar-option'>
                    <img src={assets.order_icon} alt="add"></img>
                    <p>Order</p>
                </NavLink>
            </div>
        </div>    
  )
}

export default Sidebar
