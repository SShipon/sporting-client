
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = () => {
      setNavOpen(!navOpen);
    };
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-10">
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
              to="/products"
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
            {/* <li>
              <a
                href="/contact"
                className="block py-2 text-gray-800 hover:text-blue-600"
              >
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;