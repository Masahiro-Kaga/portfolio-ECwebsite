/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeProducts, setActiveProducts] = useState([]);
  const [randomProductIndex, setRandomProductIndex] = useState([]);
  const [threeAndMoreArray, setThreeAndMoreArray] = useState(false);

  useEffect(() => {
    fetch(
      "https://floating-stream-65303.herokuapp.com/products/retrieveAllActive",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setActiveProducts(data);
        let randoms = [];
        let min = 0;
        let max = data.length;
        if (data.length >= 3) {
          setThreeAndMoreArray(true);
        } else {
          return;
        }
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

  // console.log(activeProducts);
  // console.log(randomProductIndex);

  if(!threeAndMoreArray){
    console.log("No added product yet.")
  }


  return (
    <Fragment>
      {threeAndMoreArray ? (
        <>
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
              <Col key={index} className="my-5" xs={12} lg={4}>
                <Card border="light">
                  <Card.Img
                    src={`https://source.unsplash.com/featured/?${activeProducts[index].name}`}
                    style={{
                      height: "30vh",
                      objectFit: "cover",
                      borderRadius: "15px 50px",
                    }}
                  />
                  <Card.Body
                    className="px-4"
                    style={{
                      backgroundColor: "rgb(15,21,42)",
                      color: "white",
                      borderRadius: "15px 50px",
                    }}
                  >
                    <div css={cardSeparator}>
                      <Card.Title>{activeProducts[index].name}</Card.Title>
                      <Card.Text>
                        {activeProducts[index].price.toLocaleString("ja-JP", {
                          style: "currency",
                          currency: "JPY",
                        })}
                      </Card.Text>
                    </div>
                    <Card.Subtitle>
                      {activeProducts[index].description}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Link to="/viewActiveProducts">
            <h1 css={features}>
              And more...
              <img src="images/product_icon.png" alt="product icon"></img>
            </h1>
          </Link>
        </>
      ) : (
        // <>
        //   <h1 style={{ margin: "10rem 0 0" , textAlign:"center"}}>No added product yet.</h1>
        //   <br></br>
        //   <p style={{ textAlign:"center"}}>1 Register first user with Postman.</p>
        //   <p style={{ textAlign:"center"}}>2 Change status of this user to isAdmin=true with Mongodb.</p>
        //   <p style={{ textAlign:"center"}}>3 Add product at least three.</p>
        //   <p style={{ textAlign:"center"}}>4 Refresh page.</p>
        // </>
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <BallTriangle color="black" height={80} width={80} />
          {/* https://github.com/mhnpd/react-loader-spinner */}
        </div>
      )}
    </Fragment>
  );
};

const carouselImg = css`
  height: 600px;
  object-fit: cover;
  @media (min-width: 481px) {
    /* height: calc(100vh - 64px); */
    height: 100vh;
  }
`;

const deals = css`
  position: absolute;
  right: 15%;
  left: 15%;
  top: calc(300px / 2);
  text-align: center;
  color: white;
  /* mix-blend-mode:normal; */
  z-index: 10;
  @media (min-width: 481px) {
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

const cardSeparator = css`
  display: flex;
  justify-content: space-between;
`;

export default Home;
