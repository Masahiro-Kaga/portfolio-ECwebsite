import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNavBar = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-nav-bar"></Navbar.Toggle>
          <Navbar.Collapse id="basic-nav-bar">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
              <Nav.Link href="/AddProduct">Add Product</Nav.Link>
              <Nav.Link href="/EnableProduct">Enable Product</Nav.Link>
              <Nav.Link href="/DisableProduct">Disable Product</Nav.Link>
              <Nav.Link href="/ViewActiveProducts">View Active Products</Nav.Link>
              <Nav.Link href="/AdminDashboard">Admin Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
