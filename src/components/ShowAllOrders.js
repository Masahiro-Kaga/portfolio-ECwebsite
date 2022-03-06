import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ShowAllOrders = () => {
  const [totalOrders, setTotalOrders] = useState([]);
  useEffect(() => {
    fetch("floating-stream-65303.herokuapp.com/orders/allOrders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTotalOrders(data));
  }, []);

  return (
    <>
      <h2 className="my-5 text-center">View all orders</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total Price</th>
            <th>Product ID</th>
          </tr>
        </thead>
        <tbody>
          {totalOrders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.purchasedOn.slice(0, 10)}</td>
              <td>
                {order.totalAmount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>
                {order.products.map((product) => (
                  <p key={product._id}>{product._id}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ShowAllOrders;
