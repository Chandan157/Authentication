import React from "react";
import { Form, Label, Input, FormGroup, Button, Row, Col } from "reactstrap";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const Login = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h3>Login!</h3>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input type="email" placeholder="Enter Here" id="email" />
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter Here"
                    id="password"
                  />
                </FormGroup>

                <Container className="text-center">
                  <Button color="dark">Login</Button>
                  <Button color="secondary" type="reset" className="ms-2">
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

export default Login;
