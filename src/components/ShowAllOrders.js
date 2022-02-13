import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import UserContext from "../userContext";

const ShowAllOrders = () => {
  const [totalOrders,setTotalOrders] = useState([]);
  const { products, setProducts } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4001/products/getAllProducts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

    fetch("http://localhost:4001/orders/allOrders", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTotalOrders(data));
  }, []);

  return (
    <>
      <h1 className="my-5 text-center">Admin Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total Price</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
            {totalOrders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.purchasedOn}</td>
              <td>
                {order.totalAmount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>
                {order.products.map((product) => (
                  <p key={product._id}>
                    {product._id}
                  </p>
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
