import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      alert("Todos los campos son obligatorios");
    } else {
      alert("Formulario enviado!");
      setForm({ nombre: "", email: "", mensaje: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px" }}>
      <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
      <input type="email" name="email" placeholder="Correo" value={form.email} onChange={handleChange} />
      <textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange}></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;