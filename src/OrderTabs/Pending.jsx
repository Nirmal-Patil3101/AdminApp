import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pending = () => {
  const [PendingOrder, setPendingOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingOrders = async () => {
      try {
        const reqStatus = {
          orderStatus: "Pending",
        };
        const result = await axios.post(
          "http://localhost:5000/getorderbystatus",
          reqStatus
        );
        setPendingOrder(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPendingOrders();
  }, []);
  return (
    <div>
      <h1>Pending</h1>
      <Row>
        {PendingOrder.map((order) => {
          return (
            <Col key={order._id} md={3} sm={4} ld={12}>
              <Card>
                <CardBody>
                  <Card.Text>Name :{order.ordercustomerid?.cname}</Card.Text>
                  <Card.Text>Mobile:{order.ordercustomerid?.cmobile}</Card.Text>
                  {order.orderItems?.map((item, index) => {
                    return (
                      <Col key={index}>
                        <Card.Text>Dish Name: {item.dishid?.dname}</Card.Text>
                        <Card.Text>Dish Price:{item.dishid?.dprice}</Card.Text>
                      </Col>
                    );
                  })}
                  <Card.Text>order Status:{order.orderStatus}</Card.Text>
                </CardBody>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/orderdetails",{state:order});
                  }}
                >
                  View Details
                </button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Pending;
