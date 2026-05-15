import React from 'react'

const ProductCard = ({product, onDelete}) => {
     return (
    <div className='border p-3 rounded shadow w-full flex flex-col gap-4'>
      <h2>{product.title}</h2>
      <div className='flex justify-center border border-gray-100'>
         <img className=' w-1/2 ' src={product.image} alt={product.name} />
      </div>

     <div className='mt-6'>
      <h2 className=''>{product.category}</h2>
      <p>${product.price}</p>
      <button className='bg-blue-200 text-white px-3 py-1'>Add to Cart</button>
     </div>
     

    </div>
  );
}

export default ProductCard