import React, { FormEvent, useState } from "react";
import { useAddProductMutation } from "@/redux/api/api";

type TProduct = {
  name: string;
  description: string;
  category: string;
  brand: string;
  isFeatured: boolean;
  image: string;
  rating?: number;
  quantity?: number;
  price?: number;
  stock?: number;
};

const AddProduct: React.FC = () => {
  const [product, setProduct] = useState<TProduct>({
    name: "",
    description: "",
    category: "",
    brand: "",
    isFeatured: true,
    image: "",
  });

  const [addProduct] = useAddProductMutation();

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]:
        name === "rating" ||
        name === "quantity" ||
        name === "price" ||
        name === "stock"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addProduct(product);
    setProduct({
      name: "",
      description: "",
      category: "",
      brand: "",
      isFeatured: true,
      image: "",
    });
  };

  return (
    <div className="my-20">
      <form onSubmit={handleSubmit} className=" p-4 w-full bg-white shadow-md rounded">
        <h2 className="text-xl mb-4 text-center">Add New Product</h2>

        <div className="flex lg:flex-row flex-col lg:justify-center md:justify-center mx-auto">
          <div className="lg:mx-2 w-96 mx-auto">
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="number"
              name="price"
              value={product.price || ""}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="lg:mx-2 w-96 mx-auto">
            <input
              type="number"
              name="stock"
              value={product.stock || ""}
              onChange={handleChange}
              placeholder="Stock Quantity"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              placeholder="Brand"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />

          </div>

          <div className="lg:mx-2 w-96 mx-auto">
            <input
              type="number"
              name="quantity"
              value={product.quantity || ""}
              onChange={handleChange}
              placeholder="Quantity"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="number"
              step="0.1"
              name="rating"
              value={product.rating || ""}
              onChange={handleChange}
              placeholder="Rating"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
          </div>
          
        </div>
       <div className="lg:mx-32  w-96 mx-auto ">
       <button
            type="submit"
            className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
       </div>
       
      </form>
    </div>
  );
};

export default AddProduct;
