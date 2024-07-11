import { sortingProducts, updateSortValue } from '@/redux/features/filterProductsSlice';

import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { RootState } from '@/redux/hooks/store';

const SportingSort = () => {
  const dispatch = useDispatch();
  const { filter_products, sorting_value } = useSelector(
    (state:RootState) => state.filter
  );

  const handleSortingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSortValue(e.currentTarget.value));
    dispatch(sortingProducts());
  };

  // Function to filter products based on selected sorting value
  const filterProductsByCategory = (value: string) => {
    let filteredProducts = [...filter_products];

    if (value === 'a-z') {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (value === 'z-a') {
      filteredProducts = filteredProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    } else {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === value.toLowerCase()
      );
    }

    return filteredProducts;
  };

  // Use filterProductsByCategory to filter products based on sorting_value
  const filteredProducts = filterProductsByCategory(sorting_value);

  return (
    <div>
      <div className="sorting-section pt-12">
        <div className="product-data">
          <p>{`${filteredProducts.length} Products Available`}</p>
        </div>
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              value={sorting_value}
              onChange={handleSortingChange}
            >
              <option value="lowest">Price (lowest)</option>
              <option value="highest">Price (highest)</option>
              <option value="a-z">Name (A-Z)</option>
              <option value="z-a">Name (Z-A)</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SportingSort;