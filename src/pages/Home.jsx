import { Helmet } from "react-helmet";

const Home = () => (
  <div style={{ textAlign: "center" }}>
    <Helmet>
      <title>Inicio - Venta de Autos</title>
      <meta name="description" content="Bienvenido a nuestra tienda de autos. Explora nuestros productos y ofertas." />
    </Helmet>
    
    <h2>Bienvenido a Venta de Autos</h2>
    <p>Encuentra el auto ideal al mejor precio.</p>
  </div>
);

export default Home;