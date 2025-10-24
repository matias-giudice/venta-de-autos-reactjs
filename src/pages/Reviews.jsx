import { useState, useEffect } from "react";
import Review from "../components/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]); // importante inicializar como array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://68ec7d50eff9ad3b14022899.mockapi.io/api/v1/reviews")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => setError("Error cargando reseñas"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Cargando reseñas...</span>
      </div>
    </div>
  );

  if (error) return <p>{error}</p>;

  return (
    <div className="resenias-grid">
      {reviews.map(r => (
        <Review key={r.id} review={r} />
      ))}
    </div>
  );
};

export default Reviews;