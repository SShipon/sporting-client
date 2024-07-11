import { Props } from '@/types';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Item: React.FC<Props> = ({ products }) => {
  return (
    <div className="mt-10 lg:mx-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {products.slice(0, 8)?.map((product) => (
          <div key={product._id} className="w-full max-w-xs relative"> {/* Fixed width set */}
            <Link to={`/sportDetails/${product._id}`} className="block w-full">
              <div className="bg-white shadow-md rounded-xl overflow-hidden hover:rounded-xl hover:bg-opacity-70 transition duration-300">
                <img
                  className="w-50 h-48 object-cover object-center block mx-auto" // Fixed height for images
                  src={product.image}
                  alt={product.name}
                  loading="lazy" // Optional: Improve loading performance
                />
                <div className="p-4">
                  <h1 className="text-gray-900 font-bold text-xl mb-2 truncate">{product.name}</h1>
                  <p className="text-gray-700 text-base mb-2">${product.price}</p>
                  <p className="text-gray-700 text-base mb-4 truncate">{product.brand}</p>
                  <Link to={`/sportDetails/${product._id}`} className="text-blue-500 hover:text-blue-600 font-bold">
                    View Details
                  </Link>
                </div>
                {/* Icons on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <FaHeart className="text-white text-2xl hover:text-red-500 cursor-pointer" />
                    <FaShoppingCart className="text-white text-2xl hover:text-green-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
