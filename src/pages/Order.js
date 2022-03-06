import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../userContext";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Order = () => {
  const { order } = useContext(UserContext);
  const [orderedList, setOrderedList] = useState({
    totalAmount: 0,
    products: [],
  });
  let navigate = useNavigate();

  useEffect(() => {
    let totalAmount = 0;
    let orderedItem = [];
    order.forEach((item) => {
      if (item.quantity !== 0) {
        totalAmount += item.totalBill;
        orderedItem.push({
          productId: item.id,
          quantity: item.quantity,
        });
      }
    });
    setOrderedList({
      totalAmount,
      products: orderedItem,
    });
  }, [order]);

  // console.log(orderedList);

  const completeOrder = () => {
    fetch("floating-stream-65303.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        totalAmount: orderedList.totalAmount,
        products: orderedList.products,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    navigate("/successOrder");
  };

  return (
    <div css={container}>
      <h1 className="text-center my-5">Order</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.map(
            (item) =>
              item.quantity !== 0 && (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    {item.price.toLocaleString("ja-JP", {
                      style: "currency",
                      currency: "JPY",
                    })}
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {item.totalBill.toLocaleString("ja-JP", {
                      style: "currency",
                      currency: "JPY",
                    })}
                  </td>
                </tr>
              )
          )}

          <tr>
            <td colSpan={3}>Amount</td>
            <td>
              {orderedList.totalAmount.toLocaleString("ja-JP", {
                style: "currency",
                currency: "JPY",
              })}
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              {orderedList.totalAmount ? (
                <Button onClick={completeOrder} style={{ width: "100%" }}>
                  Order
                </Button>
              ) : (
                <Button disabled style={{ width: "100%" }}>
                  Order
                </Button>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const container = css`
  margin: 10rem auto 0 auto;
  h1 {
    font-family: "Permanent Marker", cursive;
    text-align: center;
  }
  width: 90%;
  //Tablet Screen----------
  @media (min-width: 481px) {
    width: 500px;
  }
`;

export default Order;
