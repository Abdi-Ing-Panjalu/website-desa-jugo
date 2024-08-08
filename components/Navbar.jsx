"use client"

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
    <nav style={{ backgroundColor: '#4B3619' }} className="bg-white shadow-lg">
      <div className="max-w-8xl mx-auto px-10">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-white hover:text-gray-300">
                <span className="font-bold">Desa Jugo</span>
              </a>
            </div>


          </div>

          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-2">
              <a href="/produk" className="py-5 px-5 text-white hover:text-gray-300">Produk Unggulan</a>
              <a href="/pemetaan" className="py-5 px-5 text-white hover:text-gray-300">Pemetaan</a>
              <a href="/wisata" className="py-5 px-5 text-white hover:text-gray-300">Wisata</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-white hover:text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-  7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-white text-sm hover:bg-gray-200 hover:text-gray-900">Produk Unggulan</a>
        <a href="#" className="block py-2 px-4 text-white text-sm hover:bg-gray-200 hover:text-gray-900">Pemetaan</a>
        <a href="#" className="block py-2 px-4 text-white text-sm hover:bg-gray-200 hover:text-gray-900 ">Wisata</a>
      </div>
    </nav>
  
  </div>

  );
}
