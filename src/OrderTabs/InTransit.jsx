import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InTransit = () => {
  const [inTransitOrder,setinTransitOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchInTransitOrders = async()=>{
      try {
        const reqStatus={
          orderStatus:"InTransit"
        };
        const result = await axios.get("http://localhost:5000/getorderbystatus",reqStatus);
        setinTransitOrder(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInTransitOrders();
  },[])
  return (
    <div>
      <h1>InTransit</h1>
      <Row>
        {
            inTransitOrder.map((order)=>{
                return(
                    <Col key={order._id} md={3} sm={4} ld={12}>
                    <Card>
                        <CardBody>
                            <Card.Text>order Status:{order.orderStatus}</Card.Text>
                        </CardBody>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            navigate("/orderdetails");
                        }}>View Details</button>
                    </Card>
                    </Col>
                )
            })
        }
      </Row>
    </div>
  )
}

export default InTransit
