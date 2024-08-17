import React, { useEffect, useState } from "react";
import { Form, Label, Input, FormGroup, Button, Row, Col } from "reactstrap";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

  const handleChange = (event, property) => {
    // console.log(event.target.value);
    setData({ ...data, [property]: event.target.value });
    // console.log(data);
  };

  const resetData=()=>{
    setData({
        name: "",
        email: "",
        password: "",
        about: "",
    })
  }

  const submitForm=(event)=>{
    event.preventDefault();
    console.log(data);
    
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h3>Fill Information to Register!</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                <FormGroup>
                  <Label for="name">Enter Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Here"
                    id="name"
                    onChange={(e) => handleChange(e, "name")}
                    value={data.name}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter Here"
                    id="email"
                    onChange={(e) => handleChange(e, "email")}
                    value={data.email}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter Here"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="about">About</Label>
                  <Input
                    type="textarea"
                    placeholder="Enter Here"
                    id="about"
                    onChange={(e) => handleChange(e, "about")}
                    value={data.about}
                  />
                </FormGroup>

                <Container className="text-center">
                  <Button color="dark">Register</Button>
                  <Button onClick={resetData} color="secondary" type="reset" className="ms-2">
                    Reset
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
