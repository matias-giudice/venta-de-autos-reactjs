import { useCarrito } from "../context/CarritoContext";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div
      className="card"
      style={{
        backgroundColor: "#444654",
        color: "#fff",
        borderRadius: "6px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.alt}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      
      <h3>{product.name}</h3>
      <p>${parseFloat(product.price).toLocaleString()}</p>

      <button
        onClick={() => agregarAlCarrito(product)}
        className="btn btn-success"
      >
        <FaCartPlus /> Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;