import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../userContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ViewActiveProducts = () => {
  const { order, setOrder, user } = useContext(UserContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("floating-stream-65303.herokuapp.com/products/retrieveAllActive")
      .then((res) => res.json())
      .then((data) => {
        let list = [];
        data.map((item) =>
          list.push({
            id: item._id,
            name: item.name,
            price: item.price,
            description: item.description,
            quantity: 0,
            totalBill: 0,
          })
        );
        setOrder(list);
      });
  }, [setOrder]);

  const addOrder = (product) => {
    let existingItem = order.find((order) => order.id === product.id);
    existingItem.quantity++;
    existingItem.totalBill = existingItem.price * existingItem.quantity;
    let tempList = [];
    order.forEach((item) => {
      if (item.id === existingItem.id) {
        tempList.push(existingItem);
      } else {
        tempList.push(item);
      }
    });
    setOrder(tempList);
  };

  // console.log(order)
  const removeOrder = (product) => {
    let existingItem = order.find((order) => order.id === product.id);
    existingItem.quantity--;
    existingItem.totalBill = existingItem.price * existingItem.quantity;
    let tempList = [];
    order.forEach((item) => {
      if (item.id === existingItem.id) {
        tempList.push(existingItem);
      } else {
        tempList.push(item);
      }
    });
    setOrder(tempList);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ fontFamily: "Permanent Marker", margin: "15rem auto" }}
      >
        Products
      </h1>
      {user.id ? (
        <div className="text-center my-3">
          <Link to={`/order`} className="btn btn-primary mx-2">
            <AddShoppingCartIcon fontSize="large"></AddShoppingCartIcon>
            Check Out
          </Link>
        </div>
      ) : (
        <div className="text-center my-3">
          <Button className="btn btn-primary mx-2" disabled>
            <AddShoppingCartIcon fontSize="large"></AddShoppingCartIcon>
            Check Out
          </Button>
        </div>
      )}
      <Row className="mx-2">
        {order.map((product) => (
          <Col key={product.id} className="my-5" xs={12} sm={6} md={4} lg={3}>
            <Card border="light">
              <Card.Img
                src={`https://source.unsplash.com/featured/?${product.name}`}
                style={{
                  height: "30vh",
                  objectFit: "cover",
                  borderRadius: "15px 50px",
                }}
              />
              <Card.Body
                style={{
                  backgroundColor: "rgb(15,21,42)",
                  color: "white",
                  borderRadius: "15px 50px",
                }}
                className="px-4"
              >
                <div css={cardSeparator}>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.price.toLocaleString("ja-JP", {
                      style: "currency",
                      currency: "JPY",
                    })}
                  </Card.Text>
                </div>
                <Card.Subtitle>{product.description}</Card.Subtitle>
                <div css={buttonSeparator}>
                  {user.id ? (
                    <Button className="mx-2" onClick={() => addOrder(product)}>
                      +
                    </Button>
                  ) : (
                    <Button className="mx-2" onClick={handleShow}>
                      +
                    </Button>
                  )}

                  {product.quantity === 0 ? (
                    <Button className="mx-2" disabled>
                      -
                    </Button>
                  ) : (
                    <Button
                      className="mx-2"
                      onClick={() => removeOrder(product)}
                    >
                      -
                    </Button>
                  )}
                </div>
                <Row className="mt-4">
                  <Col>
                    <p>Quantity:{product.quantity}</p>
                  </Col>
                  <Col>
                    <p>
                      Total:
                      {product.totalBill.toLocaleString("ja-JP", {
                        style: "currency",
                        currency: "JPY",
                      })}
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} css={modal}>
        <Modal.Header closeButton>
          <Modal.Title>Sorry...</Modal.Title>
        </Modal.Header>
        <Modal.Body>You need to Register and Login if you want to enjoy shopping!</Modal.Body>
      </Modal>
    </>
  );
};

const cardSeparator = css`
  display: flex;
  justify-content: space-between;
`;

const buttonSeparator = css`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  button {
    width: 30%;
  }
`;

const modal = css`
  position: fixed;
  top: 30vh;
`;

export default ViewActiveProducts;
