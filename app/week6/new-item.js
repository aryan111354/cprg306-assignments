"use client";
import { useState } from "react";

function NewItem({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the new item data to the parent component
    onAddItem({
      name: itemName,
      quantity: parseInt(quantity),
      category: category
    });

    // Reset the input fields
    setItemName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-80"
      >
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
            </select>
      </form>
    </div>
  );
}

export default NewItem;
