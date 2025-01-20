import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../CSS/Dashboard.css";

const Dashbord = () => {
  const [DashboardData, setDashboardData] = useState([]);
  const [revenues , setrevenues]= useState([]);

    useEffect(() => {
    const fetchDashboard = async () => {
      try {
        //counter data
        const result = await axios.get(
          "http://localhost:5000/dashbordcollection"
        );
        // revenue data
        const revenueCounter = await axios.get("http://localhost:5000/totalrevenue");
        setrevenues(revenueCounter.data.data)
        console.log("revenue",revenueCounter.data.data);

        setDashboardData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashbord</h1>

      <Container>
        <Row className="dashboard-row">
          <Col className="dashboard-box">
            <h3>Total Customers: {DashboardData.CustomerCounter}</h3>
          </Col>
          <Col className="dashboard-box">
            <h3>Total Dishes: {DashboardData.DishCounter}</h3>
          </Col>
          <Col className="dashboard-box">
            <h3>Total Orders: {DashboardData.OrderCounter}</h3>
          </Col>
          <Col className="dashboard-box">
            <h3>Total Reivew:{DashboardData.ReviewCounter}</h3>
          </Col>
          <Col className="dashboard-box">
          <h3>Total Revenue:</h3>
          <h3>{revenues.map((price) => price.totalRevenue)}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashbord;
