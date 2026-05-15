import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from "../context/ProductsContext"
import Search from '../components/Search';
const ProductList = () => {
    const [showCategories, setShowCategories] = useState(false);
    const { filteredProducts, input, selectedCategory, setSelectedCategory} = useProducts()

     const categories = ["all", "groceries", "beauty", "fragrances"];

    return (
        <div className='min-h-screen bg-slate-200 py-10'>
      {/* Searc component rendered on top */}
      <Search />

      {/* Toggle Button */}
      <div className="flex justify-center p-4">
        <button
          onClick={() => setShowCategories((prev) => !prev)}
          className="px-5 py-2 bg-slate-600 rounded-2xl text-white rounded"
        >
          {showCategories ? "Hide Categories" : "Categories"}
        </button>
      </div>

      {/* Category Buttons  */}
      {showCategories && (
        <div className="flex gap-3 justify-center p-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border rounded ${
                selectedCategory === category
                  ? "bg-slate-800 text-white border-slate-800 rounded-2xl"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 rounded-2xl"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 p-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : input ? (
        <p className="text-center text-red-500 mt-4">
          Product not found
        </p>
      ) : null}
    </div>
  );
}

export default ProductList