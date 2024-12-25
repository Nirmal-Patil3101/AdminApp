import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Pending = () => {
  const [PendingOrder,setPendingOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchPendingOrders = async()=>{
            try {
                const reqStatus={
                    orderStatus:"Pending"
                };
                const result = await axios.get("http://localhost:5000/getorderbystatus",reqStatus);
                setPendingOrder(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPendingOrders();
    },[])
  return (
    <div>
      <h1>Pending</h1>
      <Row>
        {
            PendingOrder.map((order)=>{
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

export default Pending
