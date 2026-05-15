import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import {useProducts} from "../context/ProductsContext"
const ProductList = () => {
  const {products} = useProducts()

  
  return (
     <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
         
        />
      ))}
       
    </div>
    
  )
}

export default ProductList