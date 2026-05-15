import React from 'react'
import { useProducts } from '../context/ProductsContext'

const Search = () => {
    const {input, setInput} = useProducts()
  return (
   <div className="p-4 flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-md p-3 border rounded-lg shadow-sm"
      />
    </div>
  )
}

export default Search