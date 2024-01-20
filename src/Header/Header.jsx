import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='header_parent'>

            <div className="logo">
                <h2>logo</h2>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
