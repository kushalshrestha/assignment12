import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductAdd = () => {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: 0, // Assuming price is a number
    quantity: 0, // Assuming quantity is a number
  });

  const { title, price, quantity } = product;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_API_BASE_URL + "/products", product);
      navigate("/products");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2">
      <form onSubmit={(e) => saveProduct(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="title">
            Title
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="price">
            Price
          </label>
          <input
            className="form-control col-sm-6"
            type="number"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="form-control col-sm-6"
            type="number"
            name="quantity"
            id="quantity"
            required
            value={quantity}
            onChange={(e) => handleInputChange(e)}
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

export default ProductAdd;
