import { FaStar } from "react-icons/fa";

function StarRating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <FaStar
            className="stars"
            key={i}
            values={`${ratingValue}`}
            color={ratingValue <= rating ? "#ff6060" : "#e3e3e3"}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
