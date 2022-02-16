import { Accordion } from "react-bootstrap";
import ShowAllOrders from "../components/ShowAllOrders";
import StatusChanger from "../components/StatusChanger";
import AddProduct from "../components/AddProduct";

const AdminDashboard = () => {
  return (
    <>
      <h1 className="my-5 text-center">Admin Dashboard</h1>

      <Accordion>
        {/* <Accordion defaultActiveKey="0"> */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Activate/Archive/Update Products</Accordion.Header>
          <Accordion.Body>
            <StatusChanger></StatusChanger>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Add Products</Accordion.Header>
          <Accordion.Body>
            <AddProduct></AddProduct>
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
