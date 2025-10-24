import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Carrito from "./pages/CartPage";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  const [cart, setCart] = useState([]);
  //para este proyecto, solo la ruta del carrito esta protegida, porque las otras rutas no tienen informacion "critica"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="productos"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route
            path="carrito"
            element={
              <ProtectedRoute>
                <Carrito cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route path="resenias" element={<Reviews />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;