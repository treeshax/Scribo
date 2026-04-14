import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div className='navbar-container'>
                <ul className='navbar'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Workspace</li>
                    <li className='nav-item'>Contact</li>
                    <li className='nav-item'>ScriboAI</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar