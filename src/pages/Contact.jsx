import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <div>
    <Helmet>
      <title>Contacto - Venta de Autos</title>
      <meta name="description" content="Contáctanos para cualquier consulta o información sobre nuestros autos." />
    </Helmet>

    <h2>Contacto</h2>
    <ContactForm />
  </div>
);

export default Contact;