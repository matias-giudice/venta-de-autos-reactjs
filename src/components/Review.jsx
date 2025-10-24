const Review = ({ review }) => (
  <div className="resenia">
    <img className="resenia-foto" src={review.avatar} alt={review.name} />
    <div className="resenia-texto">
      <p>{review.description}</p>
      <strong>{review.name}</strong>
    </div>
  </div>
);

export default Review;