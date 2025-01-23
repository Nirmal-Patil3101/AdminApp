import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../CSS/Dashboard.css";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useNavigate } from "react-router-dom";


const Dashbord = () => {
  const [DashboardData, setDashboardData] = useState([]);
  const [revenues , setrevenues]= useState([]);
  const [ChartData,setChartData]=useState([]);

  const navigate = useNavigate();

    useEffect(() => {
    const fetchDashboard = async () => {
      try {
        //counter data
        const result = await axios.get(
          "http://localhost:5000/dashbordcollection"
        );
        setDashboardData(result.data.data);
        // revenue data
        const revenueCounter = await axios.get("http://localhost:5000/totalrevenue");
        setrevenues(revenueCounter.data.data)
        console.log("revenue",revenueCounter.data.data);

        //Get top Dishes
         const fetchBarChartData = await axios.get("http://localhost:5000/gettopdishes");
        
         const transformedData = fetchBarChartData.data.data.map((items)=>({
          DishName:items.dishDetails?.dname,
          totalQuantity: items.totalQuantity,
          totalRevenue : items.totalRevenue,
         }));
         setChartData(transformedData);
         console.log(fetchBarChartData.data.data);

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
            <h3 onClick={()=>{navigate("/customers")}}>Total Customers: {DashboardData.CustomerCounter}</h3>
          </Col>
          <Col className="dashboard-box">
            <h3 onClick={()=>{navigate("/alldish")}}>Total Dishes: {DashboardData.DishCounter}</h3>
          </Col>
          <Col className="dashboard-box">
            <h3 onClick={()=>{navigate("/order")}}>Total Orders: {DashboardData.OrderCounter}</h3>
          </Col>
          <Col className="dashboard-box">
            <h3 onClick={()=>{navigate("/review")}}>Total Reivew:{DashboardData.ReviewCounter}</h3>
          </Col>
          <Col className="dashboard-box">
          <h3>Total Revenue:</h3>
          <h3>{revenues.map((price) => price.totalRevenue)}</h3>
          </Col>
        </Row>

        <div style={{marginTop:"0px"}}>
          <h3>Top 3 Dishes</h3>
          <ResponsiveContainer width="50%" height={280}>
            <BarChart 
            width={50}
            height={300}
            data={ChartData}
            margin={{
              top: 5,
              right:30,
              left:20,
              bottom:5,
            }}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="DishName"/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Bar dataKey="totalQuantity" fill="#6734cd" activeBar={<Rectangle fill="#8f38e6" stroke="#DE3163"/>}/>
              <Bar dataKey="totalRevenue" fill="#67a2ee" activeBar={<Rectangle fill="#f09bd5" stroke="purple"/>}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </div>
  );
};

export default Dashbord;
