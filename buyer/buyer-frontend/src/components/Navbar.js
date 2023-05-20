import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="ui inverted menu">
            <h3 className="item" style={{ color: 'white', marginTop: '15px' }}>
                <i className='leaf icon'></i>
                FARMER'S PORTAL
            </h3>
            <NavLink className="right item" to='/'>
                <i className="home icon"></i> Home
            </NavLink>
            <NavLink className="item" to='/prodDisplay'>
                <i className="shopping cart icon"></i> Buy
            </NavLink>
            <NavLink className="item" to='/profile' >
                <i className="user icon"></i> Profile
            </NavLink>
        </div>
    )
}

export default Navbar;


