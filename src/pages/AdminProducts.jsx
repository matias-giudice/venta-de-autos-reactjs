import { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ConfirmModal from "../components/ConfirmModal";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const API_URL = "https://68ec7d50eff9ad3b14022899.mockapi.io/api/v1/cars";

    //Cargamos productos
    const fetchProducts = async () => {
        setLoading(true);
        try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProducts(data);
        } catch (err) {
        setError("Error cargando productos");
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    //Agregamos producto
    const handleAdd = async (data) => {
        try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const newProduct = await res.json();
        setProducts((prev) => [...prev, newProduct]);
        } catch (err) {
        alert("Error agregando producto");
        }
    };

    //Editamos producto
    const handleUpdate = async (id, data) => {
        try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const updated = await res.json();
        setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
        } catch (err) {
        alert("Error actualizando producto");
        }
    };

    //Eliminamos producto
    const handleDelete = (id) => {
        setProductToDelete(id); //guardamos el producto a eliminar
        setShowConfirm(true);   //mostramos el modal
    };

    if (loading)
        return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
        >
            <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Cargando productos...</span>
            </div>
        </div>
        );

    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Gestión de Productos</h2>
            <button onClick={() => { setEditingProduct(null); setShowForm(true); }}>
                Agregar Producto
            </button>

            {showForm && (
                <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
                <ProductForm
                    initialData={editingProduct}
                    onSuccess={async (data) => {
                    if (editingProduct) await handleUpdate(editingProduct.id, data);
                    else await handleAdd(data);
                    setShowForm(false);
                    setEditingProduct(null);
                    }}
                    onCancel={() => { setShowForm(false); setEditingProduct(null); }}
                />
                </div>
            )}
            <table className="admin-table">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                    <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>${parseFloat(p.price).toLocaleString()}</td>
                        <td>
                        <img src={p.image} alt={p.alt} />
                        </td>
                        <td>
                        <button className="btn-editar" onClick={() => { setEditingProduct(p); setShowForm(true); }}>
                            Editar
                        </button>
                        <button className="btn-eliminar" onClick={() => handleDelete(p.id)} style={{ marginLeft: "10px" }}>
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {showConfirm && (
                <ConfirmModal
                message="¿Estás seguro que quieres eliminar este producto?"
                onConfirm={async () => {
                    try {
                    await fetch(`${API_URL}/${productToDelete}`, { method: "DELETE" });
                    setProducts((prev) => prev.filter((p) => p.id !== productToDelete));
                    } catch (err) {
                    alert("Error eliminando producto");
                    } finally {
                    setShowConfirm(false);
                    setProductToDelete(null);
                    }
                }}
                onCancel={() => {
                    setShowConfirm(false);
                    setProductToDelete(null);
                }}
                />
            )}
        </div>
    );
};

export default AdminProducts;