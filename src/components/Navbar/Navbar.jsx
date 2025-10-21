import { useState } from "react";
import {
  FaBars,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left side - Logo/Brand Name */}
          <div className="shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 cursor-pointer hover:text-orange-600 transition-colors duration-300">
              Gl<span className="text-orange-600">o</span>cify
            </h1>
          </div>

          {/* Middle - Navigation Links (Desktop) */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-orange-600 relative group ${
                    link.active
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform origin-left transition-transform duration-300 ${
                      link.active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Search, Favorites, Cart */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden md:flex items-center">
              <div
                className={`flex items-center transition-all duration-300 ${
                  isSearchOpen ? "w-64" : "w-10"
                }`}
              >
                <div className="relative flex items-center w-full">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className={`w-full py-2 pl-4 pr-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                      isSearchOpen ? "opacity-100" : "opacity-0 w-0"
                    }`}
                  />
                  <button
                    onClick={toggleSearch}
                    className="absolute right-0 p-2 text-gray-400 hover:text-orange-600 transition-colors duration-300"
                  >
                    <FaSearch className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Search - Mobile */}
            <button
              onClick={toggleSearch}
              className="md:hidden p-2 text-gray-400 hover:text-orange-600 transition-colors duration-300"
            >
              <FaSearch className="w-5 h-5" />
            </button>

            {/* Favorites */}
            <div className="relative">
              <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors duration-300 group">
                <FaHeart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>

            {/* Shopping Cart */}
            <div className="relative">
              <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors duration-300 group">
                <FaShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </button>
            </div>

            {/* User Account - Desktop */}
            <div className="hidden lg:block">
              <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors duration-300">
                <FaUser className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-400 hover:text-orange-600 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-3 pl-4 pr-12 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600 transition-colors duration-300">
                <FaSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                link.active
                  ? "text-orange-600 bg-orange-50"
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile User Account */}
          <div className="border-t border-gray-100 pt-3 mt-3">
            <a
              href="#account"
              className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
            >
              <FaUser className="w-5 h-5 mr-3" />
              My Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
