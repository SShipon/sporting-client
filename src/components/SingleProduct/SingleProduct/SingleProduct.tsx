

import { useParams } from 'react-router-dom';

import {  TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

import { useGetSingleProductQuery } from '@/redux/api/api';
// import AddToCart from '../AddToCart/AddToCart';



const SingleProduct = () => {
  
const { id } = useParams();
const { data: products, isLoading } = useGetSingleProductQuery(id);
    console.log(products)
if (isLoading) {
  return <div>Loading...</div>;
}
 if (!products) {
   return <div>Product not found</div>;
 }

  return (
    <div>
      <section className="container mx-auto max-w-5xl mt-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="product_image">
            <img src={products?.image} alt="" />
          </div>
          <div className="product_data text-black p-5">
            <h1 className="text-4xl mb-3">{products?.name}</h1>
            {/* <Stars stars={stars} reviews={reviews}></Stars> */}
            <p className="product-real-price font-bold  mb-3">
              <p> Price : {products?.price}$</p>
            </p>
            <h1>{products?.description}</h1>
            <div className="product-data-warranty flex gap-5 mt-5 mb-5">
              <div>
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Free Delivery</p>
              </div>
              <div>
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Your Delivery</p>
              </div>
              <div>
                <MdSecurity className="text-3xl"></MdSecurity>
                <p>Year Warranty</p>
              </div>
            </div>
            <hr />

            <div className="product-data-info mt-4 mb-4">
              <p>
                Available :{' '}
                <span className="font-bold">
                  {products?.stock > 0 ? 'In Stock' : 'Not Available'}
                </span>{' '}
              </p>
            </div>
            <hr />
            {/* {products.stock > 0 && <AddToCart singleProduct={products}></AddToCart>} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
