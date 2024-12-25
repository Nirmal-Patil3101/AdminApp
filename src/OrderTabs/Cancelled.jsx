import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cancelled = () => {
  const [CancelledOrder,setCancelledOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchCancelledOrders = async()=>{
            try {
                const reqStatus={
                    orderStatus:"Cancel"
                };
                const result = await axios.get("http://localhost:5000/getorderbystatus",reqStatus);
                setCancelledOrder(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCancelledOrders();
    },[])
  return (
    <div>
      <h1>Cancelled</h1>
      <Row>
        {
            CancelledOrder.map((order)=>{
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

export default Cancelled
