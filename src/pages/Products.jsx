import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { useCarrito } from "../context/CarritoContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); //estado para la búsqueda
  const [currentPage, setCurrentPage] = useState(1); //página actual
  const itemsPerPage = 8; //cantidad de productos por página

  const { agregarAlCarrito } = useCarrito(); //Context del carrito

  useEffect(() => {
    fetch("https://68ec7d50eff9ad3b14022899.mockapi.io/api/v1/cars")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setError("Error cargando productos"))
      .finally(() => setLoading(false));
  }, []);

  //Filtrar productos por nombre según búsqueda
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  //Paginación
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

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
    <div className="container my-4">
      <Helmet>
        <title>Productos - Venta de Autos</title>
        <meta name="description" content="Descubre todos nuestros autos disponibles para la venta." />
      </Helmet>

      {/*Barra de búsqueda*/}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="form-control"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
        />
      </div>

      {/*Lista de productos*/}
      <ProductList products={paginatedProducts} />

      {/*Paginación*/}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Anterior</button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i+1} className={`page-item ${currentPage === i+1 && "active"}`}>
                <button className="page-link" onClick={() => handlePageChange(i+1)}>{i+1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Siguiente</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Products;