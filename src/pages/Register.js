/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../userContext";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [isActive, setIsActive] = useState(false);

  const { user } = useContext(UserContext);
  // const context = useContext(UserContext);
  
  // console.log(context);
  // console.log(firstName,lastName,email,password,confirmPassword,mobileNo);

  const registerUser = (e) => {
    e.preventDefault();
    // console.log("Success");
    // console.log(firstName,lastName,email,password,confirmPassword,mobileNo);

    fetch("floating-stream-65303.herokuapp.com/users/", {
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

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      mobileNo.length === 11 &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [firstName, lastName, email, mobileNo, password, confirmPassword]);

  return user.id ? (
    <Navigate to="/" replace={true}></Navigate>
  ) : (
    <div css={container}>
      <h1 className="my-5 text-center">Register</h1>
      <Form onSubmit={(e) => registerUser(e)} className="m-3">
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name..."
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name..."
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Name..."
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>MobileNo:</Form.Label>
          <Form.Control
            type="number"
            placeholder="MobileNo..."
            onChange={(e) => setMobileNo(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {isActive ? (
          <Button variant="primary" type="submit" className="my-5">
            Register
          </Button>
        ) : (
          <Button variant="primary" disabled className="my-5">
            Register
          </Button>
        )}
      </Form>
    </div>
  );
};

const container = css`
  margin: 10rem auto 0 auto;
  h1 {
    font-family: "Permanent Marker", cursive;
    text-align: center;
  }
  width: 90%;
  //Tablet Screen----------
  @media (min-width: 481px) {
    width: 500px;
  }
`;

export default Register;
