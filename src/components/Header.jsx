import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header style={{ backgroundColor: "#202123", padding: "20px", textAlign: "center" }}>
      <h1>Venta de Autos</h1>
      <nav>
        <ul style={{ display: "flex", justifyContent: "center", gap: "15px", listStyle: "none" }}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Autos</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
          <li><Link to="/resenias">Reseñas</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          {user ? (
            <>
              <li style={{ color: "white" }}>Hola, {user.email}</li>
              <li>
                <button onClick={logout} style={{backgroundColor: "#444654", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer",}}>Cerrar sesión</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" style={{backgroundColor: "#444654", color: "white", padding: "6px 10px", borderRadius: "4px", textDecoration: "none",}}>Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;