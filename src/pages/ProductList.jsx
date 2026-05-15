import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";
import { Outlet } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });

    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
     <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={deleteProduct}
        />
      ))}
       
    </div>
    
  )
}

export default ProductList