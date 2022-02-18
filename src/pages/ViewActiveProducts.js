import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../userContext";

const ViewActiveProducts = () => {
  const { order, setOrder , user } = useContext(UserContext);

  useEffect(() => {
    fetch("https://shielded-forest-80023.herokuapp.com/products/retrieveAllActive")
      .then((res) => res.json())
      .then((data) => {
        let list = [];
        data.map((item) =>
          list.push({
            id: item._id,
            name: item.name,
            price: item.price,
            description:item.description,
            quantity: 0,
            totalBill: 0,
          })
        );
        setOrder(list);
      });
  }, [setOrder]);

  // console.log(orderedList);

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

  console.log(order);

  return (
    <>
      <h1 className="my-5 text-center">Products</h1>
      {user.id 
      ?
      <div className="text-center my-2">
        <Link to={`/order`} className="btn btn-primary mx-2">
          Check Out
        </Link>
      </div>
      :
      <div className="text-center my-2">
        <Link to={`/login`} className="btn btn-primary mx-2">
          Login
        </Link>
      </div>
    }
      <Row className="mx-2">
        {order.map((product) => (
          <Col key={product.id} className="my-2" xs={6} lg={3}>
            <Card>
              <Card.Img
                src={`https://source.unsplash.com/featured/?${product.name}`}
                style={{ height: "30vh", objectFit: "cover" }}
                
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle>{product.description}</Card.Subtitle>
                <Card.Text>{product.price.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'})}</Card.Text>
                <Button className="mx-2" onClick={() => addOrder(product)}>
                  +
                </Button>
                {product.quantity === 0 ? (
                  <Button className="mx-2" disabled>
                    -
                  </Button>
                ) : (
                  <Button className="mx-2" onClick={() => removeOrder(product)}>
                    -
                  </Button>
                )}
                <Row className="mt-4">
                  <Col>
                    <p>Quantity:{product.quantity}</p>
                  </Col>
                  <Col>
                    <p>Total:{product.totalBill.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'})}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ViewActiveProducts;
