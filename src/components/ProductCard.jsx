const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card" style={{ backgroundColor: "#444654", color: "#fff", borderRadius: "6px", padding: "15px", width: "250px", textAlign: "center" }}>
      <img src={product.image} alt={product.alt} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{product.name}</h3>
      <p>${parseFloat(product.price).toLocaleString()}</p>
      <button onClick={() => addToCart(product)} style={{ padding: "10px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;