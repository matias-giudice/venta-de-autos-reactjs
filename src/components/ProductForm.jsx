import { useState } from "react";
import { toast } from "react-toastify";

const ProductForm = ({ initialData = null, onSuccess, onCancel }) => {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    price: initialData?.price || "",
    image: initialData?.image || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validaciones
    if (!form.name) {
      toast.error("Nombre obligatorio");
      return;
    }

    if (!form.price || Number(form.price) <= 0) {
      toast.error("Precio debe ser mayor a 0");
      return;
    }

    if (!form.image) {
      toast.error("Imagen obligatoria");
      return;
    }

    const data = { ...form, name: form.name.toUpperCase(), alt: form.name.toUpperCase() }; //Convertimos nombre a mayúsculas

    onSuccess(data); //Llamamos al callback que decide si es POST o PUT
    toast.success("Producto guardado correctamente");
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h3>{initialData ? "Editar Producto" : "Agregar Producto"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={form.price}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="image"
            placeholder="URL Imagen"
            value={form.image}
            onChange={handleChange}
            className="input-field"
          />
          <div className="modal-buttons">
            <button type="submit" className="btn-editar">{initialData ? "Actualizar" : "Agregar"}</button>
            <button type="button" className="btn-eliminar" onClick={onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;