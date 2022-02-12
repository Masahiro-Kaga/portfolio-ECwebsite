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
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/addProduct">Add Product</Nav.Link>
              <Nav.Link href="/updateProduct">Update Product</Nav.Link>
              <Nav.Link href="/enableProduct">Enable Product</Nav.Link>
              <Nav.Link href="/disableProduct">Disable Product</Nav.Link>
              <Nav.Link href="/viewActiveProducts">View Active Products</Nav.Link>
              <Nav.Link href="/adminDashboard">Admin Dashboard</Nav.Link>
              <Nav.Link href="/logout">logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
