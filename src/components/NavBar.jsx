import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <div>
            <nav className='flex items-center gap-6 p-4 shadow-md rounded-2xl bg-slate-200'>
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