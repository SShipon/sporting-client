import { useGetProductsQuery } from '@/redux/api/api';
import { useEffect } from 'react';
import Item from './Item';


const HomeItem = () => {
  
  const { data: products, isLoading, isError } = useGetProductsQuery({
  
    isFeatured: true 
  });
  console.log(products)

  useEffect(() => {
 
  }, [products]);

  if (isLoading) {
    return <p>Loading...</p>; 
  }

  if (isError) {
    return <p>Error fetching data</p>; 
  }

  
  return (
    <div>
      <h2 className='text-center font-bold text-xl lg:text-4xl'>Featured Products</h2>
      <div className="">
        
        <Item products={products}>
               
        </Item>
        
      </div>
    </div>
  );
};

export default HomeItem;
