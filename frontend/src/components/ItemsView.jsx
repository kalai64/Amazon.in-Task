import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ItemsView({ searchQuery }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getproducts");
      setItems(res.data.data);
      setFilteredItems(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery]);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8000/deletedata/" + id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>

    <div className="d-flex justify-content-center align-items-center" style={{margin: "50px"}}>
      <div className="w-50 rounded p-3">
      <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Category</th>
              <th scope="col">ASIN</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredItems.map((e,i)=>{
                return <tr key={i}>
                  <td>{i+1}</td>
                  <td>{e.product_name}</td>
                  <td>{e.price}</td>
                  <td>{e.rating}</td>
                  <td>{e.category}</td>
                  <td>{e.ASIN}</td>
                  <td>
                  <Link to={`/item/${e._id}`} className="btn btn-primary">
                        View
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(e._id)}
                      >
                        Delete
                      </button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>

    </div>
    




      {/* <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {filteredItems.map((e, i) => {
              return (
                <div className="col mb-5" key={i}>
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{e.product_name}</h5>$
                        {e.price}
                      </div>
                    </div>
                    <div className=" card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <Link to={`/item/${e._id}`} className="btn btn-primary">
                        View
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(e._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default ItemsView;
