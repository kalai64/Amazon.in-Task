import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Addproduct() {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [asin, setAsin] = useState();
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post("http://localhost:8000/addproduct", {
          product_name: name,
          category,
          price,
          rating,
          ASIN: asin,
        })
        .then((res) => navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="w-50 rounded p-3">
          <h3>Add Product</h3>
          <form onSubmit={Submit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Select Category
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected>Select</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Rating
              </label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                ASIN
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setAsin(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
