import React from 'react'
import logo from './logo-bookmark.svg'
import menu from './icon-hamburger.svg'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='nav-container'>
            <img className='book' src={logo} alt='logo'/>
            <ul className='list-wrapper'>
                <li>
                    <a 
                        href='#features'
                        className='link'
                        >FEATURES
                    </a>
                </li>
                <li>
                    <a 
                        href='#features'
                        className='link'
                        >PRICING
                    </a>
                </li>
                <li>
                    <a 
                        href='#features'
                        className='link'
                        >CONTACT
                    </a>
                </li>
                <li>
                    <a 
                        href='#features'
                        className='link-active'
                        >LOGIN
                    </a>
                </li>
                <li>
                   <img className='btn-menu' src={menu} alt='menu'/>
                </li>
            </ul>
        </div>
    )
}
