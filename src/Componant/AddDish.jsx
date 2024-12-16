import React from "react";
import "../CSS/AddDish.css";
import axios from "axios";
import { Container, Form } from "react-bootstrap";

const AddDish = () => {
  const submitData = async (event) => {
    event.preventDefault();
    const dishData = new FormData(event.target);
    const reqDishData = Object.fromEntries(dishData.entries());
    console.log("DATA", reqDishData);

    try {
      const result = await axios.post("http://localhost:5000/adddish", dishData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result);
      alert("Dish Added..");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Add-Dish">
      <h1>Add Dish</h1>
      <Container>
        <Form onSubmit={submitData} className="componant-AddDish" encType="multipart/form-data">
          <Form.Control type="text" placeholder="Enter Name" name="dname" required />
          
          <Form.Select name="category" required>
            <option value="" label="Select Category" />
            <option value="Indian" label="Indian" />
            <option value="Italian" label="Italian" />
            <option value="South Indian" label="South Indian" />
          </Form.Select>
          
          <Form.Control type="number" placeholder="Enter Price" name="dprice" required />
          
          <Form.Group>
            <Form.Check type="radio" value="Vegetarians" label="Vegetarians" name="dtype" required />
            <Form.Check type="radio" value="Non-Vegetarians" label="Non-Vegetarians" name="dtype" required />
          </Form.Group>
          
          <Form.Control type="file" name="image" accept="image/*" required />
          
          <button type="submit" className="submit-btn">
            Add Dish
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddDish;
