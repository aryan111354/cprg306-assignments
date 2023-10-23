"use client";
import { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
  });


  return (
    <div>
    <button 
      onClick={() => setSortBy("name")} 
      style={{backgroundColor: sortBy === "name" ? 'lightblue' : 'transparent'}}
    >
      Sort by Name
    </button>
    <button 
      onClick={() => setSortBy("category")} 
      style={{backgroundColor: sortBy === "category" ? 'lightblue' : 'transparent'}}
    >
      Sort by Category
    </button>
    <ul>
      {sortedItems.map(item => <Item key={item.id} {...item} />)}
    </ul>
  </div>
  );
};

export default ItemList;
