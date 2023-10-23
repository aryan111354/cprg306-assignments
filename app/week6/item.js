import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white rounded-lg shadow-md p-4 mb-2 flex justify-between items-center">
      <div className="text-gray-800">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-600">Category: {category}</p>
      </div>
      <div className="text-gray-800">
        <span className="font-bold">Quantity: {quantity}</span>
      </div>
    </li>
  );
};

export default Item;


