import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const [activeProducts, setActiveProducts] = useState([]);
  const [randomProductIndex, setRandomProductIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4001/products/retrieveAllActive", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setActiveProducts(data);
        setRandomProductIndex(Math.floor(Math.random() * data.length));
      });
  }, []);

  // console.log(randomProductIndex)
  // console.log(activeProducts);
  // console.log(activeProducts.length);

  return (
    <>
      <h1>Home</h1>
      <h2>Promo Item!!</h2>
      <Row className="my-3">
        <Col xs={12} md={4}>
          <Card className="p-3 cardHighlight">
            {activeProducts.length !== 0 && (
              <Card.Body>
                <h2>
                  Product Name : {activeProducts[randomProductIndex].name}
                </h2>
                <Card.Text>
                  Description : {activeProducts[randomProductIndex].description}
                </Card.Text>
                <Card.Text>
                  Price : {activeProducts[randomProductIndex].price}
                </Card.Text>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
