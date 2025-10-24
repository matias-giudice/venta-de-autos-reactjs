import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68ec7d50eff9ad3b14022899.mockapi.io/api/v1/cars")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError("Error cargando productos"))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  if (loading)
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Cargando productos...</span>
      </div>
    </div>
  );
  
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Products;