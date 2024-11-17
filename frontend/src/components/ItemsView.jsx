import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ItemsView({ searchQuery }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://amazon-in-task.onrender.com/getproducts");
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
      await axios.delete("https://amazon-in-task.onrender.com/deletedata/" + id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>

    <div className="d-flex justify-content-center align-items-center" style={{margin: "50px"}}>
      <div className="w-50 rounded p-3">
      <table className="table">
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
    
    </>
  );
}

export default ItemsView;
