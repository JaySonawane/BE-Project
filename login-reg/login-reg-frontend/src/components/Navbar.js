import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="ui inverted menu">
            <h3 className="item" style={{color:'white',marginTop:'15px'}}>
                <i className='leaf icon'></i>
                FARMER'S PORTAL
            </h3>
            <NavLink className="right item" to='/'>
                <i className="home icon"></i> Home
            </NavLink>
            <NavLink className="item" to='/login'>
                <i className="sign-in icon"></i> Login
            </NavLink>
            <NavLink className="item" to='/register' >
                <i className="signup icon"></i> Register
            </NavLink>
        </div>
    )
}

export default Navbar;



/*
<div style={{ marginBottom: '45px' }}>
<div className="ui inverted segment">
    <div className="ui inverted secondary pointing menu">
        <NavLink className="right item " to="/">
            Home
        </NavLink>
        <NavLink className="item" to="/login">
            Login
        </NavLink>
        <NavLink className="item" to="/register">
            Register
        </NavLink>
    </div>
</div>
</div> */