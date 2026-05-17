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
    try {
    const res = await fetch(API);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    setProducts(data);

  } catch (error) {
    console.log(error.message);
  
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD product...CREATE
  const addProduct = async (product) => {
    try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!res.ok) {
      throw new Error("Failed to add product");
    }

    const newProduct = await res.json();

    // only update state if request succeeds..pessimistic rendering
    setProducts((prev) => [...prev, newProduct]);

  } catch (error) {
    console.log(error.message);
  }
  };

  // DELETE product...DELETE
  const deleteProduct = async (id) => {
    try {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }

    // only update state if delete succeeds..pessimistic rendering
    setProducts((prev) => prev.filter((product) => product.id !== id));
  } catch (error) {
    console.log(error.message);
  }
};

  // UPDATE product..UPDATE
  const updateProduct = async (id, updatedData) => {
     try {
    const res = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      throw new Error("Failed to update product");
    }

    const updatedProduct = await res.json();

    setProducts((prev) =>
      prev.map((product) => (product.id ===  id ? updatedProduct : product))
    );
  } catch (error) {
    console.log(error.message);
  }
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