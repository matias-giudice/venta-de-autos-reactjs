import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="row g-4 justify-content-center">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;