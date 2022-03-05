import React, { Fragment, useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [activeProducts, setActiveProducts] = useState([]);
  const [randomProductIndex, setRandomProductIndex] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/products/retrieveAllActive", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setActiveProducts(data);
        let randoms = [];
        let min = 0;
        let max = data.length;
        function intRandom(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }

        for (let i = min; i <= 2; i++) {
          while (true) {
            let tmp = intRandom(min, max);
            if (!randoms.includes(tmp)) {
              randoms.push(tmp);
              break;
            }
          }
        }
        setRandomProductIndex(randoms);
      });
  }, []);
  console.log(activeProducts);
  console.log(randomProductIndex);
  return (
    <Fragment>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://source.unsplash.com/featured/?nature`}
            alt="First slide"
            css={carouselImg}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://source.unsplash.com/featured/?travel`}
            alt="Second slide"
            css={carouselImg}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://source.unsplash.com/featured/?worldheritage`}
            alt="Third slide"
            css={carouselImg}
          />
        </Carousel.Item>
      </Carousel>
      <h1 css={deals}>
        A challenge to visit worlds with nice GEAR
        <br />
      </h1>
      <h1 css={features}>Features</h1>
      <Row className="mx-2">
        {randomProductIndex.map((index) => (
          <Col key={index} className="my-2" xs={12} lg={4}>
            <Card>
              <Card.Img
                src={`https://source.unsplash.com/featured/?${activeProducts[index].name}`}
                style={{ height: "30vh", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{activeProducts[index].name}</Card.Title>
                <Card.Subtitle>
                  {activeProducts[index].description}
                </Card.Subtitle>
                <Card.Text>
                  {activeProducts[index].price.toLocaleString("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/viewActiveProducts"><h1 css={features}>And more...</h1></Link>
      
    </Fragment>
  );
};

const carouselImg = css`
  height: 300px;
  object-fit: cover;
  @media (min-width: 769px) {
    height: calc(100vh - 64px);
  }
`;

const deals = css`
  position: absolute;
  right: 15%;
  left: 15%;
  top: calc(300px / 2);
  text-align: center;
  color: white;
  z-index: 10;
  @media (min-width: 769px) {
    top: 50%;
  }
  a {
    font-size: 30px;
  }
`;

const features = css`
  text-align: center;
  margin: 10rem auto;
  font-family: "Permanent Marker", cursive;
`;

// import React, { useEffect, useState } from "react";
// import { Card, Col, Image, Row } from "react-bootstrap";

// const Home = () => {
//   const [activeProducts, setActiveProducts] = useState([]);
//   const [randomProductIndex, setRandomProductIndex] = useState(0);
//   useEffect(() => {
//     fetch("http://localhost:4001/products/retrieveAllActive", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setActiveProducts(data);
//         setRandomProductIndex(Math.floor(Math.random() * data.length));
//       });
//   }, []);

//   // console.log(randomProductIndex)
//   // console.log(activeProducts);
//   // console.log(activeProducts.length);

//   return (
//     <>
//       <h1 className="my-5 text-center">Home</h1>
//       <h2 className="my-5 text-center">Today's Deal!</h2>
//       <Card className="p-3 m-3 cardHighlight">
//         <Row>
//           <Col xs={6}>
//             {activeProducts.length !== 0 && (
//               <Card.Body>
//                 <h2>
//                   Product Name : {activeProducts[randomProductIndex].name}
//                 </h2>
//                 <Card.Text>
//                   Description : {activeProducts[randomProductIndex].description}
//                 </Card.Text>
//                 <Card.Text>
//                   Price : {activeProducts[randomProductIndex].price}
//                 </Card.Text>
//               </Card.Body>
//             )}
//           </Col>
//           <Col xs={6}>
//             <figure>
//               {activeProducts.length !== 0 && (
//                 <Image
//                   src={`https://source.unsplash.com/featured/?${activeProducts[randomProductIndex].name}`}
//                   width="100%"
//                 ></Image>
//               )}
//             </figure>
//           </Col>
//         </Row>
//       </Card>
//     </>
//   );
// };

export default Home;
