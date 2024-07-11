import { useSelector } from "react-redux";
import FilterSporting from "@/components/Product/FilterSporting/FilterSporting";
import SportingSort from "@/components/Product/SportingSort/SportingSort";
import SportingCard from "@/components/Product/SportingCard/SportingCard";

// Your defined types
interface Product {
  id: string;
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

interface FilterState {
  filter_products: Product[];
  isLoading: boolean;
}

interface RootState {
  filter: FilterState;
}

const Products = () => {
  const { filter_products, isLoading } = useSelector(
    (state: RootState) => state.filter
  );

  if (isLoading) {
    return <p className="text-2xl text-center text-red-500">Loading .... </p>;
  }

  return (
    <div className="my-20 mx-5">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:basis-1/1">
          <FilterSporting />
        </div>
        <div className="lg:basis-9/12">
          <SportingCard products={filter_products} />
        </div>
        <div className="lg:basis-1/1">
          <SportingSort />
        </div>
      </div>
    </div>
  );
};

export default Products;
