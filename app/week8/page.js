import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      setIsLoading(false); 
    }
  }, [user, navigate]);


  const handleAddItem = (newItem) => {
    setItems(currentItems => [...currentItems, newItem]);
  };


  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <main className="bg-black-100 p-4 flex">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-indigo-400 flex-auto items-center">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
};

export default Page;
