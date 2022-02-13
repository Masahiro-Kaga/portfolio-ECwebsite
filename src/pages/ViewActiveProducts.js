import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../userContext";

const ViewActiveProducts = () => {
  const [products, setProducts] = useState([]);
  const { order, setOrder } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4001/products/retrieveAllActive")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);

  const addOrder = (product) => {
    const currentOrder = [ ...order ]
    const existingItem = currentOrder.find(order => order.productId === product._id);
    if(!existingItem){
      currentOrder.push({
        productId:product._id,
        quantity:1,
        productTotalBill:product.price
      });
    }else{
      existingItem.quantity++;
      existingItem.productTotalBill += product.price
    }
    setOrder(currentOrder);
    // console.log(existingItem)
  };
  
  // console.log(order)
  const removeOrder = (product) => {
    
    let currentOrder = [ ...order ];
    let existingItem = currentOrder.find(order => order.productId === product._id);
    if(!existingItem){
      return;
    }else if(existingItem.quantity === 1){
      currentOrder = currentOrder.filter(order => order.productId !== product._id)
    }else{
      existingItem.quantity--;
      existingItem.productTotalBill -= product.price
    }
    setOrder(currentOrder);
  }

  console.log(order)

  return (
    <>
      <h1 className="my-5 text-center">Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle>{product.description}</Card.Subtitle>
                <Card.Text>{product.price}</Card.Text>
                <Button className="mx-2" onClick={() => addOrder(product)}>
                  +
                </Button>
                {product.quantity === 0 
                ?
                <Button className="mx-2" disabled>-</Button>
                
                :
                <Button className="mx-2" onClick={() => removeOrder(product)}>-</Button>
                
                }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to={`/order`} className="btn btn-primary mx-2">
        Check Out
      </Link>
    </>
  );
};

export default ViewActiveProducts;
