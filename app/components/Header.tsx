"use client";

import React from 'react';
import Link from 'next/link';
import headerData from '../../data/header.json';
import  { useState, useEffect } from 'react';


const Header = () => {
  const { logo, links } = headerData;
    // State to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Simulate user login check (replace with actual logic, e.g., checking a token)
    useEffect(() => {
      const token = localStorage.getItem('token'); // Example: token-based authentication
      setIsLoggedIn(!!token); // Update login status based on token presence
    }, []);
  
    // Handle logout
    const handleLogout = () => {
      localStorage.removeItem('token'); // Remove the token
      setIsLoggedIn(false); // Update login status
    };

  return (
    <header className="bg-gray-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded">
              <span className="font-bold text-lg">{logo.abbreviation}</span>
            </div>
            <span className="text-xl font-bold text-gray-800">{logo.text}</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-gray-800 hover:text-black"
            >
              {link.title}
            </Link>
          ))}
        </nav>


        {/* Login/Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Logout

          </button>
        ) : (
          <Link href="/login">
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Login
            </button>
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
