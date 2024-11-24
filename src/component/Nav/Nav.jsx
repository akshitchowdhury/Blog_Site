import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">MyBrand</div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#services" className="hover:text-gray-200">Services</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-4 py-3 space-y-2">
          <a href="#home" className="block hover:text-gray-200">Home</a>
          <a href="#about" className="block hover:text-gray-200">About</a>
          <a href="#services" className="block hover:text-gray-200">Services</a>
          <a href="#contact" className="block hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
