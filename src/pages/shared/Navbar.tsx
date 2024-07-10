import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`fixed w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-blue-600' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Sporting Goods</div>
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-800 focus:outline-none"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex md:items-center md:space-x-6 ${
              navOpen ? 'block' : 'hidden'
            }`}
          >
            <Link
              to="/"
              className="block py-2 text-gray-800 hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-800 hover:text-gray-400"
            >
              About Us
            </Link>
            <Link
              to="/sporting"
              className="block py-2 text-gray-800 hover:text-gray-400"
            >
              Products
            </Link>
            <Link
              to="/addProduct"
              className="block py-2 text-gray-800 hover:text-gray-400"
            >
              Add Product
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-800 hover:text-gray-400"
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
