import { Link } from 'react-router-dom';


interface TProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  isFeatured: boolean;
  image: string;
  rating: number;
  quantity: number;
  price: number;
  stockQuantity: number;
}

interface Props {
  products: TProduct[];
}

const SportingCard: React.FC<Props> = ({ products }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {products?.map((product) => (
          <div key={product._id} className="flex justify-center">
            <Link to={`/sportDetails/${product._id}`} className="w-full max-w-xs">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="lg:w-[200px] lg:h-[200px] w-[100%] h-[100%] block mx-auto object-cover object-center"
                  src={product.image}
                  alt={product.name}
                  loading="lazy" // Optional: Improve loading performance
                />
                <div className="p-4">
                  <h1 className="text-gray-900 font-bold text-xl mb-2">{product.name}</h1>
                  <p className="text-gray-700 text-base mb-2">${product.price}</p>
                  <p className="text-gray-700 text-base mb-4">{product.brand}</p>
                  <Link to={`/sportDetails/${product._id}`} className="text-blue-500 hover:text-blue-600 font-bold">
                    View Details
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportingCard;
