import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const Register = () => {
    const [something, setSomething] = useState("");
    console.log(something);
    return (
      <Form>
        <Form.Group>
          <Form.Label>Title AddProducts</Form.Label>
          <Form.Control
            placeholder="Something"
            onChange={(e) => setSomething(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>
    );
}

export default Register