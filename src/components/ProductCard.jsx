import React from 'react'
import { useProducts } from '../context/ProductsContext';
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ProductCard = ({product}) => {
    const {deleteProduct} = useProducts()
    const navigate = useNavigate()

    const handleDelete = () =>{
        deleteProduct(product.id)
    }
     return (
    <div className='border p-3 rounded shadow w-full flex flex-col gap-4'>
      <button onClick={handleDelete} className='relative rounded shadow flex flex-col gap-4'>
         <FaTrash size={15} />
      </button>
      <h2>{product.title}</h2>
      <div className='flex justify-center border border-gray-100'>
         <img className=' w-1/2 ' src={product.image} alt={product.name} />
      </div>

     <div className='mt-6'>
      <h2 className=''>{product.category}</h2>
      <p>${product.price}</p>
      <button className='bg-blue-200 text-white px-3 py-1'>Add to Cart</button>
      <button onClick={() => navigate(`/admin/edit/${product.id}`)}
       className="relative top-2 right-10 text-blue-600"
     >
    <FaEdit />
    </button>
      
     </div>
     

    </div>
  );
}

export default ProductCard