import React, { useState } from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router";
import UserContext from "../userContext";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { user } = useContext(UserContext);

  // console.log(localStorage.getItem("token"))

  const addProduct = (e) => {
    e.preventDefault();
    fetch("http://localhost:4001/products/createProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: productName,
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return user.id ? (
    <>
      <h1 className="my-5 text-center">Add Product</h1>
      <Form onSubmit={(e) => addProduct(e)}>
        <Form.Group className="m-3">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="m-3">
          Add Product
        </Button>
      </Form>
    </>
  ) : (
    <Navigate to="/login" replace={true}></Navigate>
  );
};

export default AddProduct;
