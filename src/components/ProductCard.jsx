import React from 'react'
import { useProducts } from '../context/ProductsContext';
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product }) => {
  const { deleteProduct } = useProducts()
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    await deleteProduct(id);
  };
  return (
    <div className='border border-gray-200 p-3 rounded-2xl shadow w-full flex flex-col gap-4 relative bg-white'>

      {/* Product title */}
      <h2 className='font-semibold'>{product.title}</h2>

      {/* Image */}
      <div className='w-full h-48 sm:h-52 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center border border-gray-100'>
        <img className='w-full h-full object-contain p-3 transition-transform duration-300 hover:scale-105' src={product.image} alt={product.name} />
      </div>

      {/* Product setails */}
      <div className='mt-2'>
        <h2 className='text-gray-600'>{product.category}</h2>
        <p className='font-bold'>${product.price}</p>
      </div>


      <div className='flex justify-end items-center gap-4 mt-auto pt-3 '>

        {/* Edit button, opens in admin page */}
        <button
          onClick={() => navigate(`/admin/edit/${product.id}`)}
          className='p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition'
        >
          <FaEdit size={16} />
        </button>

        {/* Delete button */}
        <button
          onClick={() => handleDelete(product.id)}
          className='p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition'
        >
          <FaTrash size={16} />
        </button>

      </div>
    </div>



  );
}

export default ProductCard