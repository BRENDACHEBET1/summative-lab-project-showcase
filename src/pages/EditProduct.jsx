import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, updateProduct } = useProducts();

  const product = products.find((product) => product.id == 1);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await updateProduct(id, formData);

    navigate("/products");
  };

  return (
    <div className="flex justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
      >
        <h2 className="text-xl font-bold mb-4">
          Edit Product
        </h2>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;