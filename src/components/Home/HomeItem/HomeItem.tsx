import { useGetProductsQuery } from '@/redux/api/api';
import { useEffect } from 'react';
import Item from './Item';


const HomeItem = () => {
  
  const { data: products, isLoading, isError } = useGetProductsQuery({
    isFeatured: true 
  });

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
      <h2 className='text-center text-4xl'>Featured Products</h2>
      <div className="product-list">
        
        <Item products={products}>
               
        </Item>
        
      </div>
    </div>
  );
};

export default HomeItem;
