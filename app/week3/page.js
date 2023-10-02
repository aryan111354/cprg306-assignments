import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-purple-500 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;