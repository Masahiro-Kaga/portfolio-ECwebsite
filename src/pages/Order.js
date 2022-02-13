import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import UserContext from "../userContext";

const Order = () => {
  const { order } = useContext(UserContext);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalBill, setTotalBill] = useState(0);

  //   console.log(order);

  useEffect(() => {
    let tempTotalQuantity = 0;
    let tempTotalBill = 0;
    order.forEach((orderedProduct) => {
      tempTotalQuantity += orderedProduct.quantity;
      tempTotalBill += orderedProduct.productTotalBill;
    });
    setTotalQuantity(tempTotalQuantity);
    setTotalBill(tempTotalBill);
    console.log(order);
  }, []);

  const completeOrder = () => {
      console.log({
        totalAmount: totalBill,
        products: order
      })
    fetch("http://localhost:4001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        totalAmount: totalBill,
        products:order
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  //   console.log(totalQuantity);
  //   console.log(totalBill);

  return (
    <>
    <h1>Warning: still working on because it comes error if user is admin now.</h1>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: {totalBill}</p>
      <Button onClick={completeOrder}>Order</Button>
    </>
  );
};

export default Order;
