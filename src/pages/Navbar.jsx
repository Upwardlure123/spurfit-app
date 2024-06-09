import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 max-w-7xl mx-auto">
      <a href="/" className="text-3xl font-bold">Ahead</a>
      <div className="flex-1 flex justify-center space-x-8">
        <a href="/" className="text-lg hover:bg-gray-200 px-3 py-2 rounded-xl">Home</a>
        <a href="#emotions" className="text-lg hover:bg-gray-200 px-3 py-2 rounded-xl">Emotions</a>
        <a href="#ahead" className="text-lg hover:bg-gray-200 px-3 py-2 rounded-xl">Product</a>
        <a href="#openVacancies" className="text-lg hover:bg-gray-200 px-3 py-2 rounded-xl">Open-Vacancies</a>
      </div>
      <button className="bg-black text-white rounded-full px-6 py-2 transform transition-transform duration-300 hover:scale-105">Download app</button>
    </nav>
  );
};

export default Navbar;
