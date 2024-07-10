

import GridView from '../GridView/GridView';

const ProductList = () => {
    // const { filter_products, grid_view } = useFilterContext();
    // console.log(filter_products);
  
  if (grid_view === true) {
    return <GridView products={filter_products}></GridView>;
  }

};

export default ProductList;