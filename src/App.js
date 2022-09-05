/* eslint-disable */

import "./App.css";
import Form from "./components/Form";
import Products from "./components/Products";
import { useState } from "react";
import uuid from "react-uuid";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [product, setproduct] = useState([]);


  //geting data from form

  const handleData = (datas) => {
    const newDatas = { id: uuidv4(), ...datas };
    console.log(newDatas)
    // setproduct([newDatas]);
    setproduct([...product, newDatas])
  };

  return (
    <>
      <div className="container">
        <Form handleData={handleData} />
      </div>
      <Products product={product} />
    </>
  );
}

export default App;
