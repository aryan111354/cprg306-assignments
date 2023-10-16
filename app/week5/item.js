import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-emerald-700 p-2 rounded-md mb-2">
      <span className="font-bold">{name}</span> 
      <span className="text-sm text-zinc-900">({quantity})</span>
      <span className="text-xs text-violet-50">{category}</span>
    </li>
  );
};

export default Item;