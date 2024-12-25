import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Delivered from "../OrderTabs/Delivered";
import Pending from "../OrderTabs/Pending";
import InTransit from "../OrderTabs/InTransit";
import Cancelled from "../OrderTabs/Cancelled";


const Order = () => {
  // const [orders, setorders] = useState([]);

  // useEffect(() => {
  //   async function fetchorder() {
  //     const result = await axios.get("http://localhost:5000/allorder");
  //     setorders(result.data);
  //   }
  //   fetchorder();
  // }, []);
  const navigate =useNavigate()
  return (
   <div>
    <Tabs
          defaultActiveKey="Delivered"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Delivered" title="Delivered">
            <Delivered />
          </Tab>
          <Tab eventKey="Pending" title="Pending">
            <Pending />
          </Tab>
          <Tab eventKey="InTransit" title="InTransit">
            <InTransit />
          </Tab>

          <Tab eventKey="Cancelled" title="Cancelled">
            <Cancelled />
          </Tab>
        </Tabs>
   </div>






    // <div>
    //   <Row>
    //     {orders.map((order) => {
    //       return (
    //         <Col md={3} sm={4} ld={12} key={order._id}>
    //           <Card >
    //             <CardBody>
    //               <Card.Text>OrderTotal:{order.orderTotal}</Card.Text>
    //               <Card.Text>OrderStatus:{order.orderStatus}</Card.Text>
    //               <Card.Text>OrderDate:{order.orderDate}</Card.Text>
    //               <Card.Text>Customer Name:{order.ordercustomerid?.cname}</Card.Text>
    //               <Card.Text>Customer Mobile:{order.ordercustomerid?.cmobile}</Card.Text>
    //             </CardBody>
    //             <button onClick={()=>{
    //               navigate("/orderdetails",{state:order})
    //             }}>Details</button>
    //           </Card>
    //         </Col>
    //       );
    //     })}
    //   </Row>
    // </div>
  );
};

export default Order;
