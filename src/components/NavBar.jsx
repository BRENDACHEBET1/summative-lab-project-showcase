import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="w-full">
      <nav className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 py-4 sm:py-6 bg-gray-100 shadow-md border border-gray-100">

        <NavLink
          to="/"
          className="px-4 sm:px-6 py-2 rounded-3xl bg-slate-300 text-slate-600 hover:bg-slate-400 transition text-sm sm:text-base"
        >
          Home
        </NavLink>

        <NavLink
          to="/About"
          className="px-4 sm:px-6 py-2 rounded-3xl bg-slate-300 text-slate-600 hover:bg-slate-400 transition text-sm sm:text-base"
        >
          About
        </NavLink>

        <NavLink
          to="/products"
          className="px-4 sm:px-6 py-2 rounded-3xl bg-slate-300 text-slate-600 hover:bg-slate-400 transition text-sm sm:text-base"
        >
          Products
        </NavLink>

        <NavLink
          to="/admin"
          className="px-4 sm:px-6 py-2 rounded-3xl bg-slate-300 text-slate-600 hover:bg-slate-400 transition text-sm sm:text-base"
        >
          Admin
        </NavLink>

      </nav>
    </div>
  )
}

export default NavBar