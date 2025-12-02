import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart((prev) => {
      const existe = prev.find((p) => p.id === producto.id);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const modificarCantidad = (id, cambio) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad + cambio } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  const eliminarProducto = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        modificarCantidad,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);