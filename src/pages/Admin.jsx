import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AddProduct from './AddProduct'


const Admin = () => {
  return (
     <div className="min-h-screen bg-slate-50 py-10">

      
      <h1 className="font-bold text-3xl text-center mb-8">
        Admin Portal
      </h1>

      {/*  Add Product */}
      <div className="flex justify-center">
        <Link
          to="/admin/new"
          className="w-64 sm:w-72 bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition duration-200"
        >
          <div className="text-4xl font-bold text-blue-600">+</div>
          <p className="mt-2 font-semibold text-gray-700">
            Add New Product
          </p>
        </Link>
      </div>
    <Outlet/>
    </div>
   
  )
}

export default Admin