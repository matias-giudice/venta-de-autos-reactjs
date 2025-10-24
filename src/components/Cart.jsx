const Cart = ({ cart, modificarCantidad, eliminarProducto }) => {
  if (cart.length === 0)
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", fontSize: "1.2rem", color: "#fff",}} >
      Carrito vacío
    </div>
  );

  return (
    <section className="carritoCompras">
      <h2>Carrito</h2>
      <ul className="lista-carrito">
        {cart.map((p) => (
          <li key={p.id}>
            {p.name} - ${parseFloat(p.price).toLocaleString()} x {p.cantidad}
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={() => modificarCantidad(p.id, 1)}>+</button>
              <button onClick={() => modificarCantidad(p.id, -1)}>-</button>
              <button onClick={() => eliminarProducto(p.id)}>x</button>
            </div>
          </li>
        ))}
      </ul>
      <p>
        Total: $
        {cart
          .reduce((acc, p) => acc + parseFloat(p.price) * p.cantidad, 0)
          .toLocaleString()}
      </p>
    </section>
  );
};

export default Cart;