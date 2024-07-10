import { useGetProductsQuery } from "@/redux/api/api";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div className="my-20">
      <div className="container mx-auto ">
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <img src={product.images} alt="" srcset="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;



{/*<section>
<FilterSection></FilterSection>
</section>

<section className="product-view-sort">

<div className="sort-filter">
  <Sort></Sort>
</div>

<div className="main-product">
  <ProductList></ProductList>
</div>
</section>*/}
