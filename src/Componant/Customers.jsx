import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const Customers = () => {
  const [customer,setcustomer]=useState([]);

  useEffect(()=>{
    async function fetchCustomer() {
      const result = await axios.get("http://localhost:5000/all");
      setcustomer(result.data);
    }
    fetchCustomer();
  },[]);
  return (
    <div>
      <h2>Customers</h2>
      <div>
        <Row>
          {
            customer.map((cust)=>{
              return(
                <Col key={cust._id} md={3} sm={4} ld={12}>
                  <Card>
                    <CardBody>
                      <Card.Img src={`http://localhost:5000/${cust.cphoto}`}/>
                      <Card.Text><strong>Name:</strong>{cust.cname}</Card.Text>
                      <Card.Text><strong>Mobile No:</strong>{cust.cmobile}</Card.Text>
                      <Card.Text><strong>Gender:</strong>{cust.gender}</Card.Text>
                      <Card.Text><strong>Adders:</strong>{cust.cadders}</Card.Text>

                    </CardBody>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>

  )
}

export default Customers
