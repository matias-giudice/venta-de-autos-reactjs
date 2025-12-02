import Cart from "../components/Cart";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const {
    cart,
    modificarCantidad,
    eliminarProducto,
  } = useCarrito();

  return (
    <Cart
      cart={cart}
      modificarCantidad={modificarCantidad}
      eliminarProducto={eliminarProducto}
    />
  );
};

export default Carrito;