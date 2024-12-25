import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Delivered = () => {
    const [deliveredOrder,setdeliveredOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchDeliveredOrders = async()=>{
            try {
                const reqStatus={
                    orderStatus:"Delivered"
                };
                const result = await axios.get("http://localhost:5000/getorderbystatus",reqStatus);
                setdeliveredOrder(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDeliveredOrders();
    },[])
  return (
    <div>
      <h1>Delivered</h1>
      <Row>
        {
            deliveredOrder.map((order)=>{
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

export default Delivered