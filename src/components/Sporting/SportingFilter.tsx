import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '@/redux/api/api';
import { clearFilters, filterProducts, loadFilterProducts, updateFiltersValue } from '@/redux/features/filterProductsSlice';
import { RootState } from '@/redux/hooks/store';
import { FProduct, TFilters } from '@/types'; // Ensure these are correctly imported

const SportingFilter = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  console.log(products);

  const { filters, all_products } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    if (products) {
      dispatch(loadFilterProducts(products as FProduct[])); // Ensure products is cast to FProduct[]
    }
  }, [products, dispatch]);

  useEffect(() => {
    dispatch(filterProducts());
  }, [dispatch, filters]);

  const getUniqueData = (products: FProduct[], property: keyof FProduct) => {
    const newValue = products.map((curElem) => curElem[property]);
    return ['all', ...new Set(newValue)];
  };

  const categoryOnlyData = getUniqueData(all_products, 'category');

  if (isLoading) {
    return <p className="text-2xl text-center text-red-500">Loading .... </p>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="w-full border-rose-700 mb-4">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <input
          
            type="text"
            name="text"
            value={filters.text}
            onChange={(e) =>
              dispatch(
                updateFiltersValue({
                  name: e.target.name as keyof TFilters,
                  value: (e.target as HTMLInputElement).value,
                })
              )
            }
            placeholder="Search"
            className="w-full md:w-auto p-2 border border-gray-300 rounded-md mb-2 md:mb-0"
          />
        </form>
      </div>

      <div className="my-4">
        <h4 className="py-4">Category</h4>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-justify">
          {categoryOnlyData.map((curElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={(e) =>
                dispatch(
                  updateFiltersValue({
                    name: (e.target as HTMLButtonElement).name as keyof TFilters,
                    value: (e.target as HTMLButtonElement).value,
                  })
                )
              }
              className="p-2 border border-gray-300 rounded-md mb-2 md:mb-0"
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>

      <div className="my-4">
        <h4 className="py-4">Price</h4>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <p>{filters.price}</p>
          <input
            type="range"
            name="price"
            min={filters.minPrice}
            max={filters.maxPrice}
            value={filters.price}
            onChange={(e) =>
              dispatch(
                updateFiltersValue({
                  name: e.target.name as keyof TFilters,
                  value: (e.target as HTMLInputElement).value,
                })
              )
            }
            className="w-full md:w-auto"
          />
        </div>
      </div>

      <div className="my-4 text-center">
        <button 
          onClick={() => dispatch(clearFilters())} 
          className="p-2 bg-red-500 text-white rounded-md"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SportingFilter;
