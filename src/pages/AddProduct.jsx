import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext"

const AddProduct = () => {

    const { addProduct } = useProducts();
    const navigate = useNavigate();

    // Using UseId for unique id inputs
    const titleId = useId()
    const descriptionId = useId()
    const categoryId = useId()
    const priceId = useId()
    const imageId = useId()

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

        try {
            await addProduct(newProduct)

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
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }




    return (
        <div className="flex justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-xl font-bold mb-4" data-testid="add-product-title">Add Product</h2>

        {/* TITLE */}
        <label htmlFor={titleId}>Title</label>
        <input
          id={titleId}
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* DESCRIPTION */}
        <label htmlFor={descriptionId}>Description</label>
        <textarea
          id={descriptionId}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* CATEGORY */}
        <label htmlFor={categoryId}>Category</label>
        <input
          id={categoryId}
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* PRICE */}
        <label htmlFor={priceId}>Price</label>
        <input
          id={priceId}
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* IMAGE */}
        <label htmlFor={imageId}>Image URL</label>
        <input
          id={imageId}
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-50 bg-slate-600 text-white p-2 rounded-2xl"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
    );
};

export default AddProduct;