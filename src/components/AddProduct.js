import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const AddProduct = (props) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    fetch("floating-stream-65303.herokuapp.com/products/createProduct", {
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
      .then((data) => {
        console.log(data);
        if (data._id) {
          Swal.fire({
            icon: "success",
            title: "Add product Success!",
            text: "Check the renewed product list.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Add product Failed",
            text: "Please try to Add products.",
          });
        }
        setProductName("");
        setDescription("");
        setPrice("");
        props.setNoticeAddedProduct(productName);
      });
  };

  return (
    <>
      <h2 className="my-5 text-center">Add Product</h2>
      <Form onSubmit={(e) => addProduct(e)}>
        <Form.Group className="m-3">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="m-3">
          Add Product
        </Button>
      </Form>
    </>
  ) 
};

export default AddProduct;
