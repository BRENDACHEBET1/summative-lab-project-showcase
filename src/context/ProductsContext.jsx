import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

// custom hook
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
 

  const API =  import.meta.env.VITE_API_URL;
  console.log("API:", API);

  // GET products..READ
  const fetchProducts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD product...CREATE
  const addProduct = async (product) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const newProduct = await res.json();

    setProducts((prev) => [...prev, newProduct]);
  };

  // DELETE product...DELETE
  const deleteProduct = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // UPDATE product..UPDATE
  const updateProduct = async (id, updatedData) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PATCH", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const updatedProduct = await res.json();


    setProducts((prev) =>
      prev.map((p) => (p.id === id ? updatedProduct : p))
    );
  };

//   Filtering
 const [input, setInput] = useState("")
 const [selectedCategory, setSelectedCategory] = useState("all");

const filteredProducts = products
  .filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  )
  .filter((product) =>
    selectedCategory === "all"
      ? true
      : product.category === selectedCategory
  );
  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
        filteredProducts, 
        setInput,
        input,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};