import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "@/redux/api/api";
import AddToCart from "../AddToCart/AddToCart";
import { useState } from "react";

const SportDetails = () => {
  const { id } = useParams();
  const { data: products, isLoading } = useGetSingleProductQuery(id);
  const [expanded, setExpanded] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>Product not found</div>;
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderDescription = () => {
    if (expanded || products.description.length < 100) {
      return (
        <>
          {products.description}
          {products.description.length >= 100 && (
            <button
              onClick={toggleExpanded}
              className="text-blue-600 ml-1 focus:outline-none"
            >
              show less
            </button>
          )}
        </>
      );
    } else {
      const truncatedDesc = products.description.substring(0, 100); // Adjust the character limit as needed
      return (
        <>
          {truncatedDesc}...
          <button
            onClick={toggleExpanded}
            className="text-blue-600 ml-1 focus:outline-none"
          >
            more...
          </button>
        </>
      );
    }
  };

  return (
    <div>
      <section className="container mx-auto max-w-5xl mt-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="product_image">
            <img src={products.image} alt={products.name} />
          </div>
          <div className="product_data text-black p-5">
            <h1 className="text-4xl mb-3">{products.name}</h1>
            <p className="product-real-price font-bold mb-3">
              Price: ${products.price}
            </p>
            <div className="product-description mb-3">
              <p>{renderDescription()}</p>
            </div>

            <div className="product-data-info mt-4 mb-4">
              <p>
                Available:{" "}
                <span className="font-bold">
                  {products.stock > 0 ? "In Stock" : "Not Available"}
                </span>{" "}
              </p>
            </div>

            {products.stock > 0 && <AddToCart singleProduct={products} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportDetails;
