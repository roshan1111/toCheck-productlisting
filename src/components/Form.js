import React from "react";
import { useState } from "react";

export default function Form({handleData}) {
  const [data, setData] = useState({
    title: "",
    price: "",
    category: "men",
    description: "",
  });
  //submit handler
  const submitHandle = (event) => {
    event.preventDefault();
    handleData(data);

    setData({ title: "", price: "", category: "men", description: "" });
  };

  //onchange of input field handler
  const handleChange = (event) => {
    const fieldName = event.target.name;
    setData((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };


  return (
    <>
      <div className="form">
        <form action="" onSubmit={submitHandle}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={data.title}
          />
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            value={data.price}
          />
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            value={data.category}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="all">All</option>
          </select>
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={data.description}
          ></textarea>
          <div className="button">
            <button id="btn">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
}
