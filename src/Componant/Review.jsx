import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap'

const Review = () => {
  const [review,setreview]= useState([])
  useEffect(()=>{
    const fetchreviews = async()=>{
      const reviews = await axios.get("http://localhost:5000/getdisheswithavgrating");
      console.log(reviews.data.data);
      setreview(reviews.data.data);
    }
    fetchreviews();
  },[])
  return (
    <div>
      <h2>Reviews</h2>
      <div>
      <Row>
      {
        review.map((item)=>{
          return(
            <Col key={item._id} md={3} sm={4} ld={12} >
            <Card >
              <CardBody>
                <Card.Img src={`http://localhost:5000/${item.dimg}`}/>
                <Card.Text><strong>Name:</strong> {item.dname}</Card.Text>
                <Card.Text><strong>Dish Price:</strong> {item.dprice}</Card.Text>
                <Card.Text><strong>Type:</strong> {item.dtype}</Card.Text>
                <Card.Text><strong>Average Rating:</strong>{item.averageratings}</Card.Text>
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

export default Review
