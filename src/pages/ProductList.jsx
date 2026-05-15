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
        <div>
      {/* Search */}
      <Search />

      {/* Toggle Button */}
      <div className="flex justify-center p-4">
        <button
          onClick={() => setShowCategories((prev) => !prev)}
          className="px-5 py-2 bg-black text-white rounded"
        >
          {showCategories ? "Hide Categories" : "Categories"}
        </button>
      </div>

      {/* Category Buttons (toggle view) */}
      {showCategories && (
        <div className="flex gap-3 justify-center p-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border rounded ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {cat}
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