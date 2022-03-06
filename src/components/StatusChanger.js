import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const StatusChanger = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [changedStatusItem, setChangedStatusItem] = useState({});

  useEffect(() => {
    fetch("http://localhost:4001/products/getAllProducts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllProducts(
          data.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td className="text-center">
                {product.isActive ? (
                  <Button
                    onClick={() => changeStatusHandler(product)}
                    variant="danger"
                    className="my-2 mx-2 m-auto"
                  >
                    Archive
                  </Button>
                ) : (
                  <Button
                    onClick={() => changeStatusHandler(product)}
                    variant="success"
                    className="my-2 mx-2 m-auto"
                  >
                    Activate
                  </Button>
                )}
                <Link
                  to={`/updateProduct/${product._id}`}
                  className="btn btn-primary mx-2"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))
        );
      });
    // console.log(changedStatusItem);
  }, [changedStatusItem,props.noticeAddedProduct]);

  const changeStatusHandler = (activateStatus) => {
    fetch(`http://localhost:4001/products/changeStatus/${activateStatus._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setChangedStatusItem(data);
      });
  };

  return (
    <>
      <h2 className="my-5 text-center">Activate/Archive/Update Products</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{allProducts}</tbody>
      </Table>
    </>
  );
};

export default StatusChanger;
