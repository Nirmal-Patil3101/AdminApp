import React from 'react';
import '../CSS/AddDish.css'

const AddDish = () => {
  return (
    <div >
      <form action="#" className='componant-AddDish'>
        <h2>Add a Dish</h2>
        
        {/* Dish Name */}
        <div className="form-group">
          <label htmlFor="dishName">Dish Name</label>
          <input type="text" id="dishName" name="dishName" required />
        </div>

        {/* Dish Category */}
        <div className="form-group">
          <label htmlFor="category">Dish Category</label>
          <select id="category" name="category" required>
            <option value="">Select Category</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="south indian">south indian</option>
          </select>
        </div>

        {/* Radio Button: Veg/Non-Veg */}
        <div className="form-group">
          <label>Dish Type</label>
          <div>
            <input type="radio" id="veg" name="dishType" value="Vegetarian" required />
            <label>Vegetarian</label>
          </div>
          <div>
            <input type="radio" id="non-veg" name="dishType" value="Non-Vegetarian" />
            <label>Non-Vegetarian</label>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Additional Comments</label>
          <textarea name="message" id="message" rows="3"></textarea>
        </div>

        <button type="submit" className="submit-btn">Add Dish</button>
      </form>
    </div>
  );
}

export default AddDish;
