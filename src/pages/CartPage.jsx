import Cart from "../components/Cart";

const Carrito = ({ cart, setCart }) => {
  return (
    <Cart
      cart={cart}
      modificarCantidad={(id, cambio) =>
        setCart(prev =>
          prev
            .map(p => (p.id === id ? { ...p, cantidad: p.cantidad + cambio } : p))
            .filter(p => p.cantidad > 0)
        )
      }
      eliminarProducto={id =>
        setCart(prev => prev.filter(p => p.id !== id))
      }
    />
  );
};

export default Carrito;
