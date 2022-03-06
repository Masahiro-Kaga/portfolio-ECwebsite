import { Accordion } from "react-bootstrap";
import ShowAllOrders from "../components/ShowAllOrders";
import StatusChanger from "../components/StatusChanger";
import AddProduct from "../components/AddProduct";
import { useState } from "react";

const AdminDashboard = () => {
  const [noticeAddedProduct, setNoticeAddedProduct] = useState("");
  return (
    <>
      <h1 className="text-center" style={{"margin":"10rem"}}>Admin Dashboard</h1>

      <Accordion style={{"margin":"3%"}}>
        {/* <Accordion defaultActiveKey="0"> */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Activate/Archive/Update Products</Accordion.Header>
          <Accordion.Body>
            <StatusChanger noticeAddedProduct={noticeAddedProduct}></StatusChanger>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Add Products</Accordion.Header>
          <Accordion.Body>
            <AddProduct setNoticeAddedProduct={setNoticeAddedProduct}></AddProduct>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>View All Orders</Accordion.Header>
          <Accordion.Body>
            <ShowAllOrders></ShowAllOrders>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AdminDashboard;
