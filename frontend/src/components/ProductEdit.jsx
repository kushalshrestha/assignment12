import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductEdit = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_BASE_URL +`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(import.meta.env.VITE_API_BASE_URL +`/products/${id}`, product);
      navigate("/products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2">
      <h2 className="mt-5">Edit Product</h2>
      <form onSubmit={updateProduct}>
        {/* id (disabled) */}
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="id">
            ID
          </label>
          <input
            className="form-control col-sm-6 bg-gray-100 text-sm"
            type="text"
            name="id"
            id="id"
            value={product.id}
            readOnly
          />
        </div>

        {/* title */}
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="title">
            Title
          </label>
          <input
            className="form-control col-sm-6 bg-gray-100 text-sm"
            type="text"
            name="title"
            id="title"
            required
            value={product.title}
            onChange={handleInputChange}
          />
        </div>

        {/* price */}
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="price">
            Price
          </label>
          <input
            className="form-control col-sm-6 bg-gray-100 text-sm"
            type="number"
            name="price"
            id="price"
            required
            value={product.price}
            onChange={handleInputChange}
          />
        </div>

        {/* quantity */}
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="form-control col-sm-6 bg-gray-100 text-sm"
            type="number"
            name="quantity"
            id="quantity"
            required
            value={product.quantity}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-outline-success btn-lg">
          Save
        </button>

        <Link to="/views-products" className="btn btn-outline-success btn-lg ms-1">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default ProductEdit;
