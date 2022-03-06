/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext);

  const loginUser = (e) => {
    e.preventDefault();
    // console.log(email,password)
    fetch("floating-stream-65303.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        localStorage.setItem("token", data.accessToken);
        if (data.accessToken) {
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "Congraturation for Login.",
          });

          fetch("floating-stream-65303.herokuapp.com/users/getUserDetails", {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setUser({
                id: data._id,
                isAdmin: data.isAdmin,
              });
            });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Please retry to Login.",
          });
        }
      });
  };

  return user.id ? (
    user.isAdmin ? (
      <Navigate to="/adminDashboard" replace={true}></Navigate>
    ) : (
      <Navigate to="/" replace={true}></Navigate>
    )
  ) : (
    <div css={container}>
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
            type="password"
            placeholder="Password Name..."
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" className="m-3">
          Login
        </Button>
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

export default Login;
