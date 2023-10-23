import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get(
      import.meta.env.VITE_API_BASE_URL + "/products",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    if (result.status === 302) {
      setProducts(result.data);
    }

    setProducts(result.data);
  };

  const handleDelete = async (id) => {
    alert(`Are you Sure You want to Delete ${id} row`);
    await axios.delete(import.meta.env.VITE_API_BASE_URL + `/products/${id}`);
    loadProducts();
  };

  return (
    <section>
      
      <table className="table table-border table-hover shadow">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th colSpan={"3"} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="container">
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td style={{ width: "80px" }}>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>

              {/* Actions */}
              <td className="mx-2" style={{ width: "60px" }}>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-info"
                  style={{ width: "60px" }}
                >
                  <FaEye />
                </Link>
              </td>

              {/* update Product */}
              <td className="mx-2" style={{ width: "60px" }}>
                <Link
                  to={`/product-edit/${product.id}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>

              {/* Delete Product */}
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                  style={{ width: "60px" }}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr/>
      <Link to={`/product/add`} className="btn btn-warning">
        Add Product
      </Link>
    </section>
  );
};

export default ProductList;
