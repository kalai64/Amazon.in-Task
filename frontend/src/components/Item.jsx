import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [ASIN, setASIN] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getiditem/" + id);
      setProduct_name(res.data.data.product_name);
      setPrice(res.data.data.price);
      setRating(res.data.data.rating);
      setASIN(res.data.data.ASIN);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">ASIN: {ASIN}</div>
              <h1 className="display-5 fw-bolder">{product_name}</h1>
              <div className="fs-5 mb-5">
                <span>${price}</span>
              </div>
              <p>Rating: {rating}</p>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                  style={{ maxwidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Item;
