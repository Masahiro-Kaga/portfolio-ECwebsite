import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  // console.log(firstName,lastName,email,password,confirmPassword,mobileNo);

  const registerUser = (e) => {
    e.preventDefault();
    // console.log("Success");
    // console.log(firstName,lastName,email,password,confirmPassword,mobileNo);

    fetch("http://localhost:4001/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        mobileNo,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data._id) {
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
      });
  };

  return (
    <>
      <h1 className="my-5 text-center">Register</h1>
      <Form onSubmit={(e) => registerUser(e)}>
        <Form.Group className="m-3">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name..."
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name..."
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
        <Form.Group className="m-3">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Confirm Password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>MobileNo:</Form.Label>
          <Form.Control
            type="number"
            placeholder="MobileNo..."
            onChange={(e) => setMobileNo(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="m-3">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
