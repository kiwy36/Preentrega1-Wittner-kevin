import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav id='nav' className='navbar'>
            <div className="logo">Tienda de bicis</div>
            <ul className="nav-items">
                <li className="nav-item"><a href="/">Inicio</a></li>
                <li className="nav-item"><a href="/about">Acerca de</a></li>
                <li className="nav-item"><a href="/contact">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar
