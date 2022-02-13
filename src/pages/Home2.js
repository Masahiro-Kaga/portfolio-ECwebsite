// 失敗 1 ----------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  // const [activeProducts, setActiveProducts] = useState([]);
  const [randomProductIndex, setRandomProductIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4001/products/retrieveAllActive", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setActiveProducts(
        //   <>
        //     <h2>Product Name : {activeProducts[0]}</h2>
        //     <Card.Text>Description : {activeProducts[0]}</Card.Text>
        //     <Card.Text>Price : {activeProducts[0]}</Card.Text>
        //   </>
        // );
      });
  }, []);

  // setRandomProductIndex(Math.floor(Math.random() * activeProducts.length));
  // console.log(activeProducts);
  // const len = Math.floor(Math.random() * activeProducts.length);

  // console.log(activeProducts);

  return (
    <>
      <h1>Home</h1>
      <h2>Promo Item!!</h2>
      <Row className="my-3">
        <Col xs={12} md={4}>
          <Card className="p-3 cardHighlight">
            <Card.Body>
              {/* <Card.Title>{activeProducts}</Card.Title> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;

// 失敗２------------------------------------------------------------------------------------

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
            <Card.Body>
              <h2>Product Name : {activeProducts[randomProductIndex].name}</h2>
              <Card.Text>Description : {activeProducts[randomProductIndex].description}</Card.Text>
              <Card.Text>Price : {activeProducts[randomProductIndex].price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;


//成功１：activeProducts.length !== 0 &&　がミソ。------------------------------------------

import React, { useEffect, useState } from "react";
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
      });
  }, []);

  // setRandomProductIndex(Math.floor(Math.random() * activeProducts.length));
  // console.log(activeProducts);
  // const len = Math.floor(Math.random() * activeProducts.length);

  console.log(activeProducts);
  console.log(activeProducts.length);
  
  return (
    <>
      <h1>Home</h1>
      <h2>Promo Item!!</h2>
      <Row className="my-3">
        <Col xs={12} md={4}>
          <Card className="p-3 cardHighlight">
            <Card.Body>
            {activeProducts.length !== 0 &&
              activeProducts.map((item) => (
                <>
                  <h2>Product Name : {item.name}</h2>
                  <Card.Text>Description : {item.description}</Card.Text>
                  <Card.Text>Price : {item.price}</Card.Text>
                </>
                  ))}
                  </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;

// なぜかactiveProducts.length !== 0 && がなくてもできた。------------------------------------------

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
      });
  }, []);

  // setRandomProductIndex(Math.floor(Math.random() * activeProducts.length));
  // console.log(activeProducts);
  // const len = Math.floor(Math.random() * activeProducts.length);

  console.log(activeProducts);
  console.log(activeProducts.length);
  
  return (
    <>
      <h1>Home</h1>
      <h2>Promo Item!!</h2>
      <Row className="my-3">
        <Col xs={12} md={4}>
          <Card className="p-3 cardHighlight">
            <Card.Body>
            {activeProducts.map((item) => (
                <Fragment key={item._id}>
                  <h2>Product Name : {item.name}</h2>
                  <Card.Text>Description : {item.description}</Card.Text>
                  <Card.Text>Price : {item.price}</Card.Text>
                </Fragment>
                  ))}
                  </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;


// 成功２：useStateでロード時に初期値をちゃんと入れて、<h2>Product Name : {activeProducts[randomProductIndex].name}</h2> をレンダリングできない（nameありません）を防ぐ、レンダリングできない状況を防ぐ。------------------------------------------

import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Home = () => {
  const [activeProducts, setActiveProducts] = useState([{
    name:"",
    description:"",
    price:0
  }]);
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
            <Card.Body>
              <h2>Product Name : {activeProducts[randomProductIndex].name}</h2>
              <Card.Text>Description : {activeProducts[randomProductIndex].description}</Card.Text>
              <Card.Text>Price : {activeProducts[randomProductIndex].price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;




