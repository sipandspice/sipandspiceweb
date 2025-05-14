import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Coffee, Leaf, Droplet } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
            <span className={`transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-amber-800' : 'text-white'
            }`}>
              Flavorful Origins
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink icon={<Coffee size={18} />} title="Coffee" to="/coffee" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavLink icon={<Leaf size={18} />} title="Tea" to="/tea" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavLink icon={<Droplet size={18} />} title="Spices" to="/spices" isScrolled={isScrolled} isHomePage={isHomePage} />
          <Link 
            to="/about" 
            className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-amber-600 ${
              isScrolled || !isHomePage ? 'text-stone-800' : 'text-white'
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => setSearchVisible(!searchVisible)} 
            className={`transition-colors duration-300 hover:text-amber-600 ${
              isScrolled || !isHomePage ? 'text-stone-800' : 'text-white'
            }`}
          >
            <Search size={20} />
          </button>
          <Link 
            to="/cart" 
            className={`relative transition-colors duration-300 hover:text-amber-600 ${
              isScrolled || !isHomePage ? 'text-stone-800' : 'text-white'
            }`}
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              3
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`md:hidden transition-colors duration-300 ${
            isScrolled || !isHomePage ? 'text-stone-800' : 'text-white'
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Search Bar */}
      {searchVisible && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 transition-all duration-300">
          <div className="container mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for coffee, tea, or spices..." 
                className="w-full py-2 pl-10 pr-4 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-stone-400" size={20} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <Link to="/coffee" className="flex items-center space-x-2 p-2 hover:bg-stone-100 rounded-md">
              <Coffee size={18} className="text-amber-800" />
              <span>Coffee</span>
            </Link>
            <Link to="/tea" className="flex items-center space-x-2 p-2 hover:bg-stone-100 rounded-md">
              <Leaf size={18} className="text-green-700" />
              <span>Tea</span>
            </Link>
            <Link to="/spices" className="flex items-center space-x-2 p-2 hover:bg-stone-100 rounded-md">
              <Droplet size={18} className="text-red-700" />
              <span>Spices</span>
            </Link>
            <Link to="/about" className="p-2 hover:bg-stone-100 rounded-md">About Us</Link>
            <Link to="/cart" className="flex items-center justify-between p-2 hover:bg-stone-100 rounded-md">
              <span>Cart</span>
              <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ icon, title, to, isScrolled, isHomePage }) => (
  <Link 
    to={to}
    className={`flex items-center space-x-1 font-medium transition-colors duration-300 hover:text-amber-600 ${
      isScrolled || !isHomePage ? 'text-stone-800' : 'text-white'
    }`}
  >
    <span className="text-amber-600">{icon}</span>
    <span>{title}</span>
  </Link>
);

export default Header;