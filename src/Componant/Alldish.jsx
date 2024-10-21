import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Col, Row } from "react-bootstrap";
import "../CSS/Alldish.css";

const Alldish = () => {
  const [dishes, setdishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const result = await axios.get("http://localhost:5000/getdish");
      setdishes(result.data);
    }
    fetchDishes();
  }, []);
  return (
    <div>
      <Row>
        {dishes.map((dish) => {
          return (
            <Col md={3} sm={4} ld={12} className="dish-componant">
              <Card className="card">
                <Card.Img src={`http://localhost:5000/${dish.dimg}`} />
                <CardBody>
                  <Card.Text>Name:{dish.dname}</Card.Text>
                  <Card.Text>Rs.{dish.dprice}</Card.Text>
                </CardBody>
                <CardFooter>
                  <button>Add</button>
                </CardFooter>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Alldish;
