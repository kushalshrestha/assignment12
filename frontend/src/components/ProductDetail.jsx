import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductDetail = () => {
    const { id } = useParams();
  
    const [product, setProduct] = useState({
      title: "",
      name: "",
    });
  
    useEffect(() => {
      loadProduct();
    }, []);
  
    const loadProduct = async () => {
      const result = await axios.get(import.meta.env.VITE_API_BASE_URL +`/products/${id}`);
      setProduct(result.data);
    };
  
    return (
      <section className="shadow" >
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <h1>Id: {product.id}</h1>
                  <h1>Title: {product.title}</h1>
                  <h1>Price: {product.price}</h1>
                  <h1>Quantity: {product.quantity}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductDetail;