import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useProducts} from "../context/ProductsContext"

const AddProduct = () => {
  const navigate = useNavigate();

//   state to hold form inputs
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: ""
  });

  const [loading, setLoading] = useState(false);

//   Function to handle change in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
// function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newProduct = {
      ...formData,
      id: Date.now()
    };

    
      // reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        image: ""
      });

      // go back to products page
      navigate("/products");

   
  };

  return (
    <div className="flex justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-xl font-bold mb-4">Add Product</h2>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 mb-3 border rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;