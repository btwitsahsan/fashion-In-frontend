import React from 'react'
import './PageMenu.scss'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <div>
        <nav className="pageMenuContainer">
            <ul className="home-links">
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/wallet">My Wallet</NavLink>
                </li>
                <li>
                    <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default PageMenu