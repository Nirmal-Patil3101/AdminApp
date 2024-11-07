import React from "react";
import "../CSS/AddDish.css";
import axios from "axios";
import { Container, Form } from "react-bootstrap";


const AddDish = () => {
  let submitData = async (event)=>{
    let dishData = new FormData(event.target)

    let reqDishData = Object.fromEntries(dishData.entries())
    console.log("DATA",reqDishData);

    try {
      const result = await axios.post("http://localhost:5000/adddish",reqDishData,{
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      console.log(result);
      alert("Dish Added..")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Add-Dish">
      <h1>Add Dish</h1>
      <Container>
        <Form onSubmit={(e)=>{e.preventDefault(); submitData(e)}} className="componant-AddDish">
          <Form.Control type="text" placeholder="Enter Name" name="dname" />
          <Form.Select>
            <Form.option value="" label="Select Category"/>
            <Form.option value="Indian" label="Indian"/>
            <Form.option value="Italian" label="Italian"/>
            <Form.option value="south indian" label="south indian"/>
          </Form.Select>
          <Form.Control type="Number" name="dprice"/>
          <Form.Group>
            <Form.Check type="radio" value="Vegetarians" label="Vegetarians" name="dtype"/>
            <Form.Check type="radio" value="non-vegetarians" label="non-vegetarians" name="dtype"/>
          </Form.Group>
          <Form.Control type="file" name="image"/>
          <button type="submit" className="submit-btn">
            Add Dish
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddDish; 