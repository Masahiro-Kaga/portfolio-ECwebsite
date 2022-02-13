import { Accordion } from "react-bootstrap";
import ShowAllOrders from "../components/ShowAllOrders";
import StatusChanger from "../components/StatusChanger";

const AdminDashboard = () => {

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
          <StatusChanger></StatusChanger>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
           <ShowAllOrders></ShowAllOrders>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AdminDashboard;
