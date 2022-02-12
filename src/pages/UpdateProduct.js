import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router";
import { useParams } from "react-router-dom";
import UserContext from "../userContext";

const UpdateProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const { user } = useContext(UserContext);

  const { productId } = useParams();

  //   console.log(productId);

  // console.log(localStorage.getItem("token"))

  const updateProduct = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4001/products/updateProductInfo/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: productName,
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(
          <Row className="my-3">
            <Col xs={12} md={4}>
              <Card className="p-3 cardHighlight">
                <Card.Body>
                  <Card.Title>
                    <h2>Product Name : {data.name}</h2>
                    <Card.Text>Description : {data.description}</Card.Text>
                    <Card.Text>Price : {data.price}</Card.Text>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      });
  };

  useEffect(() => {
    fetch(`http://localhost:4001/products/retrieveSingleProduct/${productId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(
          <Row className="my-3">
            <Col xs={12} md={4}>
              <Card className="p-3 cardHighlight">
                <Card.Body>
                  <Card.Title>
                    <h2>Product Name : {data.name}</h2>
                    <Card.Text>Description : {data.description}</Card.Text>
                    <Card.Text>Price : {data.price}</Card.Text>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      });
    console.log(selectedProduct);
  }, []);

  return (
    <>
      <h1 className="my-5 text-center">Update Product</h1>
      <Form onSubmit={(e) => updateProduct(e)}>
        <Form.Group className="m-3">
          {selectedProduct}
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
  );
};

export default UpdateProduct;
