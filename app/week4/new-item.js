"use client";
import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }; 
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      {/* Quantity Field */}
      <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
      {/* Category Field */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="produce">Produce</option>
        <option value="Produce">Dairy</option>
            <option value="Produce">Bakery</option>
            <option value="Produce">Meat</option>
            <option value="Produce">Frozen Foods</option>
            <option value="Produce">Canned Foods</option>
            <option value="Produce">Dry Goods</option>
            <option value="Produce">Beverages</option>
            <option value="Produce">Snackes</option>
            <option value="Produce">Household</option>
            <option value="Produce">Other</option>
        {/* Add other options here */}
      </select>
      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewItem;