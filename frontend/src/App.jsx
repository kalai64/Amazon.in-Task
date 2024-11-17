import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Addproduct from "./components/Addproduct";
import ItemsView from "./components/ItemsView";
import Item from "./components/Item";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<ItemsView searchQuery={searchQuery} />} />
          <Route path="/add" element={<Addproduct />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
