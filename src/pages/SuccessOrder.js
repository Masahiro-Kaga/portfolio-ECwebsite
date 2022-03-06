import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SuccessOrder = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
    clearTimeout();
  }, [navigate]);

  return (
    <Card className="text-center" style={{"margin":"12rem" }}>
      <Card.Header className="fs-1" style={{"fontFamily":"Permanent Marker"}}>Ordered Successfully</Card.Header>
      <Card.Body>
        <Card.Title>We appreciate your shopping!</Card.Title>
        <Card.Text>
          We hope you enjoy shopping all the time.
          Item should be sent in 2 days.
        </Card.Text>
        <Button variant="primary" as={Link} to={"/"}>HOME</Button>
      </Card.Body>
    </Card>
  );
};

export default SuccessOrder;
