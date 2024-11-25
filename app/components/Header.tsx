import React from 'react';
import Link from 'next/link';
import headerData from '../../data/header.json';

const Header = () => {
  const { logo, links } = headerData;

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

        {/* Contact Us Button */}
        <Link href="/contact">
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Contact Us
          </button>
        </Link>

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
