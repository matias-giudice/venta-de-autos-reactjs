import { Helmet } from "react-helmet";
import Cart from "../components/Cart";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const {
    cart,
    modificarCantidad,
    eliminarProducto,
  } = useCarrito();

  return (
    <div>
      <Helmet>
        <title>Carrito - Venta de Autos</title>
        <meta
          name="description"
          content="Revisa los productos que agregaste a tu carrito antes de finalizar la compra."
        />
      </Helmet>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <Cart
              cart={cart}
              modificarCantidad={modificarCantidad}
              eliminarProducto={eliminarProducto}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;