import React, { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

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
      <h1 className="my-5 text-center">Home</h1>
      <h2 className="my-5 text-center">Today's Deal!</h2>
      <Card className="p-3 m-3 cardHighlight">
        <Row>
          <Col xs={6}>
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
          </Col>
          <Col xs={6}>
            <figure>
              {activeProducts.length !== 0 && (
                <Image
                  src={`https://source.unsplash.com/featured/?${activeProducts[randomProductIndex].name}`}
                  width="100%"
                ></Image>
              )}
            </figure>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Home;
