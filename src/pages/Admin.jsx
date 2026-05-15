import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AddProduct from './AddProduct'

const Admin = () => {
  return (
    <div>
         <div>
        <h1 className='font-bold text-3xl text-center'>Admin Portal</h1>
    </div>
    <div>
       <Link to="/admin/new" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      > + Add Product
      </Link> 
      <AddProduct/>
    </div>
    <Outlet/>
    </div>
   
  )
}

export default Admin