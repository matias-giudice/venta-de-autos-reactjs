import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;