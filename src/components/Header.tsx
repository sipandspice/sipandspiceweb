import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, Leaf, Droplet } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              isScrolled || !isHomePage ? 'text-yellow-900' : 'text-white'
            }`}>
              SIP & SPICE
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink icon={<Coffee size={18} />} title="Coffee" to="/coffee" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavLink icon={<Leaf size={18} />} title="Tea" to="/tea" isScrolled={isScrolled} isHomePage={isHomePage} />
          <NavLink icon={<Droplet size={18} />} title="Spices" to="/spices" isScrolled={isScrolled} isHomePage={isHomePage} />
        </nav>

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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <Link to="/coffee" className="flex items-center space-x-2 p-2 hover:bg-stone-100 rounded-md">
              <Coffee size={18} className="text-yellow-900" />
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
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  icon: React.ReactNode;
  title: string;
  to: string;
  isScrolled: boolean;
  isHomePage: boolean;
}

const NavLink = ({ icon, title, to, isScrolled, isHomePage }: NavLinkProps) => (
  <Link 
    to={to}
    className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
      isScrolled || !isHomePage ? 'text-stone-800 hover:text-yellow-700' : 'text-white hover:text-yellow-500/80'
    }`}
  >
    <span className={`${isScrolled ? "text-yellow-700": "text-yellow-500/70"}`}>{icon}</span>
    <span>{title}</span>
  </Link>
);

export default Header;