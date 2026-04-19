import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='navbar-container'>
                <ul className='navbar'>
                    <Link to="/" className='nav-item'>Home</Link>
                    <Link to="/dashboard" className='nav-item'>Workspace</Link>
                    <li className='nav-item'>Contact</li>
                    <li className='nav-item'>ScriboAI</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar