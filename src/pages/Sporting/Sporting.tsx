import { useSelector } from "react-redux";

import { RootState } from "@/types";
import SportingFilter from "./SportingFilter";
import SportingCard from "@/components/Sporting/SportingCard/SportingCard";
import SportingSort from "./SportingSort";

// Your defined types 

const Sporting = () => {
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
        <SportingFilter />
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

export default Sporting;
