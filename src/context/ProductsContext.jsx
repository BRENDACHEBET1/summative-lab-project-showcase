import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

// custom hook
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const API = "http://localhost:3001/products";

  // GET products
  const fetchProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD product
  const addProduct = async (product) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const newProduct = await res.json();

    setProducts((prev) => [...prev, newProduct]);
  };

  // DELETE product
  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // UPDATE product
  const updateProduct = async (id, updatedData) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT", // or PATCH
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const updatedProduct = await res.json();

    setProducts((prev) =>
      prev.map((p) => (p.id === id ? updatedProduct : p))
    );
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};