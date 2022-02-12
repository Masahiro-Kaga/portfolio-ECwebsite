import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    // console.log(email,password)
    fetch("http://localhost:4001/users/login", {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('token',data.accessToken);
        if (data.accessToken) {
          Swal.fire({
            icon: "success",
            title: "Registration Sucecss!",
            text: "Thank you for registration.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: "Please try to register.",
          });
        }
      })
  };

  return (
    <>
      <h1 className="my-5 text-center">Login</h1>
      <Form onSubmit={(e) => loginUser(e)}>
        <Form.Group className="m-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password Name..."
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="m-3">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
