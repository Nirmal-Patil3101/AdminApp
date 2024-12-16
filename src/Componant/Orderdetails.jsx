import axios from "axios";
import React, { useState } from "react";
import { Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Orderdetails = () => {
  const orderData = useLocation().state;
  const [status, setstatus] = useState("");

  const updateorderstatus = async () => {
    let reqorderData = {
      orderid:orderData._id,
      orderStatus:status
    };
    try {
      const result = await axios.put(
        "http://localhost:5000/updateorder",
        reqorderData
      );
      console.log(result);
      alert("order update");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Detiles</h1>
      <h4>Customer Name:{orderData.ordercustomerid?.cname}</h4>
      <h4>Customer Monileno:{orderData.ordercustomerid?.cmobile}</h4>
      <h4>OrderDate:{orderData.orderDate}</h4>
      <h4>OrderTotal:{orderData.orderTotal}</h4>
      <h4>OrderStatus:{orderData.orderStatus}</h4>
      {/* <h4>Dish Name:{orderData.orderItems?.dishid}</h4> */}
      <div>
        <Row>
          {orderData.orderItems?.map((Item) => {
            return (
              <Col key={Item._id} md={3} sm={4} ld={12}>
                <Card>
                  <CardBody>
                    <Card.Text>Dish Name: {Item.dishid?.dname}</Card.Text>
                    <Card.Text>Dish Price: {Item.dishid?.dprice}</Card.Text>
                    <Card.Img
                      src={`http://localhost:5000/${Item.dishid.dimg}`}
                    />
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <div>
        <Container>
          <Form>
            <Form.Group>
              <Form.Check
                type="radio"
                value="preparing"
                label="preparing"
                name="orderstatus"
                onChange={(e) => setstatus(e.target.value)}
              />
              <Form.Check
                type="radio"
                value="intranslate"
                label="intranslate"
                name="orderstatus"
                onChange={(e) => setstatus(e.target.value)}
              />
              <Form.Check
                type="radio"
                value="delivery"
                label="delivery"
                name="orderstatus"
                onChange={(e) => setstatus(e.target.value)}
              />
              <Form.Check
                type="radio"
                value="cancel"
                label="cancel"
                name="orderstatus"
                onChange={(e) => setstatus(e.target.value)}
              />
              <button onClick={(e)=>{
                e.preventDefault();
                updateorderstatus();
              }}>updatestatus</button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Orderdetails;
