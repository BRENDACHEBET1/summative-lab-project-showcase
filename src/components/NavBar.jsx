import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <div>
            <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/admin'>Admin</NavLink>
        

        </nav>
        </div>
    </div>
  )
}

export default NavBar