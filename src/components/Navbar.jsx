import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLists } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <a 
          href="#home" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={closeMenu}
        >
          <img src="/assets/images/Hgroup_blanco.png" alt="HGroup" width={80} height={24} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button - Fixed positioning */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center justify-center w-10 h-10 text-gray hover:text-white transition-all duration-300 relative z-50"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            {isMenuOpen ? (
              <X size={24} className="absolute inset-0 transition-all duration-300 ease-in-out transform" />
            ) : (
              <Menu size={24} className="absolute inset-0 transition-all duration-300 ease-in-out transform" />
            )}
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`sm:hidden fixed inset-0 bg-black/95 z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
        >
          {/* Mobile menu items */}
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLists.map((nav, index) => (
              <div 
                key={nav} 
                className={`text-xl cursor-pointer text-gray hover:text-white transition-all duration-300 transform ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                }}
                onClick={closeMenu}
              >
                {nav}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;