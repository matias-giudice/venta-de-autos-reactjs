import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { useCarrito } from "../context/CarritoContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useCarrito(); //Context del carrito

  useEffect(() => {
    fetch("https://68ec7d50eff9ad3b14022899.mockapi.io/api/v1/cars")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => setError("Error cargando productos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Cargando productos...</span>
        </div>
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <div>
      <Helmet>
        <title>Productos - Venta de Autos</title>
        <meta name="description" content="Descubre todos nuestros autos disponibles para la venta." />
      </Helmet>
      
      <ProductList products={products} />
    </div>
  );
};

export default Products;