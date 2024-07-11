import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 w-[100%] h-[100%] text-white py-8">
        <div className="container mx-auto w-full px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Contact Information */}
            <div className="mb-6 md:mb-0 w-full md:w-auto">
              <h4 className="text-xl font-bold">Contact Us</h4>
              <p>Email: info@sporting.com</p>
              <p>Phone: +123 456 7890</p>
              <p>Address: 123 sporting St, Cumilla City, FIT 13254</p>
            </div>

            {/* Social Media Links */}
            <div className="mb-6 md:mb-0 w-full md:w-auto">
              <h4 className="text-xl font-bold">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            {/* Other Relevant Links */}
            <div className="w-full md:w-auto">
              <h4 className="text-xl font-bold">Quick Links</h4>
              <ul className="space-y-2 mt-2">
                <li>
                  <a href="/" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-blue-500">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className='lg:text-xl text-base'>
            ©{new Date().getFullYear()} sporting goods All rights reserved
          </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
