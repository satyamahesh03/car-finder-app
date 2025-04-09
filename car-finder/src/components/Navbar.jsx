import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const toggleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-4 flex justify-between items-center transition-colors duration-300">
      <Link to="/" className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 hover:opacity-90 transition">
      Car Finder
      </Link>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-xl hover:text-yellow-500 transition duration-200"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <Link
          to="/wishlist"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Wishlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;