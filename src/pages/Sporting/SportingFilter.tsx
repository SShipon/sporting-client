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
    <div>
      <div className="w-full border-rose-700">
        <form onSubmit={(e) => e.preventDefault()}>
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
          />
        </form>
      </div>

      <div className="filter-category">
        <h4>Category</h4>
        <div className="category-name">
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
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-price">
        <h4>Price</h4>
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
        />
      </div>

      <div className="filter-clear">
        <button onClick={() => dispatch(clearFilters())}>Clear Filters</button>
      </div>
    </div>
  );
};

export default SportingFilter;
